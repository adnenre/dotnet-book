---
title: Global exception handling
sidebar:
  order: 512
  label: 12.5 Global exception handling
---

**Context**: Global exception handling catches exceptions that are not handled by application code. Different environments have different mechanisms: ASP.NET Core uses middleware, desktop applications use `AppDomain.UnhandledException`, and tasks use `TaskScheduler.UnobservedTaskException`. Global handlers are typically used for logging, displaying friendly error messages, and performing cleanup before shutdown.

## Usage Example (Console App)

```csharp
using System;

class Program
{
    static void Main()
    {
        AppDomain.CurrentDomain.UnhandledException += (sender, e) =>
        {
            Console.WriteLine($"Unhandled exception: {e.ExceptionObject}");
            // Log and possibly shutdown gracefully
        };

        throw new Exception("Something went wrong!");
    }
}
```

## Output console

```shell
dotnet run
Unhandled exception: System.Exception: Something went wrong!
   at Program.Main(String[] args)
```

## Important notes

- Global handlers cannot prevent application termination (in most cases).
- They are a last resort; prefer handling exceptions locally.
- In ASP.NET Core, middleware is the recommended approach.

## Real-world usage example

**Desktop application** – Log any unhandled exception to a file and show a user‑friendly dialog.  
See [.NET docs on global exception handling](https://docs.microsoft.com/en-us/dotnet/api/system.appdomain.unhandledexception).

## Related sections

- [12.5.1 ASP.NET Core middleware](/en/chapter-12-exceptions-and-error-handling/12-5-1-aspnet-core-middleware)
- [12.5.2 AppDomain UnhandledException](/en/chapter-12-exceptions-and-error-handling/12-5-2-appdomain-unhandledexception)
- [12.5.3 TaskScheduler UnobservedTaskException](/en/chapter-12-exceptions-and-error-handling/12-5-3-taskscheduler-unobservedtaskexception)
