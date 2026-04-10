---
title: Quantificateurs
sidebar:
  order: 203
  label: 8.4.9 Quantificateurs
---

**Contexte** : Les quantificateurs (`Any`, `All`, `Contains`) vérifient des conditions sur une séquence et retournent un `bool`.

```csharp
int[] numbers = { 1, 2, 3 };
bool anyEven = numbers.Any(n => n % 2 == 0); // true
bool allPositive = numbers.All(n => n > 0); // true
bool containsTwo = numbers.Contains(2); // true
```

## Exemple d'utilisation dans le monde réel

**Validation** : Utilisez `Any` pour vérifier si une collection contient des éléments avant de la traiter.

**Exemple** : Dans [EF Core](https://docs.microsoft.com/en-us/ef/core/querying/), `Any` se traduit par `EXISTS` en SQL, ce qui est efficace.

## Sections connexes

- [8.4 Opérateurs courants](/fr/chapter-8-linq-language-integrated-query/8-4-common-operators)
- [8.4.7 Opérateurs d’élément](/fr/chapter-8-linq-language-integrated-query/8-4-7-element-operators)
