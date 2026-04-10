---
title: Garbage Collection
sidebar:
  order: 300
  label: 10.1 Garbage Collection
---

**Context**: What is Garbage Collection? In .NET, the Garbage Collector (GC) is an automatic memory manager. It runs on a dedicated thread and tracks all managed objects allocated on the managed heap. When an object is no longer referenced by any root (local variables, static fields, CPU registers, etc.), the GC considers it garbage and reclaims its memory. This eliminates most memory leaks and dangling pointer bugs. The GC uses sophisticated heuristics to balance memory usage, application throughput, and pause times.

## Usage Example

```csharp
using System;

public class GCDemo
{
    public static void ShowGenerations()
    {
        object obj = new object();
        Console.WriteLine(GC.GetGeneration(obj)); // Current generation (0)
        GC.Collect(); // Force a collection (not recommended in production)
        Console.WriteLine(GC.GetGeneration(obj)); // Generation after collection
    }
}
```

## Output console

```shell
dotnet run
0
1
```

## Important notes

- **Automatic** – You never call `free` or `delete`.
- **Non‑deterministic** – The GC runs when needed (memory pressure) or heuristically.
- **Generational** – New objects are collected more frequently than old ones.
- **Compacting** – The GC moves live objects to reduce fragmentation.

## Real‑world usage example

**Large file processing** – Reading a huge file line by line with `StreamReader` allocates many small objects (strings). Understanding GC helps you reuse buffers or use `Span<T>` to reduce allocations, avoiding frequent Gen0 collections.  
See [.NET docs on Garbage Collection](https://docs.microsoft.com/en-us/dotnet/standard/garbage-collection/).

## Related sections

- [10.1.1 Generations 0, 1, 2](/en/chapter-10-memory-management-and-performance/10-1-1-generations-0-1-2)
- [10.1.2 Workstation GC vs Server GC](/en/chapter-10-memory-management-and-performance/10-1-2-workstation-gc-vs-server-gc)
- [10.1.3 Background GC](/en/chapter-10-memory-management-and-performance/10-1-3-background-gc)
- [10.1.4 Large Object Heap LOH](/en/chapter-10-memory-management-and-performance/10-1-4-large-object-heap-loh)
- [10.1.5 Pinned objects](/en/chapter-10-memory-management-and-performance/10-1-5-pinned-objects)
