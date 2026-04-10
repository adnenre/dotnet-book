---
title: Projection
sidebar:
  order: 196
  label: 8.4.2 Projection
---

**Context**: Projection operators (`Select`, `SelectMany`) transform each element into a new form.

```csharp
var numbers = new[] { 1, 2, 3 };
var squares = numbers.Select(n => n * n); // 1,4,9

// SelectMany flattens collections
var lists = new[] { new[] { 1, 2 }, new[] { 3, 4 } };
var flat = lists.SelectMany(l => l); // 1,2,3,4
```

## Real-world usage example

**DTO projection**: Use `Select` to map domain entities to view models or DTOs.

**Example**: In [EF Core](https://docs.microsoft.com/en-us/ef/core/querying/), `Select` is used to load only needed columns.

## Related sections

- [8.4 Common operators](/en/chapter-8-linq-language-integrated-query/8-4-common-operators)
- [8.4.1 Filtering](/en/chapter-8-linq-language-integrated-query/8-4-1-filtering)
