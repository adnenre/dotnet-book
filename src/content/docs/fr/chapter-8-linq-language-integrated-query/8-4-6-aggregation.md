---
title: Agrégation
sidebar:
  order: 200
  label: 8.4.6 Agrégation
---

**Contexte** : Les opérateurs d’agrégation (`Count`, `Sum`, `Average`, `Min`, `Max`, `Aggregate`) calculent une valeur unique à partir d’une séquence.

```csharp
int[] numbers = { 1, 2, 3, 4 };
int count = numbers.Count(); // 4
int sum = numbers.Sum(); // 10
double avg = numbers.Average(); // 2.5
int min = numbers.Min(); // 1
int max = numbers.Max(); // 4
int product = numbers.Aggregate((a, b) => a * b); // 24
```

## Exemple d'utilisation dans le monde réel

**Indicateurs clés de performance (KPI)** : Utilisez `Sum` pour le total des ventes, `Average` pour la valeur moyenne des commandes.

**Exemple** : Dans [EF Core](https://docs.microsoft.com/en-us/ef/core/querying/), les opérateurs d’agrégation se traduisent en SQL `COUNT`, `SUM`, etc.

## Sections connexes

- [8.4 Opérateurs courants](/fr/chapter-8-linq-language-integrated-query/8-4-common-operators)
- [8.4.7 Opérateurs d’élément](/fr/chapter-8-linq-language-integrated-query/8-4-7-element-operators)
