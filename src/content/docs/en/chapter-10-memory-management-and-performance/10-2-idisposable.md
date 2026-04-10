---
title: IDisposable
sidebar:
  order: 306
  label: 10.2 IDisposable
---

**Context**: `IDisposable` is an interface that provides a mechanism for releasing unmanaged resources (file handles, database connections, sockets) in a deterministic manner. The .NET GC only cleans up managed memory; unmanaged resources must be explicitly released. `IDisposable` defines a single method `Dispose()`. When you implement `IDisposable`, you should also implement a finalizer (destructor) as a safety net.

## Usage Example

```csharp
using System;
using System.IO;

public class ResourceHolder : IDisposable
{
    private FileStream _fileStream;
    private bool _disposed = false;

    public ResourceHolder(string path)
    {
        _fileStream = File.OpenRead(path);
    }

    public void Dispose()
    {
        Dispose(true);
        GC.SuppressFinalize(this);
    }

    protected virtual void Dispose(bool disposing)
    {
        if (!_disposed)
        {
            if (disposing)
            {
                _fileStream?.Dispose();
            }
            _disposed = true;
        }
    }

    ~ResourceHolder()
    {
        Dispose(false);
    }
}
```

## Output console

```shell
// No direct output; the Dispose method is called automatically at the end of a using block.
```

## Important notes

- Always call `Dispose()` when you are done with an `IDisposable` object.
- Use the `using` statement to guarantee disposal even if exceptions occur.

## Real‑world usage example

**File I/O** – Every `StreamReader`, `FileStream`, or `SqlConnection` implements `IDisposable`. Always dispose them to free operating system handles.  
See [.NET docs on IDisposable](https://docs.microsoft.com/en-us/dotnet/standard/garbage-collection/implementing-dispose).

## Related sections

- [10.2.1 Unmanaged resources](/en/chapter-10-memory-management-and-performance/10-2-1-unmanaged-resources)
- [10.2.2 Dispose pattern](/en/chapter-10-memory-management-and-performance/10-2-2-dispose-pattern)
- [10.2.3 using statement](/en/chapter-10-memory-management-and-performance/10-2-3-using-statement)
