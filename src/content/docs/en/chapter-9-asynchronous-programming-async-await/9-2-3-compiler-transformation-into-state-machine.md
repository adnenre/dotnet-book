---
title: Compiler transformation into state machine
sidebar:
  order: 213
  label: 9.2.3 Compiler transformation into state machine
---

**Context**: The C# compiler transforms `async` methods into a state machine. This allows the method to suspend and resume at `await` points without blocking.

```csharp
using System;
using System.Threading.Tasks;

public class Example
{
    public async Task ExampleAsync()
    {
        Console.WriteLine("Start");
        await Task.Delay(1000);
        Console.WriteLine("Resumed");
    }
}
```

The compiler generates a struct with states (0 = before first await, 1 = after, etc.), preserving local variables.

## Why this matters

- No threading magic: the method runs on the original synchronization context after the await.
- Efficient: no extra thread is created for waiting.

## Real-world usage example

**UI applications**: In WPF or WinForms, `await` returns to the UI thread automatically (if not using `ConfigureAwait(false)`).

**Example**: [Async in depth](https://docs.microsoft.com/en-us/dotnet/csharp/async) explains the state machine.

## Related sections

- [9.2 async and await](/en/chapter-9-asynchronous-programming-async-await/9-2-async-and-await)
- [9.6 ConfigureAwait false](/en/chapter-9-asynchronous-programming-async-await/9-6-configureawait-false)
