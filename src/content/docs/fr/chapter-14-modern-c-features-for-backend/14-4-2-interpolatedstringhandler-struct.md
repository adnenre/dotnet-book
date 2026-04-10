---
title: Structure InterpolatedStringHandler
sidebar:
  order: 709
  label: 14.4.2 Structure InterpolatedStringHandler
---

**Contexte** : Un gestionnaire de chaînes interpolées personnalisé est un `ref struct` qui implémente le motif reconnu par le compilateur C#. Il doit avoir un constructeur avec les paramètres `int literalLength, int formattedCount` (et éventuellement un paramètre booléen pour contrôler la construction conditionnelle). Le gestionnaire fournit les méthodes `AppendLiteral` et `AppendFormatted`. Le compilateur traduit la chaîne interpolée en appels à ces méthodes.

## Exemple d'utilisation

```csharp
using System;
using System.Runtime.CompilerServices;
using System.Text;

[InterpolatedStringHandler]
public ref struct GestionnaireStringBuilder
{
    private StringBuilder _builder;
    public GestionnaireStringBuilder(int longueurLitterale, int nombreFormate)
    {
        _builder = new StringBuilder(longueurLitterale + nombreFormate * 10);
    }
    public void AppendLiteral(string s) => _builder.Append(s);
    public void AppendFormatted<T>(T t) => _builder.Append(t);
    public override string ToString() => _builder.ToString();
}

static class Constructeur
{
    public static string Construire(GestionnaireStringBuilder handler) => handler.ToString();
}

class Program
{
    static void Main()
    {
        string resultat = Constructeur.Construire($"Nombre : {42}, Flag : {true}");
        Console.WriteLine(resultat);
    }
}
```

## Sortie console

```shell
dotnet run
Nombre : 42, Flag : True
```

## Remarques importantes

- Le gestionnaire doit être un `ref struct` pour éviter les allocations tas.
- Vous pouvez surcharger le constructeur pour accepter un paramètre `out bool` pour une construction conditionnelle.
- Le gestionnaire peut accumuler des données de n'importe quelle manière (ex. écrire directement dans un flux).

## Exemple d'utilisation dans le monde réel

**Journalisation JSON conditionnelle** – Construisez des entrées de journal JSON uniquement si la journalisation est activée, en utilisant un gestionnaire personnalisé qui écrit dans un tampon poolisé.  
Voir [documentation .NET sur la création d'un gestionnaire](https://docs.microsoft.com/fr-fr/dotnet/csharp/whats-new/tutorials/interpolated-string-handler#write-a-custom-handler).

## Sections connexes

- [14.4 Gestionnaires de chaînes interpolées](/fr/chapter-14-modern-csharp-features-for-backend/14-4-interpolated-string-handlers)
- [14.4.1 Optimisation des performances pour la journalisation](/fr/chapter-14-modern-csharp-features-for-backend/14-4-1-performance-optimisation-for-logging)
