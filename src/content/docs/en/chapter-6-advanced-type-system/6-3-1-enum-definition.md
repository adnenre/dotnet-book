---
title: enum definition
sidebar:
  order: 146
  label: 6.3.1 enum definition
---

**Context**: Define an enum using the `enum` keyword. By default, the first member has value 0, and each subsequent member increments by 1.

## Syntax

```csharp
[access modifier] enum EnumName
{
    Member1,
    Member2,
    Member3
}
```

## Example

```csharp
public enum DaysOfWeek
{
    Sunday,    // 0
    Monday,    // 1
    Tuesday,   // 2
    Wednesday, // 3
    Thursday,  // 4
    Friday,    // 5
    Saturday   // 6
}
```

## Real-world usage example

**Order status**: Define `OrderStatus` enum with `Pending`, `Processing`, `Shipped`, `Delivered`, `Cancelled` to make code self‑documenting.

**Example**: In e‑commerce applications, enums are often used for state machines. The [State pattern](https://en.wikipedia.org/wiki/State_pattern) can be combined with enums.

## Related sections

- [6.3 Enums](/en/chapter-6-advanced-type-system/6-3-enums)
- [6.3.2 Underlying type](/en/chapter-6-advanced-type-system/6-3-2-underlying-type)
