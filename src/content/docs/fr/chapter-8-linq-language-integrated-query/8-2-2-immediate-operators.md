---
title: Opérateurs immédiats
sidebar:
  order: 188
  label: 8.2.2 Opérateurs immédiats
---

**Contexte** : Les opérateurs immédiats exécutent la requête immédiatement et retournent un résultat concret (par exemple, liste, valeur unique, dictionnaire).

```csharp
var numbers = new[] { 1, 2, 3 };
var list = numbers.Where(n => n > 1).ToList(); // exécute maintenant
var first = numbers.First(); // exécute maintenant
```

## Opérateurs immédiats courants

- `ToList()`, `ToArray()`, `ToDictionary()`, `ToHashSet()`
- `First()`, `FirstOrDefault()`, `Last()`, `Single()`
- `Count()`, `Sum()`, `Average()`, `Min()`, `Max()`
- `Any()`, `All()`, `Contains()`

## Exemple d'utilisation dans le monde réel

**Matérialisation des résultats pour mise en cache** : Utilisez `ToList()` pour exécuter une requête une fois et stocker le résultat, évitant ainsi des appels répétés à la base de données.

**Exemple** : Dans [ASP.NET Core](https://docs.microsoft.com/en-us/aspnet/core/performance/caching/), vous pouvez matérialiser une requête pour mettre en cache les données.

## Sections connexes

- [8.2 Exécution différée vs immédiate](/fr/chapter-8-linq-language-integrated-query/8-2-deferred-vs-immediate-execution)
- [8.2.1 Opérateurs différés](/fr/chapter-8-linq-language-integrated-query/8-2-1-deferred-operators)
