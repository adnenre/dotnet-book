---
title: Exceptions cannot be caught
sidebar:
  order: 223
  label: 9.5.1 Exceptions cannot be caught
---

**Context**: Exceptions thrown from an `async void` method cannot be caught by the caller; they crash the process or cause the application to terminate.

```csharp
using System;
using System.Threading.Tasks;

public class BadExample
{
    public static void Main()
    {
        try
        {
            BadAsyncVoid();
        }
        catch (Exception)
        {
            Console.WriteLine("This will never execute");
        }
        Console.ReadLine(); // process may crash before this
    }

    static async void BadAsyncVoid()
    {
        throw new InvalidOperationException("Crash");
    }
}
```

## Solution

Return `Task` instead of `void`.

```csharp
async Task GoodAsync()
{
    throw new InvalidOperationException("Will be caught");
}
```

## Real-world usage example

**Avoid in library code**: Never expose `async void` in public API. Only use `async void` for UI event handlers where the framework handles exceptions.

**Example**: [Async guidelines - avoid async void](https://docs.microsoft.com/en-us/archive/msdn-magazine/2013/march/async-await-best-practices-in-asynchronous-programming#avoid-async-void)

## Related sections

- [9.5 Avoiding async void](/en/chapter-9-asynchronous-programming-async-await/9-5-avoiding-async-void)
- [9.5.2 Hard to test](/en/chapter-9-asynchronous-programming-async-await/9-5-2-hard-to-test)
