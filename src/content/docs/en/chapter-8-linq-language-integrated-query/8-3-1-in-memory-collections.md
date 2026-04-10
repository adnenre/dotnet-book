---
title: In memory collections
sidebar:
  order: 191
  label: 8.3.1 In memory collections
---

**Context**: LINQ to Objects works on any `IEnumerable<T>` (arrays, lists, dictionaries, custom collections). All operations are performed in memory.

```csharp
List<string> fruits = new() { "apple", "banana", "cherry" };
var longFruits = fruits.Where(f => f.Length > 5);
```

## Performance considerations

- Use streaming operators for large collections
- Materialize with `ToList()` when query is reused multiple times

## Real-world usage example

**Data processing in console apps**: Read a CSV file into a list of objects, then use LINQ to filter, group, and aggregate.

**Example**: In [System.IO](https://docs.microsoft.com/en-us/dotnet/api/system.io) you can read lines with `File.ReadLines` and use LINQ directly.

## Related sections

- [8.3 LINQ to Objects LINQ to XML LINQ to Entities](/en/chapter-8-linq-language-integrated-query/8-3-linq-to-objects-linq-to-xml-linq-to-entities)
- [8.4 Common operators](/en/chapter-8-linq-language-integrated-query/8-4-common-operators)
