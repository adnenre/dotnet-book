---
title: Tri
sidebar:
  order: 197
  label: 8.4.3 Tri
---

**Contexte** : Les opérateurs de tri (`OrderBy`, `OrderByDescending`, `ThenBy`, `ThenByDescending`, `Reverse`) trient les éléments.

```csharp
var fruits = new[] { "banane", "pomme", "cerise" };
var ascending = fruits.OrderBy(f => f); // pomme, banane, cerise
var descending = fruits.OrderByDescending(f => f.Length); // banane, cerise, pomme
var thenBy = fruits.OrderBy(f => f.Length).ThenBy(f => f);
var reversed = fruits.Reverse(); // cerise, pomme, banane
```

## Exemple d'utilisation dans le monde réel

**Tri des listes d’utilisateurs** : Utilisez `OrderBy` pour les données triées et paginées dans les applications web.

**Exemple** : Dans [ASP.NET Core](https://docs.microsoft.com/en-us/aspnet/core/data/ef-mvc/sort-filter-page), le tri est souvent implémenté avec `OrderBy`.

## Sections connexes

- [8.4 Opérateurs courants](/fr/chapter-8-linq-language-integrated-query/8-4-common-operators)
- [8.4.2 Projection](/fr/chapter-8-linq-language-integrated-query/8-4-2-projection)
