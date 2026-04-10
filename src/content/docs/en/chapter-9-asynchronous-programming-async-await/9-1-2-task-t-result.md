---
title: Task<T> (result)
sidebar:
  order: 208
  label: 9.1.2 Task<T> (result)
---

**Context**: `Task<TResult>` represents an asynchronous operation that returns a value of type `TResult`.

```csharp
using System;
using System.Net.Http;
using System.Threading.Tasks;

public class Example
{
    public async Task<string> FetchDataAsync(string url)
    {
        using HttpClient client = new HttpClient();
        return await client.GetStringAsync(url);
    }
}

// Usage
// string data = await new Example().FetchDataAsync("https://api.example.com/data");
// Console.WriteLine(data);
```

## Accessing the result

- Use `await` to get the result asynchronously.
- Using `.Result` or `.Wait()` blocks the thread and can cause deadlocks.

## Real-world usage example

**Database queries with EF Core**: `FirstOrDefaultAsync()` returns `Task<T>`, and `ToListAsync()` returns `Task<List<T>>`.

**Example**: [EF Core async methods](https://docs.microsoft.com/en-us/ef/core/querying/async) use `Task<T>` for all database operations.

## Related sections

- [9.1 Task based Asynchronous Pattern TAP](/en/chapter-9-asynchronous-programming-async-await/9-1-task-based-asynchronous-pattern-tap)
- [9.1.1 Task (no result)](/en/chapter-9-asynchronous-programming-async-await/9-1-1-task-no-result)
