---
title: ArrayPool<T> for renting buffers
sidebar:
  order: 314
  label: 10.3.3 ArrayPool<T> for renting buffers
---

**Context**: `ArrayPool<T>` is a high‑performance pool of arrays that reduces garbage collection pressure by reusing large arrays. Instead of allocating a new array each time, you rent one from the pool and return it when done. This is especially useful for temporary buffers that are used frequently (e.g., in network or file I/O). The default `ArrayPool<T>` is shared and thread‑safe.

## Usage Example

```csharp
using System;
using System.Buffers;

public class ArrayPoolDemo
{
    public static void ProcessData(int minLength)
    {
        byte[] buffer = ArrayPool<byte>.Shared.Rent(minLength);
        try
        {
            // Use the buffer (actual length may be larger than minLength)
            // Fill buffer with data
            Console.WriteLine($"Rented buffer size: {buffer.Length}");
        }
        finally
        {
            ArrayPool<byte>.Shared.Return(buffer);
        }
    }
}
```

## Output console

```shell
dotnet run
Rented buffer size: 1024
```

## Important notes

- Rented arrays may be larger than requested – only use the first `minLength` elements.
- Always return the buffer to the pool to avoid memory leaks.
- Do not keep references to returned buffers.

## Real‑world usage example

**High‑throughput TCP server** – When reading from sockets, renting a buffer from `ArrayPool<byte>` for each receive operation avoids frequent allocations, reducing GC pressure.  
See [.NET docs on ArrayPool<T>](https://docs.microsoft.com/en-us/dotnet/api/system.buffers.arraypool-1).

## Related sections

- [10.3.2 Memory<T> for heap or async](/en/chapter-10-memory-management-and-performance/10-3-2-memory-t-for-heap-or-async)
- [10.4 Benchmarking](/en/chapter-10-memory-management-and-performance/10-4-benchmarking)
