---
title: Underlying type
sidebar:
  order: 147
  label: 6.3.2 Underlying type
---

**Context**: Enums have an underlying integral type (default is `int`). You can change it to `byte`, `sbyte`, `short`, `ushort`, `int`, `uint`, `long`, or `ulong`.

```csharp
public enum SmallEnum : byte
{
    Zero = 0,
    One = 1,
    Max = 255
}
```

## Specifying underlying type

```csharp
public enum FileMode : uint
{
    Read = 1,
    Write = 2,
    ReadWrite = 3
}
```

## Real-world usage example

**Memory‑sensitive applications**: Use `byte` as underlying type for enums with less than 256 values to save memory when stored in large arrays.

**Example**: In game development, a `WeaponType : byte` enum reduces memory footprint for thousands of enemies. [`Enum.GetUnderlyingType`](https://docs.microsoft.com/en-us/dotnet/api/system.enum.getunderlyingtype) can be used to inspect.

## Related sections

- [6.3 Enums](/en/chapter-6-advanced-type-system/6-3-enums)
- [6.3.1 enum definition](/en/chapter-6-advanced-type-system/6-3-1-enum-definition)
