---
title: Query syntax
sidebar:
  order: 183
  label: 8.1.1 Query syntax
---

**Context**: Query syntax resembles SQL and is often more readable for complex queries involving joins, grouping, and `let` clauses.

## Basic structure

```csharp
var result = from item in source
             where condition
             select item;
```

## Example

```csharp
var fruits = new[] { "apple", "banana", "cherry", "date" };
var longNames = from f in fruits
                where f.Length > 5
                select f.ToUpper();
```

## `let` clause

```csharp
var query = from n in numbers
            let square = n * n
            where square > 10
            select new { n, square };
```

## Real-world usage example

**Reporting queries**: When generating reports from multiple data sources, query syntax with joins and grouping is more intuitive.

**Example**: In [LINQ to XML](https://docs.microsoft.com/en-us/dotnet/standard/linq/linq-xml-overview), query syntax is common for extracting elements.

## Related sections

- [8.1 Query syntax vs method syntax](/en/chapter-8-linq-language-integrated-query/8-1-query-syntax-vs-method-syntax)
- [8.1.2 Method syntax](/en/chapter-8-linq-language-integrated-query/8-1-2-method-syntax)
