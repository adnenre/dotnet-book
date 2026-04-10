---
title: LINQ to Objects LINQ to XML LINQ to Entities
sidebar:
  order: 190
  label: 8.3 LINQ to Objects LINQ to XML LINQ to Entities
---

**Context**: LINQ works on different data sources: in‑memory collections (LINQ to Objects), XML documents (LINQ to XML), and databases via Entity Framework (LINQ to Entities).

```csharp
// LINQ to Objects
var numbers = new[] { 1, 2, 3 };
var even = numbers.Where(n => n % 2 == 0);

// LINQ to XML
XDocument doc = XDocument.Load("data.xml");
var names = from e in doc.Descendants("Person") select (string)e.Element("Name");

// LINQ to Entities (EF Core)
var active = dbContext.Customers.Where(c => c.IsActive);
```

## Real-world usage example

**Unified query experience**: The same query patterns work across all sources, reducing learning curve.

**Example**: [Microsoft documentation](https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/concepts/linq/) shows examples for each provider.

## Related sections

- [8.3.1 In memory collections](/en/chapter-8-linq-language-integrated-query/8-3-1-in-memory-collections)
- [8.3.2 XML](/en/chapter-8-linq-language-integrated-query/8-3-2-xml)
- [8.3.3 EF Core SQL translation](/en/chapter-8-linq-language-integrated-query/8-3-3-ef-core-sql-translation)
