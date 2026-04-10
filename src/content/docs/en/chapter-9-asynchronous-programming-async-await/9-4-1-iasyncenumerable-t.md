---
title: IAsyncEnumerable<T>
sidebar:
  order: 219
  label: 9.4.1 IAsyncEnumerable<T>
---

**Context**: `IAsyncEnumerable<T>` is the asynchronous version of `IEnumerable<T>`. It allows asynchronous iteration with `await foreach`.

```csharp
using System;
using System.Collections.Generic;
using System.IO;
using System.Threading.Tasks;

public class FileReader
{
    public async IAsyncEnumerable<string> ReadLinesAsync(string filePath)
    {
        using var reader = new StreamReader(filePath);
        string line;
        while ((line = await reader.ReadLineAsync()) != null)
        {
            yield return line;
        }
    }
}
```

## Benefits

- No need to buffer all data in memory.
- Each element can be produced asynchronously.
- Works with `await foreach`.

## Real-world usage example

**Database streaming**: In EF Core, `AsAsyncEnumerable()` returns `IAsyncEnumerable<T>` for streaming query results.

**Example**: [EF Core async streaming](https://docs.microsoft.com/en-us/ef/core/querying/async#async-streaming)

## Related sections

- [9.4 Asynchronous streams](/en/chapter-9-asynchronous-programming-async-await/9-4-asynchronous-streams)
- [9.4.2 await foreach](/en/chapter-9-asynchronous-programming-async-await/9-4-2-await-foreach)
