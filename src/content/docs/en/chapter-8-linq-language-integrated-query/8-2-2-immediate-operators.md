---
title: Immediate operators
sidebar:
  order: 188
  label: 8.2.2 Immediate operators
---

**Context**: Immediate operators execute the query immediately and return a concrete result (e.g., list, single value, dictionary).

```csharp
var numbers = new[] { 1, 2, 3 };
var list = numbers.Where(n => n > 1).ToList(); // executes now
var first = numbers.First(); // executes now
```

## Common immediate operators

- `ToList()`, `ToArray()`, `ToDictionary()`, `ToHashSet()`
- `First()`, `FirstOrDefault()`, `Last()`, `Single()`
- `Count()`, `Sum()`, `Average()`, `Min()`, `Max()`
- `Any()`, `All()`, `Contains()`

## Real-world usage example

**Materializing results for caching**: Use `ToList()` to execute a query once and store the result, avoiding repeated database calls.

**Example**: In [ASP.NET Core](https://docs.microsoft.com/en-us/aspnet/core/performance/caching/), you might materialize a query to cache the data.

## Related sections

- [8.2 Deferred vs immediate execution](/en/chapter-8-linq-language-integrated-query/8-2-deferred-vs-immediate-execution)
- [8.2.1 Deferred operators](/en/chapter-8-linq-language-integrated-query/8-2-1-deferred-operators)
