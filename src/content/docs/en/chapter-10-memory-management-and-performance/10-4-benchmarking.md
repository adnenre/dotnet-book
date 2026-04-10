---
title: Benchmarking
sidebar:
  order: 315
  label: 10.4 Benchmarking
---

**Context**: Benchmarking measures the performance (execution time, memory allocations) of code to identify bottlenecks and compare implementations. Manual timing with `Stopwatch` is error‑prone because of JIT warm‑up, background threads, and other factors. **BenchmarkDotNet** is the industry‑standard library for .NET benchmarking that handles all these complexities.

## Usage Example

```csharp
using System;
using System.Diagnostics;

// Manual benchmarking (not recommended)
public class ManualBenchmark
{
    public static void Measure(Action action)
    {
        Stopwatch sw = Stopwatch.StartNew();
        action();
        sw.Stop();
        Console.WriteLine($"Elapsed: {sw.ElapsedMilliseconds} ms");
    }
}
```

## Output console

```shell
dotnet run
Elapsed: 123 ms
```

## Important notes

- Always use a dedicated benchmarking library.
- Run benchmarks in **Release** mode without debugger attached.

## Real‑world usage example

**Choosing a collection type** – Benchmark whether `List<T>` or `HashSet<T>` is faster for your specific lookup pattern.  
See [BenchmarkDotNet documentation](https://benchmarkdotnet.org/).

## Related sections

- [10.4.1 BenchmarkDotNet](/en/chapter-10-memory-management-and-performance/10-4-1-benchmarkdotnet)
- [10.4.2 Benchmark and MemoryDiagnoser attributes](/en/chapter-10-memory-management-and-performance/10-4-2-benchmark-and-memorydiagnoser-attributes)
