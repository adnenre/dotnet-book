---
title: Generic Class Syntax
sidebar:
  order: 401
  label: 11.1.1 Syntax
---

**Context**: The syntax for generic classes uses one or more type parameters between angle brackets `<>` after the class name. Type parameters are placeholders for actual types provided at instantiation. Constraints (see section 11.4) can be applied to restrict allowed types.

## Usage Example

```csharp
using System;

// Generic class with two type parameters
public class Pair<T1, T2>
{
    public T1 First { get; set; }
    public T2 Second { get; set; }

    public void Display()
    {
        Console.WriteLine($"({First}, {Second})");
    }
}

class Program
{
    static void Main()
    {
        Pair<int, string> pair1 = new Pair<int, string>();
        pair1.First = 10;
        pair1.Second = "Ten";
        pair1.Display();

        var pair2 = new Pair<double, bool> { First = 3.14, Second = true };
        pair2.Display();
    }
}
```

## Output console

```shell
dotnet run
(10, Ten)
(3.14, True)
```

## Important notes

- The generic class name can be used with different types.
- Type inference is not available for instantiation (types must be specified).
- Type parameters can be used as field, property, method parameter, and return types.

## Real-world usage example

**`KeyValuePair<TKey, TValue>`** – Used in `Dictionary<TKey, TValue>` to represent a key/value pair.  
See [.NET docs on generics](https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/generics/).

## Related sections

- [11.1 Generic Classes](/en/chapter-11-generics-and-constraints/11-1-generic-classes)
- [11.1.2 Type parameters naming](/en/chapter-11-generics-and-constraints/11-1-2-type-parameters-naming)
