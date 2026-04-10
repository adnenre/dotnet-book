---
title: Span<T> and Memory<T>
sidebar:
  order: 311
  label: 10.3 Span<T> and Memory<T>
---

**Context**: `Span<T>` and `Memory<T>` are ref‑struct types introduced in .NET Core 2.1 to provide safe, allocation‑free access to contiguous memory regions. They can represent arrays, strings, or native buffers. `Span<T>` is stack‑only, while `Memory<T>` can live on the heap and be used in async methods. They are critical for high‑performance scenarios where you want to avoid copying data.

## Usage Example

```csharp
using System;

public class SpanDemo
{
    public static void SliceExample()
    {
        int[] numbers = { 1, 2, 3, 4, 5 };
        Span<int> span = numbers.AsSpan();
        Span<int> slice = span.Slice(1, 3); // {2,3,4}
        slice[0] = 10; // Modifies original array
        Console.WriteLine(numbers[1]); // 10
    }
}
```

## Output console

```shell
dotnet run
10
```

## Important notes

- `Span<T>` cannot be used as a field in async methods or classes.
- `Memory<T>` is a heap‑friendly alternative for async scenarios.

## Real‑world usage example

**Parsing CSV lines** – Instead of allocating substrings, use `Span<char>` and `Slice` to parse comma‑separated values without allocations.  
See [.NET docs on Span<T>](https://docs.microsoft.com/en-us/dotnet/api/system.span-1).

## Related sections

- [10.3.1 Stack‑only Span<T>](/en/chapter-10-memory-management-and-performance/10-3-1-stack-only-span-t)
- [10.3.2 Memory<T> for heap or async](/en/chapter-10-memory-management-and-performance/10-3-2-memory-t-for-heap-or-async)
