---
title: struct
sidebar:
  order: 141
  label: 6.2.1 struct
---

**Context**: A `struct` is a value type that can encapsulate data and behavior. Unlike classes, structs do not support inheritance.

## Basic struct

```csharp
public struct Rectangle
{
    public double Width;
    public double Height;

    public double Area() => Width * Height;
}
```

## Constructors

A struct can have parameterized constructors. The parameterless constructor is not allowed (C# 10+ allows it under certain conditions).

```csharp
public struct Color
{
    public byte R, G, B;
    public Color(byte r, byte g, byte b) => (R, G, B) = (r, g, b);
}
```

## Real-world usage example

**High‑performance numeric types**: Use structs for complex numbers, fractions, or money amounts to reduce heap allocations in tight loops.

**Example**: In .NET, [`System.Decimal`](https://docs.microsoft.com/en-us/dotnet/api/system.decimal) is a struct. It provides arithmetic operations with value semantics.

## Related sections

- [6.2 Structs](/en/chapter-6-advanced-type-system/6-2-structs)
- [6.2.2 readonly struct](/en/chapter-6-advanced-type-system/6-2-2-readonly-struct)
