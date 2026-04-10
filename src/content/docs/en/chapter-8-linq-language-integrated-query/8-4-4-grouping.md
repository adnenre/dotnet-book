---
title: Grouping
sidebar:
  order: 198
  label: 8.4.4 Grouping
---

**Context**: `GroupBy` groups elements by a key. It returns a sequence of `IGrouping<TKey, TElement>`.

```csharp
var people = new[]
{
    new { Name = "Alice", City = "Paris" },
    new { Name = "Bob", City = "London" },
    new { Name = "Charlie", City = "Paris" }
};

var grouped = people.GroupBy(p => p.City);
foreach (var group in grouped)
{
    Console.WriteLine(group.Key);
    foreach (var person in group)
        Console.WriteLine($"  {person.Name}");
}
```

## Real-world usage example

**Dashboard analytics**: Group sales data by month, product category, or region.

**Example**: In [EF Core](https://docs.microsoft.com/en-us/ef/core/querying/), `GroupBy` translates to SQL `GROUP BY`.

## Related sections

- [8.4 Common operators](/en/chapter-8-linq-language-integrated-query/8-4-common-operators)
- [8.4.5 Joining](/en/chapter-8-linq-language-integrated-query/8-4-5-joining)
