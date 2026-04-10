---
title: async and await
sidebar:
  order: 210
  label: 9.2 async and await
---

**Context**: The `async` and `await` keywords are the core of asynchronous programming in C#. They allow you to write non‑blocking code that looks like synchronous code.

## How it works

- `async` marks a method as asynchronous, allowing the use of `await`.
- `await` suspends the method until the awaited task completes, without blocking the thread.

```csharp
public async Task ProcessDataAsync()
{
    Console.WriteLine("Start");
    await Task.Delay(1000); // non‑blocking wait
    Console.WriteLine("After delay");
}
```

## Real-world usage example

**Web API controllers**: Mark actions as `async` and `await` database calls, HTTP calls, or file I/O.

**Example**: [ASP.NET Core async actions](https://docs.microsoft.com/en-us/aspnet/core/performance/async-best-practices) improve scalability.

## Related sections

- [9.2.1 Marking method async](/en/chapter-9-asynchronous-programming-async-await/9-2-1-marking-method-async)
- [9.2.2 await unwraps the result](/en/chapter-9-asynchronous-programming-async-await/9-2-2-await-unwraps-the-result)
- [9.2.3 Compiler transformation into state machine](/en/chapter-9-asynchronous-programming-async-await/9-2-3-compiler-transformation-into-state-machine)
