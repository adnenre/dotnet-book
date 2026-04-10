---
title: Joining
sidebar:
  order: 199
  label: 8.4.5 Joining
---

**Context**: Join operators (`Join`, `GroupJoin`) combine sequences based on matching keys.

```csharp
var customers = new[] { new { Id = 1, Name = "Alice" }, new { Id = 2, Name = "Bob" } };
var orders = new[] { new { CustomerId = 1, Amount = 100 }, new { CustomerId = 1, Amount = 50 } };

var join = customers.Join(orders,
                          c => c.Id,
                          o => o.CustomerId,
                          (c, o) => new { c.Name, o.Amount });
// Name=Alice, Amount=100
// Name=Alice, Amount=50
```

## Real-world usage example

**Relational data**: In EF Core, joins are automatic for navigation properties, but you can use explicit joins.

**Example**: [LINQ Join documentation](https://docs.microsoft.com/en-us/dotnet/csharp/linq/perform-inner-joins) shows inner and left outer joins.

## Related sections

- [8.4 Common operators](/en/chapter-8-linq-language-integrated-query/8-4-common-operators)
- [8.4.4 Grouping](/en/chapter-8-linq-language-integrated-query/8-4-4-grouping)
