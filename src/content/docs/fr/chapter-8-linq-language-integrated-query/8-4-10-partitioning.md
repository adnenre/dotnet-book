---
title: Partitionnement
sidebar:
  order: 204
  label: 8.4.10 Partitionnement
---

**Contexte** : Les opérateurs de partitionnement (`Take`, `Skip`, `TakeWhile`, `SkipWhile`) retournent un sous‑ensemble d’éléments basé sur la position ou une condition.

```csharp
int[] numbers = { 1, 2, 3, 4, 5 };
var firstThree = numbers.Take(3); // 1,2,3
var afterTwo = numbers.Skip(2); // 3,4,5
var takeWhile = numbers.TakeWhile(n => n < 4); // 1,2,3
var skipWhile = numbers.SkipWhile(n => n < 3); // 3,4,5
```

## Exemple d'utilisation dans le monde réel

**Pagination** : Utilisez `Skip` et `Take` pour implémenter la navigation par pages dans les applications web.

**Exemple** : Dans [ASP.NET Core](https://docs.microsoft.com/en-us/aspnet/core/data/ef-mvc/sort-filter-page), la pagination est réalisée avec `.Skip(page * size).Take(size)`.

## Sections connexes

- [8.4 Opérateurs courants](/fr/chapter-8-linq-language-integrated-query/8-4-common-operators)
- [8.2.3 Opérateurs streaming vs buffering](/fr/chapter-8-linq-language-integrated-query/8-2-3-streaming-vs-buffering-operators)
