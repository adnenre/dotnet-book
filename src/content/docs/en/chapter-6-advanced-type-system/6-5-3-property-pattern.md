---
title: Property pattern
sidebar:
  order: 158
  label: 6.5.3 Property pattern
---

**Context**: The property pattern matches an object's properties against nested patterns.

```csharp
public class Point
{
    public int X { get; set; }
    public int Y { get; set; }
}

Point p = new Point { X = 10, Y = 20 };
if (p is { X: 10, Y: 20 })
{
    Console.WriteLine("Point (10,20)");
}
```

## In switch expression

```csharp
string quadrant = p switch
{
    { X: > 0, Y: > 0 } => "Q1",
    { X: < 0, Y: > 0 } => "Q2",
    { X: < 0, Y: < 0 } => "Q3",
    { X: > 0, Y: < 0 } => "Q4",
    _ => "On axis"
};
```

## Real-world usage example

**Validation rules**: Use property pattern in a `switch` expression to validate complex objects without multiple `if` statements.

**Example**: In [FluentValidation](https://docs.fluentvalidation.net/), you could implement custom rules using property pattern.

## Related sections

- [6.5 Pattern matching](/en/chapter-6-advanced-type-system/6-5-pattern-matching)
- [6.5.4 Positional pattern](/en/chapter-6-advanced-type-system/6-5-4-positional-pattern)
