---
title: EF Core SQL translation
sidebar:
  order: 193
  label: 8.3.3 EF Core SQL translation
---

**Context**: LINQ to Entities (Entity Framework Core) translates LINQ queries to SQL, executing them on the database server.

```csharp
using (var context = new AppDbContext())
{
    var activeCustomers = context.Customers
                                 .Where(c => c.IsActive && c.Orders.Any())
                                 .OrderBy(c => c.Name)
                                 .Take(10)
                                 .ToList(); // SQL generated and executed
}
```

## Important notes

- Only a subset of C# methods can be translated to SQL
- Use `AsEnumerable()` or `ToList()` to switch to client evaluation
- Deferred execution works with `IQueryable<T>`

## Real-world usage example

**Database paging and filtering**: EF Core translates `Skip` and `Take` to `OFFSET` and `FETCH` in SQL.

**Example**: [EF Core querying documentation](https://docs.microsoft.com/en-us/ef/core/querying/) explains translation rules.

## Related sections

- [8.3 LINQ to Objects LINQ to XML LINQ to Entities](/en/chapter-8-linq-language-integrated-query/8-3-linq-to-objects-linq-to-xml-linq-to-entities)
- [8.4 Common operators](/en/chapter-8-linq-language-integrated-query/8-4-common-operators)
