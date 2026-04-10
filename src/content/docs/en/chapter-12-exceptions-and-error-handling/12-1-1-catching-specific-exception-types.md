---
title: Catching specific exception types
sidebar:
  order: 501
  label: 12.1.1 Catching specific exception types
---

**Context**: Catching specific exception types allows you to respond differently to different error conditions. The `catch` block can specify an exception type (e.g., `FileNotFoundException`, `DivideByZeroException`). This is better than catching a generic `Exception` because it preserves the original exception details and allows tailored error handling.

## Usage Example

```csharp
using System;
using System.IO;

class Program
{
    static void Main()
    {
        try
        {
            int[] numbers = { 1, 2, 3 };
            Console.WriteLine(numbers[10]); // IndexOutOfRangeException
        }
        catch (IndexOutOfRangeException ex)
        {
            Console.WriteLine($"Index error: {ex.Message}");
        }
        catch (FileNotFoundException ex)
        {
            Console.WriteLine($"File missing: {ex.Message}");
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Unexpected error: {ex.Message}");
        }
    }
}
```

## Output console

```shell
dotnet run
Index error: Index was outside the bounds of the array.
```

## Important notes

- Order matters: catch more specific types first, then more general.
- The generic `Exception` catch block should be last.
- Avoid catching `Exception` unless you truly handle or log it.

## Real-world usage example

**Parsing user input** – Catch `FormatException` for invalid number formats, `OverflowException` for numbers out of range, and `Exception` for unexpected issues.  
See [.NET docs on exception handling](https://docs.microsoft.com/en-us/dotnet/standard/exceptions/best-practices-for-exceptions).

## Related sections

- [12.1 try catch finally](/en/chapter-12-exceptions-and-error-handling/12-1-try-catch-finally)
- [12.1.2 Multiple catch blocks](/en/chapter-12-exceptions-and-error-handling/12-1-2-multiple-catch-blocks)
