---
title: ConfigureAwait false
sidebar:
  order: 225
  label: 9.6 ConfigureAwait false
---

**Context**: `ConfigureAwait(false)` tells the awaiter not to capture the current synchronization context. This improves performance and avoids deadlocks in library code.

## Why use ConfigureAwait(false)?

By default, when you `await` a task, the compiler captures the current `SynchronizationContext` (e.g., UI thread context in WPF/WinForms). After the task completes, it attempts to resume execution on that original context. This can cause deadlocks if the context is blocked (e.g., calling `.Result` on a task). It also adds unnecessary overhead.

`ConfigureAwait(false)` opts out of this behavior. The continuation runs on any thread pool thread, which is faster and safer for library code.

## Complete example

```csharp
using System;
using System.Threading;
using System.Threading.Tasks;

public class Program
{
    public static async Task Main()
    {
        Console.WriteLine($"Main thread: {Thread.CurrentThread.ManagedThreadId}");

        // Without ConfigureAwait(false) – captures context
        await WithoutConfigureAwait();

        // With ConfigureAwait(false) – does not capture context
        await WithConfigureAwait();

        Console.WriteLine("Done. Press any key to exit.");
        Console.ReadKey();
    }

    static async Task WithoutConfigureAwait()
    {
        Console.WriteLine($"Before await (without): {Thread.CurrentThread.ManagedThreadId}");
        await Task.Delay(100);
        Console.WriteLine($"After await (without): {Thread.CurrentThread.ManagedThreadId}");
    }

    static async Task WithConfigureAwait()
    {
        Console.WriteLine($"Before await (with): {Thread.CurrentThread.ManagedThreadId}");
        await Task.Delay(100).ConfigureAwait(false);
        Console.WriteLine($"After await (with): {Thread.CurrentThread.ManagedThreadId}");
    }
}
```

## When to use

- **Library code**: Always use `ConfigureAwait(false)` unless you explicitly need to resume on the original context.
- **Application code** (UI, ASP.NET Core): In ASP.NET Core there is no `SynchronizationContext`, so it’s unnecessary but harmless. In UI apps, avoid it if you need to update UI after the await; otherwise, use it for performance.

## Related sections

- [9.6.1 Avoid capturing original SynchronizationContext](/en/chapter-9-asynchronous-programming-async-await/9-6-1-avoid-capturing-original-synchronizationcontext)
- [9.6.2 Use in library code](/en/chapter-9-asynchronous-programming-async-await/9-6-2-use-in-library-code)
