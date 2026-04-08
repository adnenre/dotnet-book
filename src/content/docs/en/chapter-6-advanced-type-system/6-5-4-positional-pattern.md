---
title: Positional pattern
sidebar:
  order: 159
  label: 6.5.4 Positional pattern
---

**Context**: The positional pattern uses deconstruction to match an object's members positionally.

```csharp
public record Point(int X, int Y);

Point p = new Point(3, 4);
if (p is (3, 4))
{
    Console.WriteLine("Point (3,4)");
}
```

## With deconstruction

```csharp
if (p is (var x, var y))
{
    Console.WriteLine($"X={x}, Y={y}");
}
```

## Real-world usage example

**Matching coordinate systems**: Use positional pattern to match points in a 2D grid or to extract coordinates in a game.

**Example**: In [ray tracing](<https://en.wikipedia.org/wiki/Ray_tracing_(graphics)>), you can match a ray's origin and direction using positional patterns.

## Related sections

- [6.5 Pattern matching](/en/chapter-6-advanced-type-system/6-5-pattern-matching)
- [6.5.3 Property pattern](/en/chapter-6-advanced-type-system/6-5-3-property-pattern)
