---
title: CallerFilePath and CallerLineNumber
sidebar:
  order: 713
  label: 14.5.3 CallerFilePath and CallerLineNumber
---

**Context**: `[CallerFilePath]` and `[CallerLineNumber]` provide the source file path and line number of the caller. They are invaluable for logging, error reporting, and diagnostic tools because they pinpoint exactly where a call originated without manual tracking.

## Usage Example

```csharp
using System;
using System.Runtime.CompilerServices;

public static class Trace
{
    public static void Write(string message,
        [CallerFilePath] string file = "",
        [CallerLineNumber] int line = 0)
    {
        Console.WriteLine($"{System.IO.Path.GetFileName(file)}:{line} - {message}");
    }
}

class Program
{
    static void Main()
    {
        Trace.Write("Hello from Main");
    }
}
```

## Output console

```shell
dotnet run
Program.cs:15 - Hello from Main
```

## Important notes

- `CallerFilePath` gives the full physical path; you may want to use `Path.GetFileName` to shorten it.
- `CallerLineNumber` is an integer.
- These attributes are evaluated at compile time.

## Real-world usage example

**Custom assertion library** – When an assertion fails, log the file and line number where the failure occurred for quick navigation.  
See [.NET docs on CallerFilePath](https://docs.microsoft.com/en-us/dotnet/api/system.runtime.compilerservices.callerfilepathattribute).

## Related sections

- [14.5 Caller info attributes](/en/chapter-14-modern-csharp-features-for-backend/14-5-caller-info-attributes)
- [14.5.1 CallerMemberName](/en/chapter-14-modern-csharp-features-for-backend/14-5-1-callermembername)
