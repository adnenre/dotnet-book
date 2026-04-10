---
title: Dispose pattern
sidebar:
  order: 308
  label: 10.2.2 Dispose pattern
---

**Context**: The Dispose pattern is the recommended way to implement `IDisposable` in a class hierarchy. It involves a protected virtual `Dispose(bool disposing)` method that handles both deterministic disposal and finalization. This pattern ensures that base classes and derived classes can properly release their resources, and it prevents the finalizer from running if `Dispose()` has already been called.

## Usage Example

```csharp
using System;

public class BaseResource : IDisposable
{
    private bool _disposed = false;

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
                // Release managed resources
            }
            // Release unmanaged resources
            _disposed = true;
        }
    }

    ~BaseResource()
    {
        Dispose(false);
    }
}

public class DerivedResource : BaseResource
{
    private bool _disposed = false;

    protected override void Dispose(bool disposing)
    {
        if (!_disposed)
        {
            if (disposing)
            {
                // Release derived managed resources
            }
            // Release derived unmanaged resources
            _disposed = true;
        }
        base.Dispose(disposing);
    }
}
```

## Output console

```shell
// No console output; the pattern ensures proper resource cleanup.
```

## Important notes

- `Dispose(bool)` differentiates between finalizer call (`disposing = false`) and manual call.
- Call `GC.SuppressFinalize(this)` in `Dispose()` to avoid finalization.

## Real‑world usage example

**Custom database connection** – Implementing `DbConnection` requires the Dispose pattern to clean up both managed (transactions) and unmanaged (socket) resources.  
See [.NET docs on Dispose pattern](https://docs.microsoft.com/en-us/dotnet/standard/garbage-collection/implementing-dispose).

## Related sections

- [10.2 IDisposable](/en/chapter-10-memory-management-and-performance/10-2-idisposable)
- [10.2.3 using statement](/en/chapter-10-memory-management-and-performance/10-2-3-using-statement)
