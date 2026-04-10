---
title: Unmanaged resources
sidebar:
  order: 307
  label: 10.2.1 Unmanaged resources
---

**Context**: Unmanaged resources are resources that the .NET GC does not know about. Examples include file handles, window handles (HWND), GDI objects, database connections, network sockets, and memory allocated via `Marshal.AllocHGlobal`. These resources must be explicitly released by the developer. `IDisposable` is the standard pattern for releasing them.

## Usage Example

```csharp
using System;
using System.Runtime.InteropServices;

public class NativeBuffer : IDisposable
{
    private IntPtr _buffer;
    private bool _disposed = false;

    public NativeBuffer(int size)
    {
        _buffer = Marshal.AllocHGlobal(size);
    }

    public void Dispose()
    {
        if (!_disposed && _buffer != IntPtr.Zero)
        {
            Marshal.FreeHGlobal(_buffer);
            _buffer = IntPtr.Zero;
            _disposed = true;
        }
        GC.SuppressFinalize(this);
    }

    ~NativeBuffer()
    {
        if (_buffer != IntPtr.Zero)
        {
            Marshal.FreeHGlobal(_buffer);
        }
    }
}
```

## Output console

```shell
// No output; the native memory is freed when Dispose() is called.
```

## Important notes

- Unmanaged resources cause resource leaks if not released.
- Always provide a finalizer (destructor) as a backup.

## Real‑world usage example

**Native memory allocator** – When using `Marshal.AllocHGlobal` for interop, wrap it in an `IDisposable` class to ensure memory is freed.  
See [.NET docs on unmanaged resources](https://docs.microsoft.com/en-us/dotnet/standard/unmanaged-code/pinvoke).

## Related sections

- [10.2 IDisposable](/en/chapter-10-memory-management-and-performance/10-2-idisposable)
- [10.2.2 Dispose pattern](/en/chapter-10-memory-management-and-performance/10-2-2-dispose-pattern)
