---
title: await foreach
sidebar:
  order: 220
  label: 9.4.2 await foreach
---

**Context**: `await foreach` iterates over an `IAsyncEnumerable<T>` asynchronously, awaiting each element before the loop body executes.

```csharp
using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;

public class Example
{
    public static async Task Main()
    {
        await foreach (var item in GetDataAsync())
        {
            Console.WriteLine(item);
        }
    }

    private static async IAsyncEnumerable<int> GetDataAsync()
    {
        for (int i = 0; i < 5; i++)
        {
            await Task.Delay(100);
            yield return i;
        }
    }
}
```

## Cancellation

You can pass a `CancellationToken` to the `GetAsyncEnumerator` method.

```csharp
var cts = new CancellationTokenSource();
await foreach (var item in GetDataAsync().WithCancellation(cts.Token))
{
    // ...
}
```

## Real-world usage example

**Processing paginated API responses**: Each page is fetched asynchronously, and you `await foreach` over the pages.

**Example**: [.NET Async Streams documentation](https://docs.microsoft.com/en-us/dotnet/csharp/whats-new/tutorials/generate-consume-asynchronous-stream)

## Related sections

- [9.4 Asynchronous streams](/en/chapter-9-asynchronous-programming-async-await/9-4-asynchronous-streams)
- [9.4.1 IAsyncEnumerable<T>](/en/chapter-9-asynchronous-programming-async-await/9-4-1-iasyncenumerable-t)
