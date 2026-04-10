---
title: Filtrage
sidebar:
  order: 195
  label: 8.4.1 Filtrage
---

**Contexte** : Les opérateurs de filtrage (`Where`, `OfType`) sélectionnent les éléments qui satisfont une condition.

```csharp
int[] numbers = { 1, 2, 3, 4, 5 };
var even = numbers.Where(n => n % 2 == 0); // 2,4

object[] mixed = { 1, "deux", 3, "quatre" };
var strings = mixed.OfType<string>(); // "deux", "quatre"
```

## Exemple d'utilisation dans le monde réel

**Filtrage des données invalides** : Utilisez `Where` pour exclure les valeurs null, les chaînes vides ou les valeurs hors limites.

**Exemple** : Dans [ASP.NET Core](https://docs.microsoft.com/en-us/aspnet/core/), vous filtrez les collections avant de les envoyer à la vue.

## Sections connexes

- [8.4 Opérateurs courants](/fr/chapter-8-linq-language-integrated-query/8-4-common-operators)
- [8.4.2 Projection](/fr/chapter-8-linq-language-integrated-query/8-4-2-projection)
