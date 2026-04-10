---
title: AppDomain UnhandledException
sidebar:
  order: 514
  label: 12.5.2 AppDomain UnhandledException
---

**Context**: The `AppDomain.CurrentDomain.UnhandledException` event is raised when an exception is not caught in any `try-catch` block in the default AppDomain. This event is typically used for logging and cleanup before the application terminates. After this event, the application will shut down (for most exceptions). You cannot prevent termination from this event.

## Usage Example

```csharp
using System;

class Program
{
    static void Main()
    {
        AppDomain.CurrentDomain.UnhandledException += (sender, e) =>
        {
            Exception ex = (Exception)e.ExceptionObject;
            Console.WriteLine($"FATAL: {ex.Message}");
            Console.WriteLine($"Stack trace: {ex.StackTrace}");
            // Log to file or event log
            Environment.Exit(1);
        };

        // Simulate an unhandled exception
        throw new NullReferenceException("Something is null.");
    }
}
```

## Output console

```shell
dotnet run
FATAL: Something is null.
Stack trace:    at Program.Main(String[] args)
```

## Important notes

- This event is not fired for exceptions in threads that have their own `AppDomain`.
- For WinForms/WPF, also subscribe to `Application.ThreadException`.
- The event is a last resort; always try to handle exceptions locally first.

## Real-world usage example

**Windows Service** – Log unhandled exceptions to Windows Event Log and attempt a graceful shutdown.  
See [.NET docs on AppDomain.UnhandledException](https://docs.microsoft.com/en-us/dotnet/api/system.appdomain.unhandledexception).

## Related sections

- [12.5.1 ASP.NET Core middleware](/en/chapter-12-exceptions-and-error-handling/12-5-1-aspnet-core-middleware)
- [12.5.3 TaskScheduler UnobservedTaskException](/en/chapter-12-exceptions-and-error-handling/12-5-3-taskscheduler-unobservedtaskexception)
