---
title: where T  class (reference type)
sidebar:
  order: 411
  label: 11.4.2 where T  class
---

**Context**: The constraint `where T : class` requires the type parameter to be a reference type (class, interface, delegate, array). It allows `null`. It is often used for containers that manage shared objects or require references.

## Usage Example

```csharp
using System;
using System.Collections.Generic;

public class Warehouse<T> where T : class
{
    private readonly List<T> _items = new List<T>();

    public void Add(T item)
    {
        if (item == null)
            throw new ArgumentNullException(nameof(item));
        _items.Add(item);
    }

    public T Get(int index) => _items[index];
}

class Program
{
    static void Main()
    {
        var stringWarehouse = new Warehouse<string>();
        stringWarehouse.Add("Hello");
        Console.WriteLine(stringWarehouse.Get(0));

        // This does not compile: int is a struct
        // var intWarehouse = new Warehouse<int>();
    }
}
```

## Output console

```shell
dotnet run
Hello
```

## Important notes

- `class` includes interfaces, delegates, and arrays.
- Allows checking for `null` and using the `as` operator.

## Real-world usage example

**`List<T>`** – Does not have a `class` constraint, but many custom collections use it to ensure elements are objects.  
See [.NET docs on class constraint](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/where-generic-type-constraint#class).

## Related sections

- [11.4.1 where T : struct](/en/chapter-11-generics-and-constraints/11-4-1-where-t-struct-value-type)
- [11.4.3 where T : new()](/en/chapter-11-generics-and-constraints/11-4-3-where-t-new-parameterless-constructor)
