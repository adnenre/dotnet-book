---
title: string question mark nullable reference
sidebar:
  order: 151
  label: 6.4.1 string question mark nullable reference
---

**Context**: Append `?` to a reference type to indicate that it may be `null`. Without `?`, the type is considered non‑nullable.

```csharp
#nullable enable
string? maybeNull = null;   // allowed
string notNull = "text";
notNull = maybeNull;        // warning
```

## Method parameters and return types

```csharp
public string? FindName(int id) => id == 0 ? null : "John";
public void Process(string name) { }
// Calling Process(FindName(0)) -> warning: possible null argument
```

## Real-world usage example

**Database query results**: A method that finds a user by ID returns `User?` (nullable) because the user might not exist. This forces the caller to handle the null case.

**Example**: In [Entity Framework Core](https://docs.microsoft.com/en-us/ef/core/), `FirstOrDefault()` returns `T?` (nullable) for reference types.

## Related sections

- [6.4 Nullable reference types](/en/chapter-6-advanced-type-system/6-4-nullable-reference-types-c-8-and-later)
- [6.4.3 Null forgiving operator](/en/chapter-6-advanced-type-system/6-4-3-null-forgiving-operator)
