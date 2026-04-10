---
title: Large Object Heap LOH
sidebar:
  order: 304
  label: 10.1.4 Large Object Heap LOH
---

**Context**: In .NET, objects larger than 85,000 bytes (85 KB) are allocated on a special heap called the Large Object Heap (LOH). The LOH is not compacted by default because moving large objects would be expensive. Instead, the GC uses a free‑list algorithm to manage LOH memory. This can lead to fragmentation over time. Since .NET 5, you can manually compact the LOH, but it is still generally avoided for performance reasons.

## Usage Example

```csharp
using System;

public class LOHDemo
{
    public static void AllocateLargeObject()
    {
        // This array will go to LOH because it is > 85KB
        // 85,000 bytes / 8 bytes per double ≈ 10,625 doubles
        double[] largeArray = new double[11000];
        Console.WriteLine($"Is on LOH? {GC.GetGeneration(largeArray) == 2}"); // Usually true
    }
}
```

## Output console

```shell
dotnet run
Is on LOH? True
```

## Important notes

- LOH objects are always generation 2.
- Frequent LOH allocations can cause memory fragmentation.
- Use `ArrayPool<T>` or object pooling to reuse large buffers.

## Real‑world usage example

**Image processing** – Loading large bitmaps (e.g., 4K images) allocates large byte arrays on the LOH. Reusing buffers via `ArrayPool<byte>` prevents fragmentation and reduces GC pressure.  
See [.NET docs on LOH](https://docs.microsoft.com/en-us/dotnet/standard/garbage-collection/large-object-heap).

## Related sections

- [10.1.5 Pinned objects](/en/chapter-10-memory-management-and-performance/10-1-5-pinned-objects)
- [10.3.3 ArrayPool<T> for renting buffers](/en/chapter-10-memory-management-and-performance/10-3-3-arraypool-t-for-renting-buffers)
