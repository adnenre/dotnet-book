---
title: catch with when condition
sidebar:
  order: 505
  label: 12.2.1 catch with when condition
---

**Context**: The `when` keyword in a `catch` clause introduces an exception filter. The `catch` block is entered only if the filter condition evaluates to `true`. This is more powerful than catching and rethrowing because the stack is not unwound if the condition is false, preserving debugging information.

## Usage Example

```csharp
using System;
using System.Net.Http;

class Program
{
    static async Task Main()
    {
        try
        {
            using var client = new HttpClient();
            var response = await client.GetAsync("https://httpstat.us/404");
            response.EnsureSuccessStatusCode();
        }
        catch (HttpRequestException ex) when (ex.Message.Contains("404"))
        {
            Console.WriteLine("Resource not found (404) – handled gracefully.");
        }
        catch (HttpRequestException ex)
        {
            Console.WriteLine($"Other HTTP error: {ex.Message}");
        }
    }
}
```

## Output console

```shell
dotnet run
Resource not found (404) – handled gracefully.
```

## Important notes

- The condition is evaluated in the context of the `catch` block.
- You can use methods in the condition, but they should not throw exceptions.
- Filters are evaluated before any outer `catch` blocks.

## Real-world usage example

**Database retry logic** – Catch `SqlException` only when the error number indicates a transient failure (e.g., timeout or deadlock).  
See [.NET docs on when filter](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/try-catch#when).

## Related sections

- [12.2 Exception filters](/en/chapter-12-exceptions-and-error-handling/12-2-exception-filters)
- [12.1.1 Catching specific exception types](/en/chapter-12-exceptions-and-error-handling/12-1-1-catching-specific-exception-types)
