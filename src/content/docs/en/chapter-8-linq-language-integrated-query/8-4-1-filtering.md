---
title: Filtering
sidebar:
  order: 195
  label: 8.4.1 Filtering
---

**Context**: Filtering operators (`Where`, `OfType`) select elements that satisfy a condition.

```csharp
int[] numbers = { 1, 2, 3, 4, 5 };
var even = numbers.Where(n => n % 2 == 0); // 2,4

object[] mixed = { 1, "two", 3, "four" };
var strings = mixed.OfType<string>(); // "two", "four"
```

## Real-world usage example

**Filtering invalid data**: Use `Where` to exclude nulls, empty strings, or out‑of‑range values.

**Example**: In [ASP.NET Core](https://docs.microsoft.com/en-us/aspnet/core/), you filter collections before sending to the view.

## Related sections

- [8.4 Common operators](/en/chapter-8-linq-language-integrated-query/8-4-common-operators)
- [8.4.2 Projection](/en/chapter-8-linq-language-integrated-query/8-4-2-projection)
