---
title: Cancellation tokens
sidebar:
  order: 228
  label: 9.7 Cancellation tokens
---

**Context**: Cancellation tokens provide a standard way to cancel asynchronous operations. They are cooperative: the operation must periodically check the token and respond.

## Complete example

```csharp
using System;
using System.Threading;
using System.Threading.Tasks;

public class Program
{
    public static async Task Main()
    {
        using var cts = new CancellationTokenSource();

        // Set a timeout of 3 seconds
        cts.CancelAfter(3000);

        Console.WriteLine("Starting long operation. Press 'c' to cancel, or wait for timeout.");

        // Start a task to listen for key press
        _ = Task.Run(() =>
        {
            if (Console.ReadKey(true).KeyChar == 'c')
            {
                Console.WriteLine("\nManual cancellation requested.");
                cts.Cancel();
            }
        });

        try
        {
            await LongRunningOperationAsync(cts.Token);
            Console.WriteLine("Operation completed successfully.");
        }
        catch (OperationCanceledException)
        {
            Console.WriteLine("Operation was cancelled.");
        }
    }

    static async Task LongRunningOperationAsync(CancellationToken token)
    {
        for (int i = 0; i < 100; i++)
        {
            // Check for cancellation at each iteration
            token.ThrowIfCancellationRequested();

            Console.WriteLine($"Step {i + 1}/100");
            await Task.Delay(200, token); // Pass token to Delay as well
        }
    }
}
```

## Explanation

- `CancellationTokenSource` creates a token and can request cancellation.
- `CancelAfter(3000)` automatically cancels after 3 seconds.
- The loop checks `token.ThrowIfCancellationRequested()`; if cancelled, an `OperationCanceledException` is thrown.
- `Task.Delay` also accepts a token, allowing it to be cancelled while waiting.
- Manual cancellation is triggered by pressing 'c'.

## Related sections

- [9.7.1 CancellationTokenSource](/en/chapter-9-asynchronous-programming-async-await/9-7-1-cancellationtokensource)
- [9.7.2 CancellationToken](/en/chapter-9-asynchronous-programming-async-await/9-7-2-cancellationtoken)
- [9.7.3 ThrowIfCancellationRequested](/en/chapter-9-asynchronous-programming-async-await/9-7-3-throwifcancellationrequested)
- [9.7.4 Cooperative cancellation](/en/chapter-9-asynchronous-programming-async-await/9-7-4-cooperative-cancellation)
