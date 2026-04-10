---
title: Performance optimisation for logging
sidebar:
  order: 708
  label: 14.4.1 Performance optimisation for logging
---

**Context**: Logging frameworks often check if a log level is enabled before constructing the log message. Without interpolated string handlers, you would write `if (logger.IsEnabled(LogLevel.Debug)) logger.LogDebug($"User {id} logged in");` which still evaluates the interpolated string (allocating it). With handlers, the formatting code is only executed if the log level is enabled, saving CPU and memory.

## Usage Example

```csharp
using Microsoft.Extensions.Logging;

public class MyService
{
    private readonly ILogger<MyService> _logger;
    public MyService(ILogger<MyService> logger) => _logger = logger;

    public void Process(int userId)
    {
        // The interpolated string is handled lazily; no formatting if Debug disabled.
        _logger.LogDebug($"Processing user {userId}");
    }
}
```

## Output console

```shell
// If Debug level is disabled, the string "Processing user 42" is never formatted.
```

## Important notes

- Modern .NET logging uses `LoggerMessage.Define` or source generators for even better performance.
- Handlers avoid allocations when logging is disabled.
- This optimization is automatic when using `ILogger.Log` with interpolated strings.

## Real-world usage example

**High‑throughput web APIs** – Use lazy logging with interpolated string handlers to reduce GC pressure.  
See [.NET docs on high-performance logging](https://docs.microsoft.com/en-us/dotnet/core/extensions/high-performance-logging).

## Related sections

- [14.4 Interpolated string handlers](/en/chapter-14-modern-csharp-features-for-backend/14-4-interpolated-string-handlers)
- [14.4.2 InterpolatedStringHandler struct](/en/chapter-14-modern-csharp-features-for-backend/14-4-2-interpolatedstringhandler-struct)
