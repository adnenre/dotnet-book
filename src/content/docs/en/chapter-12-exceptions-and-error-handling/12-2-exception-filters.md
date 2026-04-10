---
title: Exception filters
sidebar:
  order: 504
  label: 12.2 Exception filters
---

**Context**: Exception filters allow you to specify a condition using the `when` keyword in a `catch` block. The `catch` block executes only if the condition evaluates to `true`. This is useful for catching an exception only in specific circumstances without rethrowing or modifying the exception. Exception filters do not unwind the stack, so the original stack trace remains intact.

## Usage Example

```csharp
using System;

class Program
{
    static void Main()
    {
        try
        {
            int x = 0;
            int y = 10 / x;
        }
        catch (DivideByZeroException ex) when (DateTime.Now.DayOfWeek == DayOfWeek.Monday)
        {
            Console.WriteLine("Caught on Monday only.");
        }
        catch (DivideByZeroException ex)
        {
            Console.WriteLine("Caught on any other day.");
        }
    }
}
```

## Output console (depending on day)

```shell
dotnet run
Caught on any other day.
```

## Important notes

- The condition can use the exception variable or any other context.
- Filters do not capture the exception unless the condition is true.
- Useful for logging only certain error codes.

## Real-world usage example

**HTTP client** – Catch `HttpRequestException` only when the status code is 404 (Not Found), otherwise let it propagate.  
See [.NET docs on exception filters](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/try-catch#exception-filters).

## Related sections

- [12.2.1 catch with when condition](/en/chapter-12-exceptions-and-error-handling/12-2-1-catch-with-when-condition)
- [12.1.1 Catching specific exception types](/en/chapter-12-exceptions-and-error-handling/12-1-1-catching-specific-exception-types)
