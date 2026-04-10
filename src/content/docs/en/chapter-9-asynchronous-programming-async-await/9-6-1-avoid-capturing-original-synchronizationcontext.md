---
title: Avoid capturing original SynchronizationContext
sidebar:
  order: 226
  label: 9.6.1 Avoid capturing original SynchronizationContext
---

**Context**: By default, `await` captures the current `SynchronizationContext` and resumes on it. `ConfigureAwait(false)` avoids this, which can prevent deadlocks and improve performance.

```csharp
using System.Threading.Tasks;

public class LibraryCode
{
    public async Task<string> GetDataAsync()
    {
        // In library code, we don't need to return to original context
        string result = await FetchAsync().ConfigureAwait(false);
        return result;
    }

    private async Task<string> FetchAsync()
    {
        await Task.Delay(100);
        return "data";
    }
}
```

## When to use

- In library code that does not need to return to the original context.
- To avoid deadlocks when `.Result` or `.Wait()` is used (though those should be avoided).

## Real-world usage example

**ASP.NET Core**: In ASP.NET Core, there is no `SynchronizationContext`, so `ConfigureAwait(false)` is not necessary but does no harm.

**Example**: [ConfigureAwait FAQ](https://devblogs.microsoft.com/dotnet/configureawait-faq/)

## Related sections

- [9.6 ConfigureAwait false](/en/chapter-9-asynchronous-programming-async-await/9-6-configureawait-false)
- [9.6.2 Use in library code](/en/chapter-9-asynchronous-programming-async-await/9-6-2-use-in-library-code)
