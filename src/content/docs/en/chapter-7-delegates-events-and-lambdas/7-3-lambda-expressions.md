---
title: Lambda expressions
sidebar:
  order: 173
  label: 7.3 Lambda expressions
---

**Context**: Lambda expressions are anonymous functions written inline. They are concise and widely used in LINQ, events, and functional programming.

```csharp
Func<int, int> square = x => x * x;
Console.WriteLine(square(5)); // 25
```

## Real-world usage example

**LINQ queries**: Lambdas are the core of LINQ: `Where(x => x > 5)`, `Select(x => x.Name)`, `OrderBy(x => x.Date)`.

**Example**: [Enumerable.Where](https://docs.microsoft.com/en-us/dotnet/api/system.linq.enumerable.where) expects a `Func<TSource, bool>` lambda.

## Related sections

- [7.3.1 Syntax](/en/chapter-7-delegates-events-and-lambdas/7-3-1-syntax)
- [7.3.2 Statement lambdas](/en/chapter-7-delegates-events-and-lambdas/7-3-2-statement-lambdas)
- [7.3.3 Capturing outer variables closures](/en/chapter-7-delegates-events-and-lambdas/7-3-3-capturing-outer-variables-closures)
- [7.3.4 Expression trees](/en/chapter-7-delegates-events-and-lambdas/7-3-4-expression-trees)
