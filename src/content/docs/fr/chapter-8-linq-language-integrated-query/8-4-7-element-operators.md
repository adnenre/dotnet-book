---
title: Opérateurs d’élément
sidebar:
  order: 201
  label: 8.4.7 Opérateurs d’élément
---

**Contexte** : Les opérateurs d’élément retournent un seul élément (`First`, `Last`, `Single`, `ElementAt`) ou une valeur par défaut si non trouvé.

```csharp
int[] numbers = { 10, 20, 30 };
int first = numbers.First(); // 10
int last = numbers.Last(); // 30
int second = numbers.ElementAt(1); // 20
int firstEven = numbers.FirstOrDefault(n => n % 2 == 0); // 10
int missing = numbers.SingleOrDefault(n => n > 100); // 0 (default)
```

## Exemple d'utilisation dans le monde réel

**Obtention d’un enregistrement spécifique** : Utilisez `FirstOrDefault` lors de la récupération d’un utilisateur par ID (gérez le cas non trouvé).

**Exemple** : Dans [EF Core](https://docs.microsoft.com/en-us/ef/core/querying/), `FirstOrDefault` se traduit par `SELECT TOP 1`.

## Sections connexes

- [8.4 Opérateurs courants](/fr/chapter-8-linq-language-integrated-query/8-4-common-operators)
- [8.4.6 Agrégation](/fr/chapter-8-linq-language-integrated-query/8-4-6-aggregation)
