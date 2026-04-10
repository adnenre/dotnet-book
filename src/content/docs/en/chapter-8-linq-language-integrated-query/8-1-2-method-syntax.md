---
title: Method syntax
sidebar:
  order: 184
  label: 8.1.2 Method syntax
---

**Context**: Method syntax uses extension methods like `Where`, `Select`, `OrderBy` with lambda expressions. It is more flexible and works with all operators.

## Basic structure

```csharp
var result = source.Where(item => condition).Select(item => expression);
```

## Example

```csharp
var fruits = new[] { "apple", "banana", "cherry", "date" };
var longNames = fruits.Where(f => f.Length > 5)
                      .Select(f => f.ToUpper());
```

## Chaining multiple operators

```csharp
var result = numbers.Where(n => n > 2)
                    .OrderBy(n => n)
                    .Select(n => n * 2);
```

## Real-world usage example

**Data transformation pipelines**: Method syntax is preferred in functional programming pipelines (e.g., ETL processes).

**Example**: In [ASP.NET Core](https://docs.microsoft.com/en-us/aspnet/core/), method syntax is used extensively with `IQueryable` for database queries.

## Related sections

- [8.1 Query syntax vs method syntax](/en/chapter-8-linq-language-integrated-query/8-1-query-syntax-vs-method-syntax)
- [8.1.1 Query syntax](/en/chapter-8-linq-language-integrated-query/8-1-1-query-syntax)
