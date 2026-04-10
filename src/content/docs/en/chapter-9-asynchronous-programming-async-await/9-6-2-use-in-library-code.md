---
title: Use in library code
sidebar:
  order: 227
  label: 9.6.2 Use in library code
---

**Context**: Library code should use `ConfigureAwait(false)` for all `await` statements unless it explicitly needs to resume on the original context.

```csharp
using System.Net.Http;
using System.Threading.Tasks;

public class ApiClient
{
    private readonly HttpClient _httpClient = new HttpClient();

    public async Task<string> ReadDataAsync(string url)
    {
        // ConfigureAwait(false) for all awaits in library code
        string content = await _httpClient.GetStringAsync(url).ConfigureAwait(false);
        return await ProcessAsync(content).ConfigureAwait(false);
    }

    private async Task<string> ProcessAsync(string data)
    {
        await Task.Delay(10).ConfigureAwait(false);
        return data.ToUpper();
    }
}
```

## Benefits in libraries

- Prevents deadlocks when library is used from UI applications.
- Improves performance by reducing unnecessary context switches.

## Real-world usage example

**NuGet packages**: Well‑written libraries like `Newtonsoft.Json` use `ConfigureAwait(false)` internally.

**Example**: [.NET Runtime library guidelines](https://docs.microsoft.com/en-us/dotnet/standard/async-guidelines#configureawait-false)

## Related sections

- [9.6 ConfigureAwait false](/en/chapter-9-asynchronous-programming-async-await/9-6-configureawait-false)
- [9.6.1 Avoid capturing original SynchronizationContext](/en/chapter-9-asynchronous-programming-async-await/9-6-1-avoid-capturing-original-synchronizationcontext)
