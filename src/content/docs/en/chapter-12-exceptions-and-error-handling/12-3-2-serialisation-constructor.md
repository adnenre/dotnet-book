---
title: Serialisation constructor
sidebar:
  order: 508
  label: 12.3.2 Serialisation constructor
---

**Context**: If your custom exception may be serialized (e.g., across AppDomains, in remoting, or in logs), you must implement a special constructor that takes `SerializationInfo` and `StreamingContext`. This constructor is called during deserialization and should pass the parameters to the base constructor. Also apply the `[Serializable]` attribute.

## Usage Example

```csharp
using System;
using System.Runtime.Serialization;

[Serializable]
public class SerializableException : Exception
{
    public SerializableException() { }

    public SerializableException(string message) : base(message) { }

    public SerializableException(string message, Exception inner) : base(message, inner) { }

    // Serialisation constructor
    protected SerializableException(SerializationInfo info, StreamingContext context)
        : base(info, context)
    {
    }
}

class Program
{
    static void Main()
    {
        var ex = new SerializableException("Test");
        Console.WriteLine(ex.Message);
    }
}
```

## Output console

```shell
dotnet run
Test
```

## Important notes

- The serialisation constructor must be `protected` or `public`.
- It should always call `base(info, context)`.
- Required for exceptions that cross boundaries (e.g., in microservices, WCF).

## Real-world usage example

**Distributed systems** – Custom exceptions in a library used by multiple services need serialisation to preserve error details.  
See [.NET docs on serialisation constructors](https://docs.microsoft.com/en-us/dotnet/standard/serialization/custom-serialization).

## Related sections

- [12.3.1 Derive from Exception](/en/chapter-12-exceptions-and-error-handling/12-3-1-derive-from-exception-or-applicationexception)
- [12.3.3 Adding custom properties](/en/chapter-12-exceptions-and-error-handling/12-3-3-adding-custom-properties)
