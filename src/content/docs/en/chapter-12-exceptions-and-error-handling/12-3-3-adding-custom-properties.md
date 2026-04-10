---
title: Adding custom properties
sidebar:
  order: 509
  label: 12.3.3 Adding custom properties
---

**Context**: Custom exceptions can include additional properties that carry contextual information about the error. For example, a `ValidationException` might have a `PropertyName` and `InvalidValue`. These properties help the caller understand and handle the error without parsing the message string. They should be serializable as well.

## Usage Example

```csharp
using System;
using System.Runtime.Serialization;

[Serializable]
public class ValidationException : Exception
{
    public string PropertyName { get; }
    public object InvalidValue { get; }

    public ValidationException() { }

    public ValidationException(string message) : base(message) { }

    public ValidationException(string message, Exception inner) : base(message, inner) { }

    public ValidationException(string propertyName, object invalidValue, string message)
        : base(message)
    {
        PropertyName = propertyName;
        InvalidValue = invalidValue;
    }

    protected ValidationException(SerializationInfo info, StreamingContext context)
        : base(info, context)
    {
        PropertyName = info.GetString("PropertyName");
        InvalidValue = info.GetValue("InvalidValue", typeof(object));
    }

    public override void GetObjectData(SerializationInfo info, StreamingContext context)
    {
        base.GetObjectData(info, context);
        info.AddValue("PropertyName", PropertyName);
        info.AddValue("InvalidValue", InvalidValue);
    }
}

class Program
{
    static void Main()
    {
        try
        {
            throw new ValidationException("Age", -5, "Age cannot be negative.");
        }
        catch (ValidationException ex)
        {
            Console.WriteLine($"Validation failed for {ex.PropertyName}: {ex.Message}");
        }
    }
}
```

## Output console

```shell
dotnet run
Validation failed for Age: Age cannot be negative.
```

## Important notes

- Override `GetObjectData` for custom serialization.
- Use read‑only properties for immutable exception data.
- Avoid storing large objects in exception properties.

## Real-world usage example

**API client** – A `ApiException` with `StatusCode` and `ResponseBody` properties to help debugging.  
See [.NET docs on custom exception properties](https://docs.microsoft.com/en-us/dotnet/standard/exceptions/how-to-create-user-defined-exceptions#add-custom-properties).

## Related sections

- [12.3.2 Serialisation constructor](/en/chapter-12-exceptions-and-error-handling/12-3-2-serialisation-constructor)
- [12.3 Custom exceptions](/en/chapter-12-exceptions-and-error-handling/12-3-custom-exceptions)
