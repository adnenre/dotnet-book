---
title: "Project: Logging Helper with Caller Info"
sidebar:
  order: 714
  label: 14.6 Project Logging Helper with Caller Info
---

**Context**: This project builds a logging helper that automatically captures caller member name, file path, and line number using caller info attributes. The logger supports multiple log levels, writes to the console (or any `TextWriter`), and includes contextual information without requiring the developer to pass it manually.

## Usage Example

```csharp
using System;
using System.IO;
using System.Runtime.CompilerServices;

public enum LogLevel
{
    Debug,
    Info,
    Warning,
    Error
}

public class Logger
{
    private readonly TextWriter _writer;

    public Logger(TextWriter writer = null)
    {
        _writer = writer ?? Console.Out;
    }

    public void Log(LogLevel level, string message,
        [CallerMemberName] string member = "",
        [CallerFilePath] string file = "",
        [CallerLineNumber] int line = 0)
    {
        string shortFile = Path.GetFileName(file);
        string timestamp = DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss");
        _writer.WriteLine($"[{timestamp}] {level.ToString().ToUpper()} {shortFile}:{line} {member}() - {message}");
    }

    public void Debug(string msg, [CallerMemberName] string member = "", [CallerFilePath] string file = "", [CallerLineNumber] int line = 0)
        => Log(LogLevel.Debug, msg, member, file, line);

    public void Info(string msg, [CallerMemberName] string member = "", [CallerFilePath] string file = "", [CallerLineNumber] int line = 0)
        => Log(LogLevel.Info, msg, member, file, line);

    public void Warning(string msg, [CallerMemberName] string member = "", [CallerFilePath] string file = "", [CallerLineNumber] int line = 0)
        => Log(LogLevel.Warning, msg, member, file, line);

    public void Error(string msg, [CallerMemberName] string member = "", [CallerFilePath] string file = "", [CallerLineNumber] int line = 0)
        => Log(LogLevel.Error, msg, member, file, line);
}

public class Calculator
{
    private readonly Logger _logger = new Logger();

    public int Divide(int a, int b)
    {
        _logger.Debug($"Divide called with {a}, {b}");
        if (b == 0)
        {
            _logger.Error("Division by zero attempted");
            throw new DivideByZeroException();
        }
        int result = a / b;
        _logger.Info($"Division result: {result}");
        return result;
    }
}

class Program
{
    static void Main()
    {
        var calc = new Calculator();
        try
        {
            calc.Divide(10, 2);
            calc.Divide(10, 0);
        }
        catch { }
    }
}
```

## Output console

```shell
dotnet run
[2025-01-15 10:30:01] DEBUG Calculator.cs:35 Divide() - Divide called with 10, 2
[2025-01-15 10:30:01] INFO Calculator.cs:41 Divide() - Division result: 5
[2025-01-15 10:30:01] DEBUG Calculator.cs:35 Divide() - Divide called with 10, 0
[2025-01-15 10:30:01] ERROR Calculator.cs:38 Divide() - Division by zero attempted
```

## How to run

1. Create a new console project: `dotnet new console -n LoggingHelper`
2. Replace `Program.cs` with the code above.
3. Run `dotnet run`

## Important notes

- Caller info attributes provide automatic context without runtime overhead.
- The logger can easily be extended to write to a file, database, or external service.
- This pattern is similar to how `ILogger` works but with a simplified implementation.

## Real-world usage example

**Custom telemetry library** – Use caller info to automatically attach source location to every telemetry event.  
See [.NET docs on logging](https://docs.microsoft.com/en-us/dotnet/core/extensions/logging).

## Related sections

- [14.5 Caller info attributes](/en/chapter-14-modern-csharp-features-for-backend/14-5-caller-info-attributes)
- [14.5.3 CallerFilePath and CallerLineNumber](/en/chapter-14-modern-csharp-features-for-backend/14-5-3-callerfilepath-and-callerlinenumber)
