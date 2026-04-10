---
title: where T  IMyInterface (interface constraint)
sidebar:
  order: 414
  label: 11.4.5 where T  IMyInterface
---

**Context**: The constraint `where T : IMyInterface` requires the type parameter to implement the specified interface. This allows calling the interface members on instances of `T`. Multiple interfaces can be combined.

## Usage Example

```csharp
using System;
using System.Collections.Generic;

public interface IIdentifiable
{
    int Id { get; }
    string Name { get; }
}

public class Product : IIdentifiable
{
    public int Id { get; set; }
    public string Name { get; set; }
}

public class Customer : IIdentifiable
{
    public int Id { get; set; }
    public string Name { get; set; }
}

public class Display<T> where T : IIdentifiable
{
    public void ShowIdentity(T item)
    {
        Console.WriteLine($"ID: {item.Id}, Name: {item.Name}");
    }
}

class Program
{
    static void Main()
    {
        var product = new Product { Id = 1, Name = "Laptop" };
        var customer = new Customer { Id = 100, Name = "Alice" };

        var display = new Display<IIdentifiable>();
        display.ShowIdentity(product);
        display.ShowIdentity(customer);
    }
}
```

## Output console

```shell
dotnet run
ID: 1, Name: Laptop
ID: 100, Name: Alice
```

## Important notes

- You can impose multiple interfaces: `where T : IInterface1, IInterface2`.
- The interface can be generic itself.

## Real-world usage example

**`List<T>`** – Does not impose an interface, but `Dictionary<TKey, TValue>` indirectly uses `IEquatable<TKey>`.  
See [.NET docs on interface constraint](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/where-generic-type-constraint#interface-constraint).

## Related sections

- [11.4.4 where T : BaseClass](/en/chapter-11-generics-and-constraints/11-4-4-where-t-baseclass-base-class-constraint)
- [11.4.7 Multiple constraints](/en/chapter-11-generics-and-constraints/11-4-7-multiple-constraints)
