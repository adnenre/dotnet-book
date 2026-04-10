---
title: Generic Classes
sidebar:
  order: 400
  label: 11.1 Generic Classes
---

**Context**: Generic classes allow you to define a class template with type parameters. This avoids duplicating code for different data types. The actual type is specified at instantiation. Generic classes provide compile-time type safety and improve performance by avoiding boxing/unboxing for value types.

## Usage Example

```csharp
using System;

public class Box<T>
{
    private T _content;

    public void Add(T content)
    {
        _content = content;
    }

    public T Get()
    {
        return _content;
    }
}

class Program
{
    static void Main()
    {
        Box<int> intBox = new Box<int>();
        intBox.Add(42);
        int value = intBox.Get();
        Console.WriteLine(value);

        Box<string> stringBox = new Box<string>();
        stringBox.Add("Hello");
        Console.WriteLine(stringBox.Get());
    }
}
```

## Output console

```shell
dotnet run
42
Hello
```

## Important notes

- Type parameters are placed between angle brackets `<>` after the class name.
- Value types are not boxed when used with generics.
- A generic class can have multiple type parameters.

## Real-world usage example

**.NET Collections** – `List<T>`, `Dictionary<TKey, TValue>` and `Queue<T>` are generic classes used daily to store typed data.  
See [.NET docs on generic classes](https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/generics/generic-classes).

## Related sections

- [11.1.1 Syntax](/en/chapter-11-generics-and-constraints/11-1-1-syntax)
- [11.1.2 Type parameters naming T, TKey, TValue](/en/chapter-11-generics-and-constraints/11-1-2-type-parameters-naming)
- [11.2 Generic methods](/en/chapter-11-generics-and-constraints/11-2-generic-methods)
