---
title: where T  unmanaged (no references)
sidebar:
  order: 415
  label: 11.4.6 where T  unmanaged
---

**Context**: The `unmanaged` constraint (available since C# 7.3) requires the type parameter to be an unmanaged type: a value type that contains no references to managed objects (no reference-type fields). This includes primitive types, enums, and structs composed only of unmanaged fields. This constraint is useful for interop with unmanaged code (P/Invoke, stack allocations, etc.).

## Usage Example

```csharp
using System;
using System.Runtime.InteropServices;

public struct UnmanagedPoint
{
    public int X;
    public int Y;
    // No reference fields
}

public struct PointWithReference
{
    public int X;
    public string Description; // reference -> not allowed
}

public class UnmanagedBuffer<T> where T : unmanaged
{
    public unsafe T* Allocate(int count)
    {
        return (T*)Marshal.AllocHGlobal(count * sizeof(T));
    }
}

class Program
{
    static void Main()
    {
        var buffer = new UnmanagedBuffer<UnmanagedPoint>();
        Console.WriteLine("Unmanaged buffer created (simulated)");

        // This does not compile: PointWithReference contains a reference
        // var errorBuffer = new UnmanagedBuffer<PointWithReference>();
    }
}
```

## Output console

```shell
dotnet run
Unmanaged buffer created (simulated)
```

## Important notes

- `unmanaged` types are a subset of `struct`.
- Allows using `sizeof(T)` and `stackalloc T[]`.
- Ideal for high-performance APIs or interop.

## Real-world usage example

**`System.Span<T>`** – Uses `unmanaged` constraints internally for some optimizations.  
See [.NET docs on unmanaged constraint](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/unmanaged-types).

## Related sections

- [11.4.1 where T : struct](/en/chapter-11-generics-and-constraints/11-4-1-where-t-struct-value-type)
- [11.4.7 Multiple constraints](/en/chapter-11-generics-and-constraints/11-4-7-multiple-constraints)
