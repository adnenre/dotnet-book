---
title: Factory Method
sidebar:
  order: 106
  label: 5.1.1 Factory Method
---

**Context**: Define an interface for creating an object, but let subclasses decide which class to instantiate. Factory Method lets a class defer instantiation to subclasses.

```csharp
public interface IProduct
{
    void Operation();
}

public class ConcreteProductA : IProduct
{
    public void Operation() => Console.WriteLine("Product A");
}

public abstract class Creator
{
    public abstract IProduct FactoryMethod();
}

public class ConcreteCreatorA : Creator
{
    public override IProduct FactoryMethod() => new ConcreteProductA();
}

// Usage
Creator creator = new ConcreteCreatorA();
IProduct product = creator.FactoryMethod();
product.Operation();
```

## Real-world usage example

**Logging frameworks**: Different loggers (file, database, cloud) are created by corresponding factory methods. The application code only knows the `ILogger` interface; the concrete logger is decided by configuration or environment.

**Example**: In ASP.NET Core, [`ILoggerFactory`](https://docs.microsoft.com/en-us/dotnet/api/microsoft.extensions.logging.iloggerfactory) uses factory method pattern to create logger instances for different categories. The [`CreateLogger`](https://docs.microsoft.com/en-us/dotnet/api/microsoft.extensions.logging.iloggerfactory.createlogger) method is a factory method that returns an `ILogger` for a given category name.

## Related sections

- [5.1 Creational patterns](/en/chapter-5-design-patterns-for-backend-development/5-1-creational-patterns)
- [5.1.2 Abstract Factory](/en/chapter-5-design-patterns-for-backend-development/5-1-2-abstract-factory)
