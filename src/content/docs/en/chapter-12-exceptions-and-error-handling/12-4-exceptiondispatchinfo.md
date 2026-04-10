---
title: ExceptionDispatchInfo
sidebar:
  order: 510
  label: 12.4 ExceptionDispatchInfo
---

**Context**: `ExceptionDispatchInfo` allows you to capture an exception at one point and rethrow it at another point while preserving the original stack trace. This is useful in scenarios where you need to store an exception (e.g., in a `Task`) and later rethrow it without losing the original call stack. Without this, rethrowing using `throw ex;` resets the stack trace.

## Usage Example

```csharp
using System;
using System.Runtime.ExceptionServices;

class Program
{
    static void Main()
    {
        ExceptionDispatchInfo capturedException = null;

        try
        {
            throw new InvalidOperationException("Original error");
        }
        catch (Exception ex)
        {
            capturedException = ExceptionDispatchInfo.Capture(ex);
        }

        // Later...
        try
        {
            capturedException?.Throw(); // Preserves original stack trace
        }
        catch (InvalidOperationException ex)
        {
            Console.WriteLine(ex.StackTrace);
        }
    }
}
```

## Output console

```shell
dotnet run
   at Program.<Main>g__CaptureError|0_0() in ...
   at Program.Main(String[] args)
```

## Important notes

- `Capture` stores the exception and its stack trace.
- `Throw()` rethrows preserving the original stack trace.
- Useful in async/await and parallel programming.

## Real-world usage example

**Task-based asynchrony** – When implementing a custom `Task`-like type, use `ExceptionDispatchInfo` to propagate exceptions correctly.  
See [.NET docs on ExceptionDispatchInfo](https://docs.microsoft.com/en-us/dotnet/api/system.runtime.exceptionservices.exceptiondispatchinfo).

## Related sections

- [12.4.1 Capturing and rethrowing with original stack trace](/en/chapter-12-exceptions-and-error-handling/12-4-1-capturing-and-rethrowing-with-original-stack-trace)
- [12.5 Global exception handling](/en/chapter-12-exceptions-and-error-handling/12-5-global-exception-handling)
