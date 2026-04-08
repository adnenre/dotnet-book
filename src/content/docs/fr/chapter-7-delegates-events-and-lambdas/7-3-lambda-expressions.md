---
title: Expressions lambda
sidebar:
  order: 173
  label: 7.3 Expressions lambda
---

**Contexte** : Les expressions lambda sont des fonctions anonymes écrites en ligne. Elles sont concises et largement utilisées dans LINQ, les événements et la programmation fonctionnelle.

```csharp
Func<int, int> square = x => x * x;
Console.WriteLine(square(5)); // 25
```

## Exemple d'utilisation dans le monde réel

**Requêtes LINQ** : Les lambdas sont au cœur de LINQ : `Where(x => x > 5)`, `Select(x => x.Name)`, `OrderBy(x => x.Date)`.

**Exemple** : [Enumerable.Where](https://docs.microsoft.com/en-us/dotnet/api/system.linq.enumerable.where) attend une expression lambda `Func<TSource, bool>`.

## Sections connexes

- [7.3.1 Syntaxe](/fr/chapter-7-delegates-events-and-lambdas/7-3-1-syntax)
- [7.3.2 Lambdas à instructions](/fr/chapter-7-delegates-events-and-lambdas/7-3-2-statement-lambdas)
- [7.3.3 Capture de variables externes (fermetures)](/fr/chapter-7-delegates-events-and-lambdas/7-3-3-capturing-outer-variables-closures)
- [7.3.4 Arbres d’expressions](/fr/chapter-7-delegates-events-and-lambdas/7-3-4-expression-trees)
