---
title: Value based equality
sidebar:
  order: 139
  label: 6.1.5 Value based equality
---

**Context**: Records compare all members for equality, not reference equality. Two record instances are equal if all their properties match.

```csharp
public record Point(int X, int Y);

var p1 = new Point(1, 2);
var p2 = new Point(1, 2);
Console.WriteLine(p1 == p2); // True
Console.WriteLine(ReferenceEquals(p1, p2)); // False
```

## How it works

Records override `Equals(object)` and `GetHashCode()` to consider all fields/properties. They also implement `IEquatable<T>`.

## Equality for record struct

Same value semantics, but `record struct` uses structural equality similar to `record class`.

## Real-world usage example

**Unit testing**: Value equality makes assertions simpler because you can compare expected and actual record instances directly without comparing each property.

**Example**: In [xUnit](https://xunit.net/), `Assert.Equal(expected, actual)` works out of the box for records. No need to write custom equality comparers.

## Related sections

- [6.1 Records](/en/chapter-6-advanced-type-system/6-1-records)
- [6.1.2 record struct](/en/chapter-6-advanced-type-system/6-1-2-record-struct)
