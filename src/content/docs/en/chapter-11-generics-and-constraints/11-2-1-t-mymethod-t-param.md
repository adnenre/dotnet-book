---
title: T MyMethod<T>(T param)
sidebar:
  order: 404
  label: 11.2.1 T MyMethod<T>(T param)
---

**Context**: A generic method can take a parameter of the generic type and return a value of the same type. This ensures that input and output types are consistent without losing type information.

## Usage Example

```csharp
using System;

public class Manipulator
{
    public T Duplicate<T>(T original)
    {
        // For reference types, returns the same reference (simplified example)
        return original;
    }

    public T Convert<T>(object value)
    {
        return (T)Convert.ChangeType(value, typeof(T));
    }
}

class Program
{
    static void Main()
    {
        var manip = new Manipulator();
        int number = manip.Duplicate(100);
        Console.WriteLine(number);

        double decimalConverted = manip.Convert<double>("123.45");
        Console.WriteLine(decimalConverted);
    }
}
```

## Output console

```shell
dotnet run
100
123.45
```

## Important notes

- The type parameter `T` can appear as return type and as parameter type.
- This avoids explicit casts and improves type safety.

## Real-world usage example

**`JsonSerializer.Deserialize<T>(string json)`** – Takes a type parameter `T` and returns an instance of `T`.  
See [.NET docs on JSON deserialization](https://docs.microsoft.com/en-us/dotnet/standard/serialization/system-text-json/deserialization).

## Related sections

- [11.2 Generic methods](/en/chapter-11-generics-and-constraints/11-2-generic-methods)
- [11.2.2 Type inference](/en/chapter-11-generics-and-constraints/11-2-2-type-inference-at-call-site)
