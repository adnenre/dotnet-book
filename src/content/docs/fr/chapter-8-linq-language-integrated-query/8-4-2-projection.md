---
title: Projection
sidebar:
  order: 196
  label: 8.4.2 Projection
---

**Contexte** : Les opérateurs de projection (`Select`, `SelectMany`) transforment chaque élément en une nouvelle forme.

```csharp
var numbers = new[] { 1, 2, 3 };
var squares = numbers.Select(n => n * n); // 1,4,9

// SelectMany aplatit les collections
var lists = new[] { new[] { 1, 2 }, new[] { 3, 4 } };
var flat = lists.SelectMany(l => l); // 1,2,3,4
```

## Exemple d'utilisation dans le monde réel

**Projection DTO** : Utilisez `Select` pour mapper des entités de domaine vers des modèles de vue ou des DTO.

**Exemple** : Dans [EF Core](https://docs.microsoft.com/en-us/ef/core/querying/), `Select` est utilisé pour charger uniquement les colonnes nécessaires.

## Sections connexes

- [8.4 Opérateurs courants](/fr/chapter-8-linq-language-integrated-query/8-4-common-operators)
- [8.4.1 Filtrage](/fr/chapter-8-linq-language-integrated-query/8-4-1-filtering)
