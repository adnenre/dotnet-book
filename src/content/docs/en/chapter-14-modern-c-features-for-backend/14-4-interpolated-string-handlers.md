---
title: Interpolated string handlers
sidebar:
  order: 707
  label: 14.4 Interpolated string handlers
---

**Context**: Interpolated string handlers (C# 10) allow customizing how interpolated strings are processed. Instead of always allocating a string, you can conditionally build the result, skip expensive formatting, or log directly to a sink. This is a performance optimization, especially for logging frameworks that may not need to format the message if the log level is disabled.

## Usage Example

```csharp
using System;
using System.Runtime.CompilerServices;

// Simplified custom handler (conceptual)
[InterpolatedStringHandler]
public ref struct LogInterpolatedStringHandler
{
    private string _result;
    public LogInterpolatedStringHandler(int literalLength, int formattedCount, bool enabled, out bool shouldAppend)
    {
        shouldAppend = enabled;
        if (enabled) _result = string.Empty;
    }
    public void AppendLiteral(string s) => _result += s;
    public void AppendFormatted<T>(T t) => _result += t?.ToString();
    public string ToString() => _result;
}

static class Logger
{
    public static void Debug(LogInterpolatedStringHandler handler)
    {
        if (IsDebugEnabled) Console.WriteLine(handler.ToString());
    }
    public static bool IsDebugEnabled { get; set; } = true;
}

class Program
{
    static void Main()
    {
        Logger.Debug($"User {42} logged in"); // Only formatted if IsDebugEnabled true
    }
}
```

## Output console

```shell
dotnet run
User 42 logged in
```

## Important notes

- The handler is a `ref struct` for performance (no heap allocation).
- The `[InterpolatedStringHandler]` attribute tells the compiler to use this type.
- The constructor receives `literalLength`, `formattedCount`, and optional custom parameters.

## Real-world usage example

**Microsoft.Extensions.Logging** – Uses interpolated string handlers to avoid formatting log messages when the log level is not enabled.  
See [.NET docs on interpolated string handlers](https://docs.microsoft.com/en-us/dotnet/csharp/whats-new/tutorials/interpolated-string-handler).

## Related sections

- [14.4.1 Performance optimisation for logging](/en/chapter-14-modern-csharp-features-for-backend/14-4-1-performance-optimisation-for-logging)
- [14.4.2 InterpolatedStringHandler struct](/en/chapter-14-modern-csharp-features-for-backend/14-4-2-interpolatedstringhandler-struct)
