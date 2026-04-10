---
title: Multiple catch blocks
sidebar:
  order: 502
  label: 12.1.2 Multiple catch blocks
---

**Context**: A `try` block can be followed by multiple `catch` blocks, each handling a different exception type. This allows fine-grained error recovery. The runtime executes the first `catch` block whose exception type matches the thrown exception. More specific types must appear before more general ones.

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
            string input = Console.ReadLine();
            int number = int.Parse(input);
            Console.WriteLine(10 / number);
        }
        catch (DivideByZeroException ex)
        {
            Console.WriteLine("Cannot divide by zero.");
        }
        catch (FormatException ex)
        {
            Console.WriteLine("Invalid number format.");
        }
        catch (IOException ex)
        {
            Console.WriteLine("I/O error.");
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Other error: {ex.Message}");
        }
    }
}
```

## Output console (example input "0")

```shell
dotnet run
0
Cannot divide by zero.
```

## Important notes

- Only one `catch` block executes.
- The generic `catch (Exception)` must be last.
- You can also have a `catch` without arguments (not recommended).

## Real-world usage example

**File processing** – Separate `FileNotFoundException`, `UnauthorizedAccessException`, `IOException`, and a final generic catch for logging.  
See [.NET docs on multiple catch blocks](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/try-catch).

## Related sections

- [12.1.1 Catching specific exception types](/en/chapter-12-exceptions-and-error-handling/12-1-1-catching-specific-exception-types)
- [12.1.3 finally for cleanup](/en/chapter-12-exceptions-and-error-handling/12-1-3-finally-for-cleanup)
