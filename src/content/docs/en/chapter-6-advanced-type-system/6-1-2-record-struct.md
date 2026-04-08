---
title: record struct
sidebar:
  order: 136
  label: 6.1.2 record struct
---

**Context**: `record struct` (C# 10+) is a value type record that provides value semantics for structs.

```csharp
public record struct Point(int X, int Y);
```

## Characteristics

- Value type (allocated on stack)
- Mutable by default (can add `readonly` modifier)
- Provides same equality and `ToString` benefits as `record class`

```csharp
public readonly record struct ImmutablePoint(int X, int Y);
var p = new ImmutablePoint(3, 4);
// p.X = 5; // error: readonly
```

## Real-world usage example

**Geometric calculations**: Use `record struct` for small, immutable structures like `Point`, `Size`, `Rectangle` to avoid heap allocations and get value equality for free.

**Example**: In .NET, [`System.Drawing.Point`](https://docs.microsoft.com/en-us/dotnet/api/system.drawing.point) is a struct but not a record. Upgrading to `record struct` would add deconstruction and equality.

## Related sections

- [6.1 Records](/en/chapter-6-advanced-type-system/6-1-records)
- [6.1.1 record class](/en/chapter-6-advanced-type-system/6-1-1-record-class)
- [6.2 Structs](/en/chapter-6-advanced-type-system/6-2-structs)
