---
title: Generations 0, 1, 2
sidebar:
  order: 301
  label: 10.1.1 Generations 0, 1, 2
---

**Context**: To improve efficiency, the GC divides the managed heap into three generations: 0, 1, and 2. Newly allocated objects start in generation 0. When a garbage collection occurs, objects that survive are promoted to the next generation. Because most objects die young (e.g., temporary variables), collecting only generation 0 is fast and frequent. Objects that survive multiple collections (e.g., static data, caches) end up in generation 2, which is collected rarely.

| Generation | Typical lifetime                        | Collection frequency |
| ---------- | --------------------------------------- | -------------------- |
| **0**      | Very short (local variables)            | Very frequent        |
| **1**      | Buffer (objects that survived Gen0)     | Less frequent        |
| **2**      | Long‑lived (static objects, singletons) | Rare                 |

## Usage Example

```csharp
using System;

class Program
{
    static void Main()
    {
        var obj = new object();
        Console.WriteLine($"Initial generation: {GC.GetGeneration(obj)}"); // 0

        GC.Collect(); // Gen0 collection
        Console.WriteLine($"After first collection: {GC.GetGeneration(obj)}"); // 1

        GC.Collect(); // Gen1 collection (promotes survivors)
        Console.WriteLine($"After second collection: {GC.GetGeneration(obj)}"); // 2

        GC.Collect();
        Console.WriteLine($"Still in Gen2: {GC.GetGeneration(obj)}"); // 2
    }
}
```

## Output console

```shell
dotnet run
Initial generation: 0
After first collection: 1
After second collection: 2
Still in Gen2: 2
```

## Important notes

- Avoid calling `GC.Collect()` manually – it disrupts GC heuristics.
- Gen2 objects are rarely collected, so avoid unnecessary long‑lived allocations.

## Real‑world usage example

**Caching service** – Cache entries should be stored with weak references or be carefully designed to avoid promoting too many objects to Gen2, which would increase memory footprint.  
See [.NET docs on generations](https://docs.microsoft.com/en-us/dotnet/standard/garbage-collection/fundamentals#generations).

## Related sections

- [10.1 Garbage Collection](/en/chapter-10-memory-management-and-performance/10-1-garbage-collection)
- [10.1.2 Workstation GC vs Server GC](/en/chapter-10-memory-management-and-performance/10-1-2-workstation-gc-vs-server-gc)
