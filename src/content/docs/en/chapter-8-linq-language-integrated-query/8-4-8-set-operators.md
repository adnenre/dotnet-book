---
title: Set operators
sidebar:
  order: 202
  label: 8.4.8 Set operators
---

**Context**: Set operators (`Distinct`, `Union`, `Intersect`, `Except`, `Concat`) perform set operations on sequences.

```csharp
int[] a = { 1, 2, 3 };
int[] b = { 3, 4, 5 };

var distinct = a.Distinct(); // 1,2,3
var union = a.Union(b); // 1,2,3,4,5
var intersect = a.Intersect(b); // 3
var except = a.Except(b); // 1,2
var concat = a.Concat(b); // 1,2,3,3,4,5
```

## Real-world usage example

**Merging user permissions**: Use `Union` to combine permission sets from different roles.

**Example**: In [Entity Framework Core](https://docs.microsoft.com/en-us/ef/core/), `Union` translates to SQL `UNION`.

## Related sections

- [8.4 Common operators](/en/chapter-8-linq-language-integrated-query/8-4-common-operators)
- [8.4.5 Joining](/en/chapter-8-linq-language-integrated-query/8-4-5-joining)
