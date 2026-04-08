---
title: Runtime virtual override
sidebar:
  order: 93
  label: 4.4.2 Runtime virtual override
---

**Context**: Runtime polymorphism (dynamic dispatch) allows a derived class to provide a specific implementation of a method defined in the base class using `virtual` and `override`.

## Example

```csharp
public class Animal
{
    public virtual void Speak() => Console.WriteLine("?");
}
public class Dog : Animal
{
    public override void Speak() => Console.WriteLine("Woof");
}
public class Cat : Animal
{
    public override void Speak() => Console.WriteLine("Meow");
}

Animal a1 = new Dog();
Animal a2 = new Cat();
a1.Speak(); // Woof
a2.Speak(); // Meow
```

## How It Works

The runtime determines the actual type of the object and calls the most derived override.

## Benefits

- Open/Closed Principle: add new types without changing existing code.
- Base class references can work with any derived class.
