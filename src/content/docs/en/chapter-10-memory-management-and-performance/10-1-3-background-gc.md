---
title: Background GC
sidebar:
  order: 303
  label: 10.1.3 Background GC
---

**Context**: Background GC (also called concurrent GC) allows the garbage collector to collect generations 0 and 1 while a full generation 2 collection is in progress. This reduces application pauses because the GC can do most of its work on a background thread. Before .NET 4.5, full collections would freeze all application threads. With background GC, only short pauses occur, improving responsiveness, especially for server workloads.

## Usage Example

```csharp
using System;
using System.Runtime;

public class BackgroundGCDemo
{
    public static void ShowStatus()
    {
        // Check if background GC is enabled (it is by default)
        GCSettings.LatencyMode mode = GCSettings.LatencyMode;
        Console.WriteLine($"Latency mode: {mode}");
        // For background GC, mode is usually "Interactive" or "Batch"
    }
}
```

## Output console

```shell
dotnet run
Latency mode: Interactive
```

## Important notes

- Enabled by default in modern .NET (Core 3.0+).
- Reduces visible pauses in interactive applications.
- Can be disabled via configuration (not recommended).

## Real‑world usage example

**Real‑time dashboard** – A financial dashboard that updates every second benefits from background GC because it avoids UI freezes during full collections.  
See [.NET docs on background GC](https://docs.microsoft.com/en-us/dotnet/standard/garbage-collection/background-gc).

## Related sections

- [10.1.2 Workstation GC vs Server GC](/en/chapter-10-memory-management-and-performance/10-1-2-workstation-gc-vs-server-gc)
- [10.1.4 Large Object Heap LOH](/en/chapter-10-memory-management-and-performance/10-1-4-large-object-heap-loh)
