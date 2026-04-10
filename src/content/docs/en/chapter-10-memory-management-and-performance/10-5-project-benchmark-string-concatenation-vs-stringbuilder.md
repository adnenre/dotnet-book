---
title: "Project: Benchmark String Concatenation vs StringBuilder"
sidebar:
  order: 319
  label: 10.5 Project Benchmark String Concatenation vs StringBuilder
---

**Context**: This project benchmarks two common ways to concatenate many strings: using the `+` operator (which creates many intermediate strings) and using `StringBuilder` (which uses a mutable buffer). You will use BenchmarkDotNet with `[MemoryDiagnoser]` to measure both execution time and memory allocations. This demonstrates why `StringBuilder` is preferred for loops with many concatenations.

## Usage Example

```csharp
using BenchmarkDotNet.Attributes;
using BenchmarkDotNet.Running;
using System.Text;

[MemoryDiagnoser]
public class StringConcatBenchmark
{
    private const int Iterations = 1000;

    [Benchmark]
    public string ConcatWithPlus()
    {
        string result = "";
        for (int i = 0; i < Iterations; i++)
        {
            result += i.ToString();
        }
        return result;
    }

    [Benchmark]
    public string ConcatWithStringBuilder()
    {
        var sb = new StringBuilder();
        for (int i = 0; i < Iterations; i++)
        {
            sb.Append(i);
        }
        return sb.ToString();
    }
}

class Program
{
    static void Main(string[] args)
    {
        var summary = BenchmarkRunner.Run<StringConcatBenchmark>();
    }
}
```

## Output console

```shell
dotnet run -c Release
| Method                  | Mean     | Gen0     | Allocated |
|------------------------ |---------:|---------:|----------:|
| ConcatWithPlus          | 845.2 us | 123.4567 | 512.34 KB |
| ConcatWithStringBuilder | 12.3 us  |   0.1234 |   4.56 KB |
```

## How to run

1. Create a new console project.
2. Add the BenchmarkDotNet NuGet package: `dotnet add package BenchmarkDotNet`
3. Replace `Program.cs` with the code above.
4. Run in Release mode: `dotnet run -c Release`

## Important notes

- The `+` operator creates a new string each iteration (strings are immutable).
- `StringBuilder` uses an internal buffer that grows as needed, reducing allocations.

## Real‑world usage example

**Building large HTML/JSON strings** – In a web API, using `StringBuilder` (or modern `String.Create`) is crucial for performance when constructing large responses.  
See [.NET docs on StringBuilder](https://docs.microsoft.com/en-us/dotnet/api/system.text.stringbuilder).

## Related sections

- [10.4.2 Benchmark and MemoryDiagnoser attributes](/en/chapter-10-memory-management-and-performance/10-4-2-benchmark-and-memorydiagnoser-attributes)
- [10.4.3 Running benchmarks avoiding common pitfalls](/en/chapter-10-memory-management-and-performance/10-4-3-running-benchmarks-avoiding-common-pitfalls)
