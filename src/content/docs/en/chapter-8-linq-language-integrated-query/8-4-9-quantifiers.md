---
title: Quantifiers
sidebar:
  order: 203
  label: 8.4.9 Quantifiers
---

**Context**: Quantifiers (`Any`, `All`, `Contains`) check conditions on a sequence and return a `bool`.

```csharp
int[] numbers = { 1, 2, 3 };
bool anyEven = numbers.Any(n => n % 2 == 0); // true
bool allPositive = numbers.All(n => n > 0); // true
bool containsTwo = numbers.Contains(2); // true
```

## Real-world usage example

**Validation**: Use `Any` to check if a collection has items before processing.

**Example**: In [EF Core](https://docs.microsoft.com/en-us/ef/core/querying/), `Any` translates to `EXISTS` in SQL, which is efficient.

## Related sections

- [8.4 Common operators](/en/chapter-8-linq-language-integrated-query/8-4-common-operators)
- [8.4.7 Element operators](/en/chapter-8-linq-language-integrated-query/8-4-7-element-operators)
