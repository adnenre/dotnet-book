---
title: "Projet : Aide à la journalisation avec attributs d'information appelant"
sidebar:
  order: 714
  label: 14.6 Projet  Aide à la journalisation avec attributs d'information appelant
---

**Contexte** : Ce projet construit un assistant de journalisation qui capture automatiquement le nom du membre appelant, le chemin du fichier et le numéro de ligne en utilisant les attributs d'information appelant. Le journaliseur supporte plusieurs niveaux de log, écrit dans la console (ou tout `TextWriter`) et inclut des informations contextuelles sans que le développeur ait à les passer manuellement.

## Exemple d'utilisation

```csharp
using System;
using System.IO;
using System.Runtime.CompilerServices;

public enum NiveauLog
{
    Debug,
    Info,
    Attention,
    Erreur
}

public class Journaliseur
{
    private readonly TextWriter _writer;

    public Journaliseur(TextWriter writer = null)
    {
        _writer = writer ?? Console.Out;
    }

    public void Log(NiveauLog niveau, string message,
        [CallerMemberName] string membre = "",
        [CallerFilePath] string fichier = "",
        [CallerLineNumber] int ligne = 0)
    {
        string nomCourt = Path.GetFileName(fichier);
        string horodatage = DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss");
        _writer.WriteLine($"[{horodatage}] {niveau.ToString().ToUpper()} {nomCourt}:{ligne} {membre}() - {message}");
    }

    public void Debug(string msg, [CallerMemberName] string membre = "", [CallerFilePath] string fichier = "", [CallerLineNumber] int ligne = 0)
        => Log(NiveauLog.Debug, msg, membre, fichier, ligne);

    public void Info(string msg, [CallerMemberName] string membre = "", [CallerFilePath] string fichier = "", [CallerLineNumber] int ligne = 0)
        => Log(NiveauLog.Info, msg, membre, fichier, ligne);

    public void Attention(string msg, [CallerMemberName] string membre = "", [CallerFilePath] string fichier = "", [CallerLineNumber] int ligne = 0)
        => Log(NiveauLog.Attention, msg, membre, fichier, ligne);

    public void Erreur(string msg, [CallerMemberName] string membre = "", [CallerFilePath] string fichier = "", [CallerLineNumber] int ligne = 0)
        => Log(NiveauLog.Erreur, msg, membre, fichier, ligne);
}

public class Calculatrice
{
    private readonly Journaliseur _logger = new Journaliseur();

    public int Diviser(int a, int b)
    {
        _logger.Debug($"Diviser appelé avec {a}, {b}");
        if (b == 0)
        {
            _logger.Erreur("Division par zéro tentée");
            throw new DivideByZeroException();
        }
        int resultat = a / b;
        _logger.Info($"Résultat de la division : {resultat}");
        return resultat;
    }
}

class Program
{
    static void Main()
    {
        var calc = new Calculatrice();
        try
        {
            calc.Diviser(10, 2);
            calc.Diviser(10, 0);
        }
        catch { }
    }
}
```

## Sortie console

```shell
dotnet run
[2025-01-15 10:30:01] DEBUG Calculatrice.cs:35 Diviser() - Diviser appelé avec 10, 2
[2025-01-15 10:30:01] INFO Calculatrice.cs:41 Diviser() - Résultat de la division : 5
[2025-01-15 10:30:01] DEBUG Calculatrice.cs:35 Diviser() - Diviser appelé avec 10, 0
[2025-01-15 10:30:01] ERREUR Calculatrice.cs:38 Diviser() - Division par zéro tentée
```

## Comment exécuter

1. Créez un nouveau projet console : `dotnet new console -n AideJournalisation`
2. Remplacez `Program.cs` par le code ci-dessus.
3. Exécutez `dotnet run`

## Remarques importantes

- Les attributs d'information appelant fournissent un contexte automatique sans surcharge à l'exécution.
- Le journaliseur peut facilement être étendu pour écrire dans un fichier, une base de données, ou un service externe.
- Ce motif est similaire à `ILogger` mais avec une implémentation simplifiée.

## Exemple d'utilisation dans le monde réel

**Télémétrie personnalisée** – Utilisez les informations appelant pour attacher automatiquement l'emplacement source à chaque événement de télémétrie.  
Voir [documentation .NET sur la journalisation](https://docs.microsoft.com/fr-fr/dotnet/core/extensions/logging).

## Sections connexes

- [14.5 Attributs d'information appelant](/fr/chapter-14-modern-csharp-features-for-backend/14-5-caller-info-attributes)
- [14.5.3 CallerFilePath et CallerLineNumber](/fr/chapter-14-modern-csharp-features-for-backend/14-5-3-callerfilepath-and-callerlinenumber)
