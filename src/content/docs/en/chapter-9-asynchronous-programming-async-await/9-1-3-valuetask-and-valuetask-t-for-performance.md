---
title: ValueTask and ValueTask<T> for performance
sidebar:
  order: 209
  label: 9.1.3 ValueTask and ValueTask<T> for performance
---

**Context**: `ValueTask` and `ValueTask<T>` are structs that can reduce heap allocations when the result is often available synchronously.

```csharp
using System.Collections.Generic;
using System.Threading.Tasks;

public class CacheExample
{
    private Dictionary<string, int> cache = new Dictionary<string, int>();

    public async ValueTask<int> GetCachedValueAsync(string key)
    {
        if (cache.TryGetValue(key, out int value))
            return value; // synchronous path, no allocation

        int result = await FetchFromDatabaseAsync(key);
        cache[key] = result;
        return result;
    }

    private async Task<int> FetchFromDatabaseAsync(string key)
    {
        await Task.Delay(100); // simulate database call
        return 42;
    }
}
```

## When to use ValueTask

- When the method often completes synchronously (cached results).
- In high‑performance libraries to avoid unnecessary allocations.
- For hot paths where you measure a performance gain.

## Real-world usage example

**Memory cache**: A method that reads from an in‑memory cache (fast, synchronous) and falls back to an async database call.

**Example**: [Microsoft.Extensions.Caching.Memory](https://docs.microsoft.com/en-us/dotnet/api/microsoft.extensions.caching.memory) uses `ValueTask` for cache operations.

## Related sections

- [9.1 Task based Asynchronous Pattern TAP](/en/chapter-9-asynchronous-programming-async-await/9-1-task-based-asynchronous-pattern-tap)
- [9.2 async and await](/en/chapter-9-asynchronous-programming-async-await/9-2-async-and-await)
