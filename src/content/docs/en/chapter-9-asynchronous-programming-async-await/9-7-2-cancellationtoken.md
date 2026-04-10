---
title: CancellationToken
sidebar:
  order: 230
  label: 9.7.2 CancellationToken
---

**Context**: `CancellationToken` is passed to asynchronous methods to allow cancellation. The method can check `IsCancellationRequested` or call `ThrowIfCancellationRequested()`.

```csharp
using System.Threading;
using System.Threading.Tasks;

public class Processor
{
    public async Task ProcessAsync(CancellationToken token)
    {
        for (int i = 0; i < 100; i++)
        {
            token.ThrowIfCancellationRequested();
            await Task.Delay(100, token);
        }
    }
}
```

## Default token

Use `CancellationToken.None` when you have no token to pass.

```csharp
await processor.ProcessAsync(CancellationToken.None);
```

## Real-world usage example

**EF Core queries**: `ToListAsync(cancellationToken)` accepts a token to cancel the database query.

**Example**: [EF Core cancellation](https://docs.microsoft.com/en-us/ef/core/querying/async#cancellation)

## Related sections

- [9.7 Cancellation tokens](/en/chapter-9-asynchronous-programming-async-await/9-7-cancellation-tokens)
- [9.7.3 ThrowIfCancellationRequested](/en/chapter-9-asynchronous-programming-async-await/9-7-3-throwifcancellationrequested)
