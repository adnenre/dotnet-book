---
title: Capturing and rethrowing with original stack trace
sidebar:
  order: 511
  label: 12.4.1 Capturing and rethrowing with original stack trace
---

**Context**: Using `ExceptionDispatchInfo`, you can capture an exception and later rethrow it without losing the original stack trace. This is different from `throw ex;` (which resets the stack) and `throw;` (which only works inside the original catch block). It is especially valuable when exceptions cross thread or async boundaries.

## Usage Example

```csharp
using System;
using System.Runtime.ExceptionServices;
using System.Threading.Tasks;

class Program
{
    static async Task Main()
    {
        ExceptionDispatchInfo info = null;

        try
        {
            await Task.Run(() => throw new ArgumentException("Bad argument"));
        }
        catch (ArgumentException ex)
        {
            info = ExceptionDispatchInfo.Capture(ex);
        }

        // Later (possibly in another method)
        try
        {
            info?.Throw();
        }
        catch (ArgumentException ex)
        {
            Console.WriteLine($"Rethrown: {ex.Message}");
            Console.WriteLine(ex.StackTrace);
        }
    }
}
```

## Output console

```shell
dotnet run
Rethrown: Bad argument
   at Program.<>c.<Main>b__0_0() in ...
   at System.Threading.Tasks.Task`1.InnerInvoke()
   ...
```

## Important notes

- The captured exception's original stack trace is preserved.
- You can store the `ExceptionDispatchInfo` in a field or collection.
- Avoid capturing the same exception multiple times (it works, but unnecessary).

## Real-world usage example

**AggregateException handling** – When flattening `AggregateException` in parallel loops, capture each inner exception and rethrow later.  
See [.NET docs on rethrowing exceptions](https://docs.microsoft.com/en-us/dotnet/standard/exceptions/best-practices-for-exceptions#re-throwing-exceptions).

## Related sections

- [12.4 ExceptionDispatchInfo](/en/chapter-12-exceptions-and-error-handling/12-4-exceptiondispatchinfo)
- [12.5.3 TaskScheduler UnobservedTaskException](/en/chapter-12-exceptions-and-error-handling/12-5-3-taskscheduler-unobservedtaskexception)
