---
title: Element operators
sidebar:
  order: 201
  label: 8.4.7 Element operators
---

**Context**: Element operators return a single element (`First`, `Last`, `Single`, `ElementAt`) or a default value if not found.

```csharp
int[] numbers = { 10, 20, 30 };
int first = numbers.First(); // 10
int last = numbers.Last(); // 30
int second = numbers.ElementAt(1); // 20
int firstEven = numbers.FirstOrDefault(n => n % 2 == 0); // 10
int missing = numbers.SingleOrDefault(n => n > 100); // 0 (default)
```

## Real-world usage example

**Getting a specific record**: Use `FirstOrDefault` when retrieving a user by ID (handle not found case).

**Example**: In [EF Core](https://docs.microsoft.com/en-us/ef/core/querying/), `FirstOrDefault` translates to `SELECT TOP 1`.

## Related sections

- [8.4 Common operators](/en/chapter-8-linq-language-integrated-query/8-4-common-operators)
- [8.4.6 Aggregation](/en/chapter-8-linq-language-integrated-query/8-4-6-aggregation)
