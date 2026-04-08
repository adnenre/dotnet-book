---
title: Generic delegates Action Func Predicate
sidebar:
  order: 167
  label: 7.1.4 Generic delegates Action Func Predicate
---

**Context**: The .NET framework provides generic delegates for common signatures, eliminating the need to declare custom delegates.

## `Action` delegates

For methods that return `void`. Up to 16 parameters.

```csharp
Action print = () => Console.WriteLine("Hello");
Action<string> log = (msg) => Console.WriteLine(msg);
Action<int, int> addAndPrint = (a, b) => Console.WriteLine(a + b);
```

## `Func` delegates

For methods that return a value. Last type parameter is the return type.

```csharp
Func<int> getNumber = () => 42;
Func<string, int> getLength = (s) => s.Length;
Func<int, int, int> add = (a, b) => a + b;
```

## `Predicate<T>` delegate

Returns `bool`. Equivalent to `Func<T, bool>`.

```csharp
Predicate<int> isEven = (x) => x % 2 == 0;
bool result = isEven(4); // true
```

## Real-world usage example

**LINQ queries**: `Where` uses `Func<TSource, bool>` (a predicate). `ForEach` uses `Action<T>`. `Select` uses `Func<TSource, TResult>`.

**Example**: [Enumerable.Where](https://docs.microsoft.com/en-us/dotnet/api/system.linq.enumerable.where) expects a `Func<TSource, bool>` delegate.

## Related sections

- [7.1 Delegates](/en/chapter-7-delegates-events-and-lambdas/7-1-delegates)
- [7.3 Lambda expressions](/en/chapter-7-delegates-events-and-lambdas/7-3-lambda-expressions)
