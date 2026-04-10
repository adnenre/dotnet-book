---
title: CallerFilePath et CallerLineNumber
sidebar:
  order: 713
  label: 14.5.3 CallerFilePath et CallerLineNumber
---

**Contexte** : `[CallerFilePath]` et `[CallerLineNumber]` fournissent le chemin du fichier source et le numéro de ligne de l'appelant. Ils sont inestimables pour la journalisation, le rapport d'erreurs et les outils de diagnostic car ils indiquent exactement où un appel a eu lieu sans suivi manuel.

## Exemple d'utilisation

```csharp
using System;
using System.Runtime.CompilerServices;

public static class Trace
{
    public static void Ecrire(string message,
        [CallerFilePath] string fichier = "",
        [CallerLineNumber] int ligne = 0)
    {
        Console.WriteLine($"{System.IO.Path.GetFileName(fichier)}:{ligne} - {message}");
    }
}

class Program
{
    static void Main()
    {
        Trace.Ecrire("Bonjour depuis Main");
    }
}
```

## Sortie console

```shell
dotnet run
Program.cs:15 - Bonjour depuis Main
```

## Remarques importantes

- `CallerFilePath` donne le chemin physique complet ; vous pouvez utiliser `Path.GetFileName` pour le raccourcir.
- `CallerLineNumber` est un entier.
- Ces attributs sont évalués à la compilation.

## Exemple d'utilisation dans le monde réel

**Bibliothèque d'assertions personnalisée** – Lorsqu'une assertion échoue, enregistrez le fichier et la ligne où l'échec s'est produit pour une navigation rapide.  
Voir [documentation .NET sur CallerFilePath](https://docs.microsoft.com/fr-fr/dotnet/api/system.runtime.compilerservices.callerfilepathattribute).

## Sections connexes

- [14.5 Attributs d'information appelant](/fr/chapter-14-modern-csharp-features-for-backend/14-5-caller-info-attributes)
- [14.5.1 CallerMemberName](/fr/chapter-14-modern-csharp-features-for-backend/14-5-1-callermembername)
