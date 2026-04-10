---
title: Attributs d'information appelant
sidebar:
  order: 710
  label: 14.5 Attributs d'information appelant
---

**Contexte** : Les attributs d'information appelant (disponibles depuis C# 5) permettent à une méthode d'obtenir des informations sur l'appelant – comme le nom du membre, le chemin du fichier, le numéro de ligne, ou l'expression – sans les passer explicitement. Ces attributs sont appliqués à des paramètres optionnels avec des valeurs par défaut. Ils sont extrêmement utiles pour la journalisation, le débogage et les bibliothèques de validation.

## Exemple d'utilisation

```csharp
using System;
using System.Runtime.CompilerServices;

public static class Journal
{
    public static void Log(string message,
        [CallerMemberName] string membre = "",
        [CallerFilePath] string fichier = "",
        [CallerLineNumber] int ligne = 0)
    {
        Console.WriteLine($"{fichier}({ligne}): {membre} -> {message}");
    }
}

class Program
{
    static void Main()
    {
        Journal.Log("Démarré");
    }
}
```

## Sortie console

```shell
dotnet run
C:\Projets\Program.cs(12): Main -> Démarré
```

## Remarques importantes

- Le compilateur remplit automatiquement les valeurs au point d'appel.
- Les paramètres doivent avoir des valeurs par défaut (ex. `string membre = ""`).
- `CallerArgumentExpression` (C# 10) capture l'expression source sous forme de chaîne.

## Exemple d'utilisation dans le monde réel

**Validation d'arguments** – Utilisez `CallerArgumentExpression` pour afficher le nom du paramètre dans une `ArgumentException` sans le passer manuellement.  
Voir [documentation .NET sur les attributs d'information appelant](https://docs.microsoft.com/fr-fr/dotnet/csharp/language-reference/attributes/caller-information).

## Sections connexes

- [14.5.1 CallerMemberName](/fr/chapter-14-modern-csharp-features-for-backend/14-5-1-callermembername)
- [14.5.2 CallerArgumentExpression](/fr/chapter-14-modern-csharp-features-for-backend/14-5-2-callerargumentexpression)
- [14.5.3 CallerFilePath et CallerLineNumber](/fr/chapter-14-modern-csharp-features-for-backend/14-5-3-callerfilepath-and-callerlinenumber)
