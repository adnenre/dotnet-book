---
title: Query syntax vs method syntax
sidebar:
  order: 182
  label: 8.1 Query syntax vs method syntax
---

**Context**: Language Integrated Query (LINQ) is a set of features in C# that allows you to write declarative queries against collections, databases, XML, and other data sources. LINQ makes code more readable, type‑safers, and expressive.

## What is LINQ and why use it?

LINQ (Language Integrated Query) was introduced in C# 3.0 (.NET Framework 3.5). It allows you to query data directly in C# using a syntax similar to SQL, but integrated into the language. Benefits include:

- **Compile‑time type checking** – avoid runtime errors.
- **IntelliSense support** – autocompletion for query expressions.
- **Unified syntax** – the same query patterns work on arrays, lists, XML, databases, etc.
- **Declarative style** – you say _what_ you want, not _how_ to get it.

Common use cases: filtering, sorting, grouping, joining, aggregating, and transforming data.

## How to start using LINQ

LINQ is built into .NET. To use LINQ to Objects (queries on in‑memory collections), you only need to add the `System.Linq` namespace. No extra NuGet packages are required for basic LINQ.

```csharp
// Add this at the top of your C# file
using System.Linq;
```

Once you have `using System.Linq;`, all types that implement `IEnumerable<T>` (arrays, `List<T>`, `Dictionary<TKey, TValue>`, etc.) gain extension methods like `Where`, `Select`, `OrderBy`, `GroupBy`, etc. You can also use query syntax without any additional imports (the compiler translates it to method calls).

**Project requirements**: Any .NET project (console, web, class library) targeting .NET Core 3.0+ or .NET Framework 3.5+ supports LINQ. For older frameworks, LINQ is available via `System.Core` assembly reference.

```csharp
// Example: full program using LINQ
using System;
using System.Linq;

class Program
{
    static void Main()
    {
        int[] numbers = { 1, 2, 3, 4, 5 };
        var even = numbers.Where(n => n % 2 == 0);
        Console.WriteLine(string.Join(", ", even)); // 2,4
    }
}
```

## Query syntax vs method syntax

LINQ provides two equivalent ways to write queries: **query syntax** (SQL‑like) and **method syntax** (fluent API with lambda expressions).

```csharp
int[] numbers = { 1, 2, 3, 4, 5 };

// Query syntax (declarative)
var evenQuery = from n in numbers
                where n % 2 == 0
                select n;

// Method syntax (fluent)
var evenMethod = numbers.Where(n => n % 2 == 0);
```

Both produce the same result. Query syntax is often more readable for complex queries involving joins, grouping, and `let` clauses. Method syntax is more flexible and supports all LINQ operators (some operators like `Take`, `Skip`, `ToDictionary` have no query syntax equivalent).

## Real-world usage example

**Mixed approaches in real projects**: Developers often use query syntax for complex queries with joins and grouping (more readable), and method syntax for simple filters, projections, and operations not available in query syntax (e.g., `Take`, `Skip`, `ToDictionary`).

**Official documentation**:

- [LINQ overview](https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/concepts/linq/)
- [Query syntax vs method syntax comparison](https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/concepts/linq/query-syntax-and-method-syntax-in-linq)
- [System.Linq namespace](https://docs.microsoft.com/en-us/dotnet/api/system.linq)
- [LINQ with Entity Framework Core](https://docs.microsoft.com/en-us/ef/core/querying/)

## Related sections

- [8.1.1 Query syntax](/en/chapter-8-linq-language-integrated-query/8-1-1-query-syntax)
- [8.1.2 Method syntax](/en/chapter-8-linq-language-integrated-query/8-1-2-method-syntax)
- [8.1.3 Mixing both](/en/chapter-8-linq-language-integrated-query/8-1-3-mixing-both)
