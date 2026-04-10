---
title: Opérateurs différés
sidebar:
  order: 187
  label: 8.2.1 Opérateurs différés
---

**Contexte** : Les opérateurs différés (par exemple `Where`, `Select`, `OrderBy`) ne s’exécutent pas tant que la requête n’est pas énumérée. Ils retournent un `IEnumerable<T>`.

```csharp
var deferred = numbers.Where(n => n > 2); // pas d’exécution
// L’exécution a lieu ici
foreach (var item in deferred) { }
```

## Liste des opérateurs différés courants

- `Where`, `Select`, `SelectMany`
- `Take`, `Skip`
- `OrderBy`, `OrderByDescending`, `ThenBy`
- `GroupBy`, `Join`, `GroupJoin`
- `Concat`, `Distinct`, `Union`, `Intersect`, `Except`

## Exemple d'utilisation dans le monde réel

**Composition de requêtes complexes** : L’exécution différée permet de construire des requêtes conditionnellement sans pénalité de performance jusqu’à l’énumération finale.

**Exemple** : Dans [EF Core](https://docs.microsoft.com/en-us/ef/core/querying/), tous les opérateurs `IQueryable` sont différés jusqu’à `ToList()` ou `foreach`.

## Sections connexes

- [8.2 Exécution différée vs immédiate](/fr/chapter-8-linq-language-integrated-query/8-2-deferred-vs-immediate-execution)
- [8.2.2 Opérateurs immédiats](/fr/chapter-8-linq-language-integrated-query/8-2-2-immediate-operators)
