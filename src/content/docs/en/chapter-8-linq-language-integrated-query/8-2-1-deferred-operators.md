---
title: Deferred operators
sidebar:
  order: 187
  label: 8.2.1 Deferred operators
---

**Context**: Deferred operators (e.g., `Where`, `Select`, `OrderBy`) do not execute until the query is enumerated. They return an `IEnumerable<T>`.

```csharp
var deferred = numbers.Where(n => n > 2); // no execution
// Execution happens here
foreach (var item in deferred) { }
```

## List of common deferred operators

- `Where`, `Select`, `SelectMany`
- `Take`, `Skip`
- `OrderBy`, `OrderByDescending`, `ThenBy`
- `GroupBy`, `Join`, `GroupJoin`
- `Concat`, `Distinct`, `Union`, `Intersect`, `Except`

## Real-world usage example

**Complex query composition**: Deferred execution allows you to build queries conditionally without performance penalty until the final enumeration.

**Example**: In [EF Core](https://docs.microsoft.com/en-us/ef/core/querying/), all `IQueryable` operators are deferred until `ToList()` or `foreach`.

## Related sections

- [8.2 Deferred vs immediate execution](/en/chapter-8-linq-language-integrated-query/8-2-deferred-vs-immediate-execution)
- [8.2.2 Immediate operators](/en/chapter-8-linq-language-integrated-query/8-2-2-immediate-operators)
