---
title: Task based Asynchronous Pattern TAP
sidebar:
  order: 206
  label: 9.1 Task based Asynchronous Pattern TAP
---

**Context**: The Task‑based Asynchronous Pattern (TAP) is the recommended asynchronous pattern in .NET. It uses `Task` and `Task<T>` to represent ongoing operations.

## Introduction to async/await

Asynchronous programming allows your application to continue executing other work while waiting for long‑running operations (I/O, network calls, database queries). In C#, the `async` and `await` keywords make writing asynchronous code almost as simple as synchronous code, without blocking threads.

**Why use async/await?**

- **Responsiveness**: UI applications remain responsive during long operations.
- **Scalability**: Server applications handle more requests by freeing threads during I/O.
- **Simplicity**: Write asynchronous code that looks like synchronous code.

**How to start**: Add `async` to a method, then use `await` on tasks. The method must return `Task`, `Task<T>`, or `void` (only for event handlers).

```csharp
// Synchronous version (blocks thread)
string data = DownloadString(url);

// Asynchronous version (does not block)
string data = await DownloadStringAsync(url);
```

## TAP pattern

A method following TAP returns a `Task` or `Task<TResult>` and is typically named with an `Async` suffix.

```csharp
public Task<string> DownloadStringAsync(string url);
public Task<int> GetUserCountAsync();
```

## Real-world usage example

**ASP.NET Core controllers**: All controller actions can be async, improving scalability by not blocking threads during database calls.

**Official documentation**:

- [Asynchronous programming with async and await](https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/concepts/async/)
- [Task‑based Asynchronous Pattern (TAP)](https://docs.microsoft.com/en-us/dotnet/standard/asynchronous-programming-patterns/task-based-asynchronous-pattern-tap)

## Related sections

- [9.1.1 Task (no result)](/en/chapter-9-asynchronous-programming-async-await/9-1-1-task-no-result)
- [9.1.2 Task<T> (result)](/en/chapter-9-asynchronous-programming-async-await/9-1-2-task-t-result)
- [9.1.3 ValueTask and ValueTask<T> for performance](/en/chapter-9-asynchronous-programming-async-await/9-1-3-valuetask-valuetask-t-for-performance)
