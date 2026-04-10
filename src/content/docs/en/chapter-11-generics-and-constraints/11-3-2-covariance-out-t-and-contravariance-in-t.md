---
title: Covariance out T and contravariance in T
sidebar:
  order: 408
  label: 11.3.2 Covariance out T and contravariance in T
---

**Context**: Covariance (`out T`) allows using a more derived type than originally specified (for return values). Contravariance (`in T`) allows using a less derived type (for input parameters). This enables polymorphic assignment of generic interfaces.

## Usage Example

```csharp
using System;
using System.Collections.Generic;

// Covariance: T is in output position (out)
public interface IProducer<out T>
{
    T Produce();
}

// Contravariance: T is in input position (in)
public interface IConsumer<in T>
{
    void Consume(T item);
}

public class Animal { }
public class Dog : Animal { }

public class DogProducer : IProducer<Dog>
{
    public Dog Produce() => new Dog();
}

public class AnimalConsumer : IConsumer<Animal>
{
    public void Consume(Animal animal)
    {
        Console.WriteLine($"Consumes {animal.GetType().Name}");
    }
}

class Program
{
    static void Main()
    {
        // Covariance: IProducer<Dog> can be assigned to IProducer<Animal>
        IProducer<Animal> producer = new DogProducer();
        Animal animal = producer.Produce();
        Console.WriteLine($"Produced: {animal.GetType().Name}");

        // Contravariance: IConsumer<Animal> can be assigned to IConsumer<Dog>
        IConsumer<Dog> consumer = new AnimalConsumer();
        consumer.Consume(new Dog());
    }
}
```

## Output console

```shell
dotnet run
Produced: Dog
Consumes Dog
```

## Important notes

- `out T` means `T` can only be used as output (method return, property get).
- `in T` means `T` can only be used as input (method parameters, property set).
- Value types do not support variance.

## Real-world usage example

**`IEnumerable<out T>`** – Covariant, so you can pass `List<Dog>` to a method expecting `IEnumerable<Animal>`.  
**`Action<in T>`** – Contravariant.  
See [.NET docs on covariance/contravariance](https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/concepts/covariance-contravariance/).

## Related sections

- [11.3 Generic Interfaces](/en/chapter-11-generics-and-constraints/11-3-generic-interfaces)
- [11.4 Constraints](/en/chapter-11-generics-and-constraints/11-4-constraints)
