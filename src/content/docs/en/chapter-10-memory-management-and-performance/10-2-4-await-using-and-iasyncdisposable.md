---
title: await using and IAsyncDisposable
sidebar:
  order: 310
  label: 10.2.4 await using and IAsyncDisposable
---

**Context**: `IAsyncDisposable` is the asynchronous counterpart of `IDisposable`. It defines `DisposeAsync()` which returns `ValueTask`. The `await using` statement (C# 8.0+) allows you to asynchronously dispose of resources, which is useful for classes that perform asynchronous cleanup (e.g., closing network streams, flushing file buffers).

## Usage Example

```csharp
using System;
using System.IO;
using System.Threading.Tasks;

public class AsyncResource : IAsyncDisposable
{
    private FileStream _stream;

    public AsyncResource(string path)
    {
        _stream = new FileStream(path, FileMode.OpenOrCreate);
    }

    public async ValueTask DisposeAsync()
    {
        if (_stream != null)
        {
            await _stream.FlushAsync();
            await _stream.DisposeAsync();
        }
        GC.SuppressFinalize(this);
    }

    // Optional finalizer if needed
    ~AsyncResource() { }
}

public class AsyncUsingDemo
{
    public static async Task UseAsyncResourceAsync()
    {
        await using (var resource = new AsyncResource("test.txt"))
        {
            // Use resource
        } // DisposeAsync() is awaited here
    }
}
```

## Output console

```shell
// No output; the async disposal happens in the background.
```

## Important notes

- `await using` requires the resource to implement `IAsyncDisposable`.
- If both `IDisposable` and `IAsyncDisposable` are implemented, the compiler prefers `await using` for asynchronous disposal.

## Real‑world usage example

**Network stream reader** – `HttpResponseMessage` implements `IAsyncDisposable`. Using `await using` ensures that the response stream is asynchronously disposed, releasing the connection back to the pool.  
See [.NET docs on IAsyncDisposable](https://docs.microsoft.com/en-us/dotnet/standard/garbage-collection/implementing-disposeasync).

## Related sections

- [10.2.3 using statement](/en/chapter-10-memory-management-and-performance/10-2-3-using-statement)
- [10.2 IDisposable](/en/chapter-10-memory-management-and-performance/10-2-idisposable)
