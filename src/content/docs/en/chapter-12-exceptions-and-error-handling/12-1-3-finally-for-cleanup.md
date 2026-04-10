---
title: finally for cleanup
sidebar:
  order: 503
  label: 12.1.3 finally for cleanup
---

**Context**: The `finally` block is used to execute code regardless of whether an exception was thrown. It is ideal for releasing resources (file handles, database connections, locks). Unlike `catch`, `finally` does not handle the exception; it runs after the `try` and any matching `catch`, and then the exception continues to propagate.

## Usage Example

```csharp
using System;
using System.IO;

class Program
{
    static void Main()
    {
        FileStream fs = null;
        try
        {
            fs = File.Open("test.txt", FileMode.OpenOrCreate);
            // Simulate an exception
            throw new InvalidOperationException("Something went wrong");
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Error: {ex.Message}");
        }
        finally
        {
            if (fs != null)
            {
                fs.Dispose();
                Console.WriteLine("FileStream disposed.");
            }
        }
    }
}
```

## Output console

```shell
dotnet run
Error: Something went wrong
FileStream disposed.
```

## Important notes

- `finally` runs even if there is a `return` in `try` or `catch`.
- Do not throw exceptions in `finally`; they will replace the original exception.
- The `using` statement provides a cleaner syntax for disposal.

## Real-world usage example

**Lock release** – Using `Monitor.Enter` and `Monitor.Exit` in `finally` ensures the lock is released even if the protected code throws.  
See [.NET docs on finally](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/try-finally).

## Related sections

- [12.1 try catch finally](/en/chapter-12-exceptions-and-error-handling/12-1-try-catch-finally)
- [12.1.2 Multiple catch blocks](/en/chapter-12-exceptions-and-error-handling/12-1-2-multiple-catch-blocks)
