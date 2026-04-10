---
title: Opérateurs d’ensemble
sidebar:
  order: 202
  label: 8.4.8 Opérateurs d’ensemble
---

**Contexte** : Les opérateurs d’ensemble (`Distinct`, `Union`, `Intersect`, `Except`, `Concat`) effectuent des opérations ensemblistes sur des séquences.

```csharp
int[] a = { 1, 2, 3 };
int[] b = { 3, 4, 5 };

var distinct = a.Distinct(); // 1,2,3
var union = a.Union(b); // 1,2,3,4,5
var intersect = a.Intersect(b); // 3
var except = a.Except(b); // 1,2
var concat = a.Concat(b); // 1,2,3,3,4,5
```

## Exemple d'utilisation dans le monde réel

**Fusion des permissions utilisateur** : Utilisez `Union` pour combiner des ensembles de permissions provenant de différents rôles.

**Exemple** : Dans [Entity Framework Core](https://docs.microsoft.com/en-us/ef/core/), `Union` se traduit en SQL `UNION`.

## Sections connexes

- [8.4 Opérateurs courants](/fr/chapter-8-linq-language-integrated-query/8-4-common-operators)
- [8.4.5 Jointures](/fr/chapter-8-linq-language-integrated-query/8-4-5-joining)
