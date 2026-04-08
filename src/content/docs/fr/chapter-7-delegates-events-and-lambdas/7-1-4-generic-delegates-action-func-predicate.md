---
title: Délégués génériques Action Func Predicate
sidebar:
  order: 167
  label: 7.1.4 Délégués génériques Action Func Predicate
---

**Contexte** : Le framework .NET fournit des délégués génériques pour les signatures courantes, évitant ainsi de déclarer des délégués personnalisés.

## Délégués `Action`

Pour les méthodes qui retournent `void`. Jusqu’à 16 paramètres.

```csharp
Action print = () => Console.WriteLine("Hello");
Action<string> log = (msg) => Console.WriteLine(msg);
Action<int, int> addAndPrint = (a, b) => Console.WriteLine(a + b);
```

## Délégués `Func`

Pour les méthodes qui retournent une valeur. Le dernier paramètre de type est le type de retour.

```csharp
Func<int> getNumber = () => 42;
Func<string, int> getLength = (s) => s.Length;
Func<int, int, int> add = (a, b) => a + b;
```

## Délégué `Predicate<T>`

Retourne `bool`. Équivalent à `Func<T, bool>`.

```csharp
Predicate<int> isEven = (x) => x % 2 == 0;
bool result = isEven(4); // true
```

## Exemple d'utilisation dans le monde réel

**Requêtes LINQ** : `Where` utilise `Func<TSource, bool>` (un prédicat). `ForEach` utilise `Action<T>`. `Select` utilise `Func<TSource, TResult>`.

**Exemple** : [Enumerable.Where](https://docs.microsoft.com/en-us/dotnet/api/system.linq.enumerable.where) attend un délégué `Func<TSource, bool>`.

## Sections connexes

- [7.1 Délégués](/fr/chapter-7-delegates-events-and-lambdas/7-1-delegates)
- [7.3 Expressions lambda](/fr/chapter-7-delegates-events-and-lambdas/7-3-lambda-expressions)
