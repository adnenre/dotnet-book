---
title: BenchmarkDotNet
sidebar:
  order: 316
  label: 10.4.1 BenchmarkDotNet
---

**Context**: BenchmarkDotNet is a powerful open‑source library that turns your methods into benchmarks, runs them multiple times, and provides statistical results (mean, error, std dev, allocation). It automatically handles warm‑up, iterations, and memory diagnostics. To use it, add the `BenchmarkDotNet` NuGet package and mark methods with `[Benchmark]`.

## Usage Example

```bash
dotnet add package BenchmarkDotNet
```

```csharp
using BenchmarkDotNet.Attributes;
using BenchmarkDotNet.Running;
using System;

public class MyBenchmarks
{
    [Benchmark]
    public int CalculateSum()
    {
        int sum = 0;
        for (int i = 0; i < 1000; i++) sum += i;
        return sum;
    }
}

class Program
{
    static void Main(string[] args)
    {
        var summary = BenchmarkRunner.Run<MyBenchmarks>();
    }
}
```

## Output console

```shell
dotnet run -c Release
| Method        | Mean     | Error    | StdDev   |
|-------------- |---------:|---------:|---------:|
| CalculateSum  | 0.524 us | 0.012 us | 0.011 us |
```

## Important notes

- Build and run in **Release** mode: `dotnet run -c Release`
- Do not attach a debugger (Ctrl+F5 in VS).
- BenchmarkDotNet will execute each benchmark many times for reliable statistics.

## Real‑world usage example

**Comparing serializers** – Benchmark `System.Text.Json` vs `Newtonsoft.Json` to see which is faster for your data.  
See [BenchmarkDotNet getting started](https://benchmarkdotnet.org/articles/guides/getting-started.html).

## Related sections

- [10.4.2 Benchmark and MemoryDiagnoser attributes](/en/chapter-10-memory-management-and-performance/10-4-2-benchmark-and-memorydiagnoser-attributes)
- [10.4.3 Running benchmarks avoiding common pitfalls](/en/chapter-10-memory-management-and-performance/10-4-3-running-benchmarks-avoiding-common-pitfalls)
