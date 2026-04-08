---
title: Enums
sidebar:
  order: 145
  label: 6.3 Enums
---

**Context**: An enum defines a set of named constants. Enums make code more readable and type‑safe.

```csharp
public enum Color
{
    Red,
    Green,
    Blue
}
```

## Real-world usage example

**HTTP status codes**: Define an enum for HTTP status codes (`200 OK`, `404 NotFound`) to avoid magic numbers.

**Example**: In ASP.NET Core, [`HttpStatusCode`](https://docs.microsoft.com/en-us/dotnet/api/system.net.httpstatuscode) is an enum. Also [`DayOfWeek`](https://docs.microsoft.com/en-us/dotnet/api/system.dayofweek) is a built‑in enum.

## Related sections

- [6.3.1 enum definition](/en/chapter-6-advanced-type-system/6-3-1-enum-definition)
- [6.3.2 Underlying type](/en/chapter-6-advanced-type-system/6-3-2-underlying-type)
- [6.3.3 Flags enum](/en/chapter-6-advanced-type-system/6-3-3-flags-enum)
