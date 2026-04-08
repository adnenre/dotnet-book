---
title: Comparison with lambdas
sidebar:
  order: 180
  label: 7.4.2 Comparison with lambdas
---

**Context**: Lambdas are more concise and expressive than anonymous methods. They are the preferred way to write inline functions in modern C#.

## Syntax comparison

```csharp
// Anonymous method
Func<int, int> anon = delegate(int x) { return x * x; };

// Lambda expression
Func<int, int> lambda = x => x * x;
```

## Features exclusive to lambdas

- Expression tree conversion (`Expression<Func<T>>`)
- Natural type inference
- Shorter syntax for single‑expression bodies

```csharp
Expression<Func<int, int>> expr = x => x * x; // works with lambda only
```

## When to use anonymous methods

- You need to omit parameters (delegate with no parameters but still accept any)
- You are targeting C# 2.0

```csharp
Action act = delegate { Console.WriteLine("No params"); };
// Lambda would require () => ...
```

## Real-world usage example

**Modern .NET code**: Always prefer lambdas. Anonymous methods are only used for backward compatibility.

**Example**: [Microsoft documentation](https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/statements-expressions-operators/anonymous-functions) recommends lambdas for new development.

## Related sections

- [7.4 Anonymous functions](/en/chapter-7-delegates-events-and-lambdas/7-4-anonymous-functions)
- [7.3 Lambda expressions](/en/chapter-7-delegates-events-and-lambdas/7-3-lambda-expressions)
