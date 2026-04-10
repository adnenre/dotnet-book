---
title: TaskScheduler UnobservedTaskException
sidebar:
  order: 515
  label: 12.5.3 TaskScheduler UnobservedTaskException
---

**Context**: When a `Task` throws an exception that is never observed (i.e., not awaited, no continuation, no `Task.Exception` accessed), the exception is considered unobserved. The `TaskScheduler.UnobservedTaskException` event is raised when the garbage collector collects the task. This event allows you to log such exceptions. Starting from .NET 4.5, unobserved exceptions do not crash the process by default, but they should still be handled.

## Usage Example

```csharp
using System;
using System.Threading.Tasks;

class Program
{
    static void Main()
    {
        TaskScheduler.UnobservedTaskException += (sender, e) =>
        {
            Console.WriteLine($"Unobserved task exception: {e.Exception.Message}");
            e.SetObserved(); // Mark as observed to prevent any further action
        };

        // Create a task that throws an exception and never observe it
        Task.Run(() => throw new InvalidOperationException("Task error"));

        // Give the task time to run and be collected
        Thread.Sleep(1000);
        GC.Collect();
        GC.WaitForPendingFinalizers();

        Console.WriteLine("Application continues...");
    }
}
```

## Output console

```shell
dotnet run
Unobserved task exception: Task error
Application continues...
```

## Important notes

- Unobserved exceptions do not crash the app by default (since .NET 4.5).
- Always observe your tasks (await, `ContinueWith`, or check `Task.Exception`).
- The event is called on the finalizer thread; avoid long operations.

## Real-world usage example

**Fire‑and‑forget tasks** – In a background job, you may log unobserved exceptions to a monitoring system.  
See [.NET docs on UnobservedTaskException](https://docs.microsoft.com/en-us/dotnet/api/system.threading.tasks.taskscheduler.unobservedtaskexception).

## Related sections

- [12.5.2 AppDomain UnhandledException](/en/chapter-12-exceptions-and-error-handling/12-5-2-appdomain-unhandledexception)
- [12.4 ExceptionDispatchInfo](/en/chapter-12-exceptions-and-error-handling/12-4-exceptiondispatchinfo)
