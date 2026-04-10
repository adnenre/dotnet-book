---
title: Partitioning
sidebar:
  order: 204
  label: 8.4.10 Partitioning
---

**Context**: Partitioning operators (`Take`, `Skip`, `TakeWhile`, `SkipWhile`) return a subset of elements based on position or condition.

```csharp
int[] numbers = { 1, 2, 3, 4, 5 };
var firstThree = numbers.Take(3); // 1,2,3
var afterTwo = numbers.Skip(2); // 3,4,5
var takeWhile = numbers.TakeWhile(n => n < 4); // 1,2,3
var skipWhile = numbers.SkipWhile(n => n < 3); // 3,4,5
```

## Real-world usage example

**Pagination**: Use `Skip` and `Take` to implement page navigation in web applications.

**Example**: In [ASP.NET Core](https://docs.microsoft.com/en-us/aspnet/core/data/ef-mvc/sort-filter-page), pagination is done with `.Skip(page * size).Take(size)`.

## Related sections

- [8.4 Common operators](/en/chapter-8-linq-language-integrated-query/8-4-common-operators)
- [8.2.3 Streaming vs buffering operators](/en/chapter-8-linq-language-integrated-query/8-2-3-streaming-vs-buffering-operators)
