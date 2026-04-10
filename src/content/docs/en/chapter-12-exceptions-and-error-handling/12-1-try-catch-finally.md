---
title: try catch finally
sidebar:
  order: 500
  label: 12.1 try catch finally
---

**Context**: The `try-catch-finally` block is the fundamental mechanism for handling exceptions in C#. Code that may throw an exception is placed in the `try` block. If an exception occurs, control transfers to the appropriate `catch` block. The `finally` block executes regardless of whether an exception was thrown, and is typically used for cleanup (closing files, releasing resources). The `finally` block is optional but recommended for deterministic cleanup.

## Usage Example

```csharp
using System;
using System.IO;

class Program
{
    static void Main()
    {
        StreamReader reader = null;
        try
        {
            reader = new StreamReader("nonexistent.txt");
            string content = reader.ReadToEnd();
            Console.WriteLine(content);
        }
        catch (FileNotFoundException ex)
        {
            Console.WriteLine($"File not found: {ex.Message}");
        }
        finally
        {
            reader?.Dispose();
            Console.WriteLine("Cleanup completed.");
        }
    }
}
```

## Output console

```shell
dotnet run
File not found: Could not find file 'nonexistent.txt'.
Cleanup completed.
```

## Important notes

- The `finally` block always runs, even if no exception occurs or if a `return` is inside `try`.
- You can have `try-finally` without `catch`.
- Never throw exceptions from `finally` blocks (they can hide original exceptions).

## Real-world usage example

**Database connection handling** – Using `try-catch-finally` to ensure `SqlConnection` is closed even if a query fails.  
See [.NET docs on try-catch-finally](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/statements/exception-handling-statements).

## Related sections

- [12.1.1 Catching specific exception types](/en/chapter-12-exceptions-and-error-handling/12-1-1-catching-specific-exception-types)
- [12.1.2 Multiple catch blocks](/en/chapter-12-exceptions-and-error-handling/12-1-2-multiple-catch-blocks)
- [12.1.3 finally for cleanup](/en/chapter-12-exceptions-and-error-handling/12-1-3-finally-for-cleanup)
