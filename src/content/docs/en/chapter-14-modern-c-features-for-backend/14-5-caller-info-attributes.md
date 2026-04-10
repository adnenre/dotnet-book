---
title: Caller info attributes
sidebar:
  order: 710
  label: 14.5 Caller info attributes
---

**Context**: Caller info attributes (available since C# 5) allow a method to obtain information about the caller – such as the member name, file path, line number, or expression – without passing them explicitly. These attributes are applied to optional parameters with default values. They are extremely useful for logging, debugging, and validation libraries.

## Usage Example

```csharp
using System;
using System.Runtime.CompilerServices;

public static class Logger
{
    public static void Log(string message,
        [CallerMemberName] string member = "",
        [CallerFilePath] string file = "",
        [CallerLineNumber] int line = 0)
    {
        Console.WriteLine($"{file}({line}): {member} -> {message}");
    }
}

class Program
{
    static void Main()
    {
        Logger.Log("Started");
    }
}
```

## Output console

```shell
dotnet run
C:\Projects\Program.cs(12): Main -> Started
```

## Important notes

- The compiler fills in the values automatically at the call site.
- The parameters must have default values (e.g., `string member = ""`).
- `CallerArgumentExpression` (C# 10) captures the source expression as a string.

## Real-world usage example

**Argument validation** – Use `CallerArgumentExpression` to show the parameter name in an `ArgumentException` without passing it manually.  
See [.NET docs on caller info attributes](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/attributes/caller-information).

## Related sections

- [14.5.1 CallerMemberName](/en/chapter-14-modern-csharp-features-for-backend/14-5-1-callermembername)
- [14.5.2 CallerArgumentExpression](/en/chapter-14-modern-csharp-features-for-backend/14-5-2-callerargumentexpression)
- [14.5.3 CallerFilePath and CallerLineNumber](/en/chapter-14-modern-csharp-features-for-backend/14-5-3-callerfilepath-and-callerlinenumber)
