---
title: Mixing both
sidebar:
  order: 185
  label: 8.1.3 Mixing both
---

**Context**: You can start with query syntax and then switch to method syntax by wrapping the query in parentheses and calling extension methods.

```csharp
var numbers = new[] { 1, 2, 3, 4, 5, 6 };

var result = (from n in numbers
              where n % 2 == 0
              select n)
              .OrderByDescending(n => n)
              .Take(2);
```

## When to mix

- Use query syntax for the main filtering/joining
- Use method syntax for operations not available in query syntax (e.g., `Take`, `Skip`, `ToDictionary`)

## Real-world usage example

**Paging with query syntax**: Write the base query in query syntax, then add `.Skip(page * size).Take(size)` using method syntax.

**Example**: In [EF Core](https://docs.microsoft.com/en-us/ef/core/querying/), you often write `from c in context.Customers where c.Active select c` then chain `.Skip(10).Take(10)`.

## Related sections

- [8.1 Query syntax vs method syntax](/en/chapter-8-linq-language-integrated-query/8-1-query-syntax-vs-method-syntax)
- [8.4 Common operators](/en/chapter-8-linq-language-integrated-query/8-4-common-operators)
