---
title: Structs
sidebar:
  order: 140
  label: 6.2 Structs
---

**Context**: Structs are value types that can contain data and methods. They are suitable for small, lightweight objects.

Structs are allocated on the stack (or inline in heap objects) and are copied on assignment.

```csharp
public struct Point
{
    public int X;
    public int Y;
    public Point(int x, int y) { X = x; Y = y; }
}
```

## Real-world usage example

**Vector math in game development**: Use structs for `Vector2`, `Vector3`, `Matrix4x4` to avoid garbage collection overhead and improve performance.

**Example**: In [Unity](https://docs.unity3d.com/ScriptReference/Vector3.html), `Vector3` is a struct. In .NET, [`System.Numerics.Vector3`](https://docs.microsoft.com/en-us/dotnet/api/system.numerics.vector3) is also a struct.

## Related sections

- [6.2.1 struct](/en/chapter-6-advanced-type-system/6-2-1-struct)
- [6.2.2 readonly struct](/en/chapter-6-advanced-type-system/6-2-2-readonly-struct)
- [6.2.3 ref struct](/en/chapter-6-advanced-type-system/6-2-3-ref-struct)
