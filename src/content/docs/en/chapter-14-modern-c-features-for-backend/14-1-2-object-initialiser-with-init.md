---
title: Object initialiser with init
sidebar:
  order: 702
  label: 14.1.2 Object initialiser with init
---

**Context**: Object initializers allow setting properties or fields when creating an object, without calling a constructor with matching parameters. With init‑only setters, you can use object initializers even for immutable properties. This combines the readability of object initializers with the safety of immutability.

## Usage Example

```csharp
using System;

public class Product
{
    public int Id { get; init; }
    public string Name { get; init; }
    public decimal Price { get; init; }
}

class Program
{
    static void Main()
    {
        var product = new Product
        {
            Id = 101,
            Name = "Laptop",
            Price = 999.99m
        };
        Console.WriteLine($"{product.Id}: {product.Name} - {product.Price:C}");
    }
}
```

## Output console

```shell
dotnet run
101: Laptop - $999.99
```

## Important notes

- Object initializers can be used with or without explicit constructors.
- Init‑only properties make initializers the primary way to create immutable objects.
- You can also set init‑only properties inside a constructor.

## Real-world usage example

**Entity Framework Core model creation** – Use init‑only properties for value objects that should not change after being loaded from the database.  
See [.NET docs on object initializers](https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/object-and-collection-initializers).

## Related sections

- [14.1 init only setters](/en/chapter-14-modern-csharp-features-for-backend/14-1-init-only-setters)
- [14.1.1 Immutable objects after construction](/en/chapter-14-modern-csharp-features-for-backend/14-1-1-immutable-objects-after-construction)
