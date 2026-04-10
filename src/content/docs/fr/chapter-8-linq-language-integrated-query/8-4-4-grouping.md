---
title: Regroupement
sidebar:
  order: 198
  label: 8.4.4 Regroupement
---

**Contexte** : `GroupBy` regroupe les éléments par une clé. Il retourne une séquence de `IGrouping<TKey, TElement>`.

```csharp
var people = new[]
{
    new { Name = "Alice", City = "Paris" },
    new { Name = "Bob", City = "Londres" },
    new { Name = "Charlie", City = "Paris" }
};

var grouped = people.GroupBy(p => p.City);
foreach (var group in grouped)
{
    Console.WriteLine(group.Key);
    foreach (var person in group)
        Console.WriteLine($"  {person.Name}");
}
```

## Exemple d'utilisation dans le monde réel

**Analyses de tableau de bord** : Regroupez les données de ventes par mois, catégorie de produit ou région.

**Exemple** : Dans [EF Core](https://docs.microsoft.com/en-us/ef/core/querying/), `GroupBy` se traduit en SQL `GROUP BY`.

## Sections connexes

- [8.4 Opérateurs courants](/fr/chapter-8-linq-language-integrated-query/8-4-common-operators)
- [8.4.5 Jointures](/fr/chapter-8-linq-language-integrated-query/8-4-5-joining)
