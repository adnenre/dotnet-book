---
title: Running benchmarks avoiding common pitfalls
sidebar:
  order: 318
  label: 10.4.3 Running benchmarks avoiding common pitfalls
---

**Context**: To get accurate benchmark results, avoid these common mistakes: running in Debug mode, attaching a debugger, having other applications running, not warming up, and using the same variable across benchmarks. BenchmarkDotNet automatically avoids most of these, but you must ensure your project is built in **Release** configuration and that you run the benchmark process without a debugger.

## Usage Example

```bash
# Correct way to run benchmarks
dotnet run -c Release --filter *MyBenchmark*
```

```csharp
// Pitfall: Dead code elimination
[Benchmark]
public void Pitfall()
{
    int x = 42; // Compiler might remove this if not used
}

// Fix: Consume the value
[Benchmark]
public int Fixed()
{
    int x = 42;
    return x;
}
```

## Output console

```shell
dotnet run -c Release --filter *Fixed*
// BenchmarkDotNet outputs results without warnings.
```

## Important notes

- Use `dotnet run -c Release` (not Debug).
- Do not run benchmarks in a virtual machine or under power‑saving mode.
- Let the benchmark run undisturbed (close browsers, etc.).

## Real‑world usage example

**Benchmarking a new algorithm** – Run benchmarks on a dedicated machine with high‑performance power plan, and always compare against a baseline.  
See [BenchmarkDotNet best practices](https://benchmarkdotnet.org/articles/guides/good-practices.html).

## Related sections

- [10.4.1 BenchmarkDotNet](/en/chapter-10-memory-management-and-performance/10-4-1-benchmarkdotnet)
- [10.4.2 Benchmark and MemoryDiagnoser attributes](/en/chapter-10-memory-management-and-performance/10-4-2-benchmark-and-memorydiagnoser-attributes)
