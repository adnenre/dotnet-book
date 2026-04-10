---
title: Ordering
sidebar:
  order: 197
  label: 8.4.3 Ordering
---

**Context**: Ordering operators (`OrderBy`, `OrderByDescending`, `ThenBy`, `ThenByDescending`, `Reverse`) sort elements.

```csharp
var fruits = new[] { "banana", "apple", "cherry" };
var ascending = fruits.OrderBy(f => f); // apple, banana, cherry
var descending = fruits.OrderByDescending(f => f.Length); // banana, cherry, apple
var thenBy = fruits.OrderBy(f => f.Length).ThenBy(f => f);
var reversed = fruits.Reverse(); // cherry, apple, banana
```

## Real-world usage example

**Sorting user lists**: Use `OrderBy` for paginated, sorted data in web applications.

**Example**: In [ASP.NET Core](https://docs.microsoft.com/en-us/aspnet/core/data/ef-mvc/sort-filter-page), sorting is often implemented with `OrderBy`.

## Related sections

- [8.4 Common operators](/en/chapter-8-linq-language-integrated-query/8-4-common-operators)
- [8.4.2 Projection](/en/chapter-8-linq-language-integrated-query/8-4-2-projection)
