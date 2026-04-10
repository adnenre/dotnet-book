---
title: Pinned objects
sidebar:
  order: 305
  label: 10.1.5 Pinned objects
---

**Context**: The GC normally moves objects in memory during compaction. However, when interoperating with unmanaged code (e.g., using `P/Invoke` or `System.Span<T>`), you may need to fix an object's address so that the GC does not move it. This is called **pinning**. Pinned objects are marked and the GC will skip moving them, which can cause heap fragmentation. You should pin objects only for the shortest possible time.

## Usage Example

```csharp
using System;
using System.Runtime.InteropServices;

public class PinningDemo
{
    public static void PinArray()
    {
        byte[] buffer = new byte[1024];
        GCHandle handle = GCHandle.Alloc(buffer, GCHandleType.Pinned);
        try
        {
            IntPtr address = handle.AddrOfPinnedObject();
            Console.WriteLine($"Pinned address: {address}");
            // Call unmanaged method here
        }
        finally
        {
            handle.Free();
        }
    }
}
```

## Output console

```shell
dotnet run
Pinned address: 0x1B2F3A4C
```

## Important notes

- Pinning prevents GC compaction, leading to fragmentation.
- Use `fixed` statement in unsafe context for short pinning.
- Avoid pinning large objects on LOH.

## Real‑world usage example

**Calling native library** – When you pass a byte array to a Windows API function like `ReadFile`, you may need to pin the array to ensure the GC doesn't move it during the call.  
See [.NET docs on pinning](https://docs.microsoft.com/en-us/dotnet/standard/garbage-collection/pinning).

## Related sections

- [10.1.4 Large Object Heap LOH](/en/chapter-10-memory-management-and-performance/10-1-4-large-object-heap-loh)
- [10.3 Span<T> and Memory<T>](/en/chapter-10-memory-management-and-performance/10-3-span-t-and-memory-t)
