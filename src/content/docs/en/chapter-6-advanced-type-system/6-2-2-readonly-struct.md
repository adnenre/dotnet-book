---
title: readonly struct
sidebar:
  order: 142
  label: 6.2.2 readonly struct
---

**Context**: `readonly struct` indicates that the struct is immutable. All instance fields must be readonly, and the compiler enforces immutability.

```csharp
public readonly struct Vector
{
    public double X { get; }
    public double Y { get; }
    public Vector(double x, double y) => (X, Y) = (x, y);
    public double Length => Math.Sqrt(X * X + Y * Y);
}
```

## Benefits

- Clear intent: this struct cannot be modified after creation
- Performance: compiler can avoid defensive copies
- Thread‑safe by design

## `readonly` members

Even if the struct is not readonly, you can mark individual methods as `readonly` to prevent modification.

```csharp
public struct Point
{
    public int X, Y;
    public readonly double DistanceFromOrigin() => Math.Sqrt(X * X + Y * Y);
}
```

## Real-world usage example

**Immutable settings**: Use `readonly struct` for configuration values that never change (e.g., `AppConstants` with `double Pi`, `int MaxRetries`).

**Example**: In [System.Text.Json](https://docs.microsoft.com/en-us/dotnet/standard/serialization/system-text-json-overview), serialization options can be readonly structs for performance.

## Related sections

- [6.2 Structs](/en/chapter-6-advanced-type-system/6-2-structs)
- [6.2.1 struct](/en/chapter-6-advanced-type-system/6-2-1-struct)
