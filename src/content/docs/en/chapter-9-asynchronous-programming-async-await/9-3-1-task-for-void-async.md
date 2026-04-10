---
title: Task for void async
sidebar:
  order: 215
  label: 9.3.1 Task for void async
---

**Context**: For async methods that do not return a value, return `Task`. This allows the caller to `await` the operation.

```csharp
using System.IO;
using System.Threading.Tasks;

public class DataService
{
    public async Task SaveDataAsync(string data)
    {
        await File.WriteAllTextAsync("file.txt", data);
    }
}

// Caller can await
// await new DataService().SaveDataAsync("content");
```

## Why not `void`?

Returning `Task` allows the caller to:

- Await completion.
- Handle exceptions (exceptions are captured in the task).
- Compose with other async operations.

## Real-world usage example

**Event handlers in UI**: Use `async void` for events, but for all other async methods without return value, use `Task`.

**Example**: [Async guidelines](https://docs.microsoft.com/en-us/dotnet/standard/async-guidelines) recommend `Task` over `void`.

## Related sections

- [9.3 Return types of async methods](/en/chapter-9-asynchronous-programming-async-await/9-3-return-types-of-async-methods)
- [9.3.3 void only for event handlers avoid](/en/chapter-9-asynchronous-programming-async-await/9-3-3-void-only-for-event-handlers-avoid)
