---
title: CallerArgumentExpression
sidebar:
  order: 712
  label: 14.5.2 CallerArgumentExpression
---

**Context**: `[CallerArgumentExpression]` (C# 10) captures the source code expression passed to a method parameter as a string. It is used to create better assertion and validation helpers, because you can show the actual expression that caused the failure without manually writing a message.

## Usage Example

```csharp
using System;
using System.Runtime.CompilerServices;

public static class Guard
{
    public static void NotNull<T>(T value, [CallerArgumentExpression("value")] string expression = null) where T : class
    {
        if (value == null)
            throw new ArgumentNullException(expression);
    }
}

class Program
{
    static void Main()
    {
        string name = null;
        Guard.NotNull(name); // Throws with expression "name"
    }
}
```

## Output console

```shell
Unhandled exception: System.ArgumentNullException: name (Parameter 'name')
```

## Important notes

- The attribute parameter is the name of the target parameter (e.g., `"value"`).
- The compiler fills `expression` with the source code representation of the argument.
- Very useful for validation libraries and assertion helpers.

## Real-world usage example

**FluentAssertions** – Uses `CallerArgumentExpression` to show which expression failed in assertion messages.  
See [.NET docs on CallerArgumentExpression](https://docs.microsoft.com/en-us/dotnet/api/system.runtime.compilerservices.callerargumentexpressionattribute).

## Related sections

- [14.5 Caller info attributes](/en/chapter-14-modern-csharp-features-for-backend/14-5-caller-info-attributes)
- [14.5.1 CallerMemberName](/en/chapter-14-modern-csharp-features-for-backend/14-5-1-callermembername)
