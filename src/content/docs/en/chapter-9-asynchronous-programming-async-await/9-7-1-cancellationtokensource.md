---
title: CancellationTokenSource
sidebar:
  order: 229
  label: 9.7.1 CancellationTokenSource
---

**Context**: `CancellationTokenSource` is used to create a `CancellationToken` and to request cancellation by calling `Cancel()`.

```csharp
using System;
using System.Threading;
using System.Threading.Tasks;

public class TimeoutExample
{
    public static async Task Main()
    {
        using var cts = new CancellationTokenSource();
        cts.CancelAfter(5000); // auto‑cancel after 5 seconds

        // Request cancellation manually (e.g., user press)
        // cts.Cancel();

        try
        {
            await LongRunningOperationAsync(cts.Token);
        }
        catch (OperationCanceledException)
        {
            Console.WriteLine("Operation cancelled");
        }
    }

    static async Task LongRunningOperationAsync(CancellationToken token)
    {
        for (int i = 0; i < 100; i++)
        {
            token.ThrowIfCancellationRequested();
            await Task.Delay(100);
        }
    }
}
```

## Obtaining a token

```csharp
CancellationToken token = cts.Token;
```

## Real-world usage example

**Timeout for HTTP requests**: Use `CancellationTokenSource` with `CancelAfter` to set a timeout.

**Example**: [HttpClient with cancellation](<https://docs.microsoft.com/en-us/dotnet/api/system.net.http.httpclient.sendasync#system-net-http-httpclient-sendasync(system-net-http-httprequestmessage-system-threading-cancellationtoken)>)

## Related sections

- [9.7 Cancellation tokens](/en/chapter-9-asynchronous-programming-async-await/9-7-cancellation-tokens)
- [9.7.2 CancellationToken](/en/chapter-9-asynchronous-programming-async-await/9-7-2-cancellationtoken)
