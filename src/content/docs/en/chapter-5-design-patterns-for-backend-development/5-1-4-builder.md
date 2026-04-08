---
title: Builder
sidebar:
  order: 109
  label: 5.1.4 Builder
---

**Context**: Separate the construction of a complex object from its representation so that the same construction process can create different representations.

```csharp
public class Product
{
    public string PartA { get; set; }
    public string PartB { get; set; }
}

public interface IBuilder
{
    void BuildPartA();
    void BuildPartB();
    Product GetResult();
}

public class ConcreteBuilder : IBuilder
{
    private Product _product = new();
    public void BuildPartA() => _product.PartA = "A";
    public void BuildPartB() => _product.PartB = "B";
    public Product GetResult() => _product;
}

public class Director
{
    public void Construct(IBuilder builder)
    {
        builder.BuildPartA();
        builder.BuildPartB();
    }
}

// Usage
var builder = new ConcreteBuilder();
new Director().Construct(builder);
Product p = builder.GetResult();
```

## Real-world usage example

**Building SQL queries**: A `SqlQueryBuilder` allows step‑by‑step construction of SELECT, WHERE, ORDER BY clauses, producing different query strings.

**Example**: In C#, [`StringBuilder`](https://docs.microsoft.com/en-us/dotnet/api/system.text.stringbuilder) is a classic builder for constructing strings efficiently. Entity Framework Core's [`IQueryable`](https://docs.microsoft.com/en-us/dotnet/api/system.linq.iqueryable) uses fluent builder methods like `.Where()`, `.OrderBy()`, `.Select()` to build queries.

## Related sections

- [5.1 Creational patterns](/en/chapter-5-design-patterns-for-backend-development/5-1-creational-patterns)
- [5.1.3 Singleton](/en/chapter-5-design-patterns-for-backend-development/5-1-3-singleton)
