---
title: Task (no result)
sidebar:
  order: 207
  label: 9.1.1 Task (no result)
---

**Context**: `Task` represents an asynchronous operation that does not return a value. It is the equivalent of `void` for async methods.

```csharp
using System;
using System.IO;
using System.Net.Http;
using System.Threading.Tasks;

public class Example
{
    public async Task DownloadFileAsync(string url)
    {
        using HttpClient client = new HttpClient();
        string content = await client.GetStringAsync(url);
        await File.WriteAllTextAsync("file.txt", content);
    }
}

// Calling the method
// await new Example().DownloadFileAsync("https://example.com/data");
```

## Important notes

- The method still returns a `Task` object that can be awaited.
- Exceptions thrown inside the method are captured in the returned `Task`.

## Real-world usage example

**Logging asynchronously**: Writing log entries to a file or database without blocking the main flow.

**Example**: In [ASP.NET Core middleware](https://docs.microsoft.com/en-us/aspnet/core/fundamentals/middleware), you often `await next()` which returns a `Task`.

## Related sections

- [9.1 Task based Asynchronous Pattern TAP](/en/chapter-9-asynchronous-programming-async-await/9-1-task-based-asynchronous-pattern-tap)
- [9.1.2 Task<T> (result)](/en/chapter-9-asynchronous-programming-async-await/9-1-2-task-t-result)
