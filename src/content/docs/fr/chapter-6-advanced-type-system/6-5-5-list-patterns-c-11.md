---
title: Motif de liste (C# 11)
sidebar:
  order: 160
  label: 6.5.5 Motif de liste (C# 11)
---

**Contexte** : Les motifs de liste (C# 11) permettent de faire correspondre des tableaux ou des listes à une séquence d’éléments.

```csharp
int[] numbers = { 1, 2, 3 };
if (numbers is [1, 2, 3])
{
    Console.WriteLine("Correspondance exacte");
}
```

## Motif de tranche (slice)

Utilisez `..` pour correspondre à un nombre quelconque d’éléments.

```csharp
int[] arr = { 1, 2, 3, 4, 5 };
if (arr is [1, .., 5])
{
    Console.WriteLine("Commence par 1, finit par 5");
}
```

## Exemple d'utilisation dans le monde réel

**Analyse des arguments de ligne de commande** : Faites correspondre le tableau `args` avec des motifs de liste (ex. `["--help"]`, `["--output", .. var rest]`).

**Exemple** : Dans [System.CommandLine](https://docs.microsoft.com/en-us/dotnet/standard/commandline/), vous pourriez implémenter une analyse personnalisée avec des motifs de liste.

## Sections connexes

- [6.5 Filtrage par motif](/fr/chapter-6-advanced-type-system/6-5-pattern-matching)
- [6.5.6 Motif var](/fr/chapter-6-advanced-type-system/6-5-6-var-pattern)
