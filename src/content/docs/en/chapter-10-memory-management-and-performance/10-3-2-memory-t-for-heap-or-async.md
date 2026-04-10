---
title: Memory<T> for heap or async
sidebar:
  order: 313
  label: 10.3.2 Memory<T> for heap or async
---

**Context**: `Memory<T>` is a struct that represents a contiguous region of memory that can live on the heap (e.g., an array) and be used in asynchronous methods. Unlike `Span<T>`, `Memory<T>` is not a `ref struct`, so it can be stored in fields, captured in async lambdas, and used as a parameter in async methods. You obtain a `Span<T>` from a `Memory<T>` via the `Span` property.

## Usage Example

```csharp
using System;
using System.Threading.Tasks;

public class MemoryDemo
{
    public static async Task ProcessAsync(Memory<byte> memory)
    {
        // Work with the memory (e.g., write to a stream)
        // For actual operations, get a Span (but be careful: Span cannot be used across await)
        // Instead, use Memory<byte> directly with stream.WriteAsync
        await Task.Delay(10);
        Console.WriteLine($"Processing {memory.Length} bytes");
    }

    public static async Task Example()
    {
        byte[] buffer = new byte[1024];
        Memory<byte> memory = buffer.AsMemory();
        await ProcessAsync(memory);
    }
}
```

## Output console

```shell
dotnet run
Processing 1024 bytes
```

## Important notes

- Use `Memory<T>` when you need to store the reference across `await` boundaries.
- Convert to `Span<T>` only for synchronous operations within a method.

## Real‑world usage example

**Asynchronous file copy** – `Stream.ReadAsync` and `WriteAsync` accept `Memory<byte>` to read/write chunks without extra allocations.  
See [.NET docs on Memory<T>](https://docs.microsoft.com/en-us/dotnet/api/system.memory-1).

## Related sections

- [10.3.1 Stack‑only Span<T>](/en/chapter-10-memory-management-and-performance/10-3-1-stack-only-span-t)
- [10.3.3 ArrayPool<T> for renting buffers](/en/chapter-10-memory-management-and-performance/10-3-3-arraypool-t-for-renting-buffers)
