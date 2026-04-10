---
title: Aggregation
sidebar:
  order: 200
  label: 8.4.6 Aggregation
---

**Context**: Aggregation operators (`Count`, `Sum`, `Average`, `Min`, `Max`, `Aggregate`) compute a single value from a sequence.

```csharp
int[] numbers = { 1, 2, 3, 4 };
int count = numbers.Count(); // 4
int sum = numbers.Sum(); // 10
double avg = numbers.Average(); // 2.5
int min = numbers.Min(); // 1
int max = numbers.Max(); // 4
int product = numbers.Aggregate((a, b) => a * b); // 24
```

## Real-world usage example

**Dashboard KPIs**: Use `Sum` for total sales, `Average` for average order value.

**Example**: In [EF Core](https://docs.microsoft.com/en-us/ef/core/querying/), aggregation operators translate to SQL `COUNT`, `SUM`, etc.

## Related sections

- [8.4 Common operators](/en/chapter-8-linq-language-integrated-query/8-4-common-operators)
- [8.4.7 Element operators](/en/chapter-8-linq-language-integrated-query/8-4-7-element-operators)
