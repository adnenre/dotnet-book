---
title: Generic Interfaces
sidebar:
  order: 406
  label: 11.3 Generic Interfaces
---

**Context**: A generic interface defines members whose types depend on one or more type parameters. Classes that implement the interface specify the actual types. This allows creating flexible and reusable contracts.

## Usage Example

```csharp
using System;

public interface IRepository<T>
{
    T Get(int id);
    void Add(T item);
}

public class ProductRepository : IRepository<Product>
{
    public Product Get(int id)
    {
        return new Product { Id = id, Name = "Product " + id };
    }

    public void Add(Product item)
    {
        Console.WriteLine($"Adding {item.Name}");
    }
}

public class Product
{
    public int Id { get; set; }
    public string Name { get; set; }
}

class Program
{
    static void Main()
    {
        IRepository<Product> repo = new ProductRepository();
        Product p = repo.Get(1);
        Console.WriteLine(p.Name);
        repo.Add(p);
    }
}
```

## Output console

```shell
dotnet run
Product 1
Adding Product 1
```

## Important notes

- A class can implement the same generic interface with different types.
- The interface can have multiple type parameters (e.g., `IDictionary<TKey, TValue>`).

## Real-world usage example

**`IEnumerable<T>`** – The fundamental interface for all .NET collections.  
See [.NET docs on generic interfaces](https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/generics/generic-interfaces).

## Related sections

- [11.3.1 interface IRepository<T>](/en/chapter-11-generics-and-constraints/11-3-1-interface-irepository-t)
- [11.3.2 Covariance out T and contravariance in T](/en/chapter-11-generics-and-constraints/11-3-2-covariance-out-t-and-contravariance-in-t)
