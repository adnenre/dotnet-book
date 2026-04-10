---
title: await using asynchronous disposable
sidebar:
  order: 221
  label: 9.4.3 await using asynchronous disposable
---

**Context**: `await using` disposes an `IAsyncDisposable` object asynchronously, typically used with `await foreach` to dispose the enumerator asynchronously.

```csharp
using System;
using System.Data.SqlClient;
using System.Threading.Tasks;

public class DatabaseService
{
    public async Task ProcessAsync()
    {
        await using var connection = new SqlConnection(connectionString);
        // connection is disposed asynchronously at the end of the scope
    }

    private string connectionString = "Server=.;Database=MyDb;Trusted_Connection=true;";
}
```

## Implementing `IAsyncDisposable`

```csharp
using System;
using System.Threading.Tasks;

public class AsyncResource : IAsyncDisposable
{
    public async ValueTask DisposeAsync()
    {
        await CleanupAsync();
    }

    private Task CleanupAsync() => Task.Delay(100);
}
```

## Real-world usage example

**Database connections**: `SqlConnection` implements `IAsyncDisposable`. Using `await using` ensures asynchronous cleanup.

**Example**: [IAsyncDisposable documentation](https://docs.microsoft.com/en-us/dotnet/standard/garbage-collection/implementing-disposeasync)

## Related sections

- [9.4 Asynchronous streams](/en/chapter-9-asynchronous-programming-async-await/9-4-asynchronous-streams)
- [9.4.2 await foreach](/en/chapter-9-asynchronous-programming-async-await/9-4-2-await-foreach)
