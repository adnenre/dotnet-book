---
title: Derive from Exception or ApplicationException
sidebar:
  order: 507
  label: 12.3.1 Derive from Exception or ApplicationException
---

**Context**: Custom exceptions should derive from `System.Exception`. Deriving from `ApplicationException` is no longer recommended (the .NET Framework guidelines have changed). Derive directly from `Exception` unless you have a specific reason to use a more specific base class. This ensures your exception integrates seamlessly with the runtime.

## Usage Example

```csharp
using System;

// Recommended way
public class MyCustomException : Exception
{
    public MyCustomException() { }
    public MyCustomException(string message) : base(message) { }
    public MyCustomException(string message, Exception inner) : base(message, inner) { }
}

// Not recommended (but still works)
public class OldStyleException : ApplicationException
{
    public OldStyleException() { }
    public OldStyleException(string message) : base(message) { }
}
```

## Output console

```shell
// No output; compilation succeeds.
```

## Important notes

- `ApplicationException` was intended to distinguish between framework exceptions and custom ones, but it is rarely used today.
- Always mark your exception with `[Serializable]` if you plan to use it across remoting or serialization.

## Real-world usage example

**`InvalidOperationException`** – A built-in exception that is often used as a base for domain-specific invalid states.  
See [.NET docs on exception inheritance](https://docs.microsoft.com/en-us/dotnet/standard/exceptions/best-practices-for-exceptions#inheritance).

## Related sections

- [12.3 Custom exceptions](/en/chapter-12-exceptions-and-error-handling/12-3-custom-exceptions)
- [12.3.2 Serialisation constructor](/en/chapter-12-exceptions-and-error-handling/12-3-2-serialisation-constructor)
