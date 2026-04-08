---
title: Inheritance
sidebar:
  order: 84
  label: 4.3 Inheritance
---

**Context**: Inheritance allows a class to reuse, extend, or modify behavior of another class. The derived class inherits all non‑private members.

C# supports single inheritance (one base class) and multiple interface implementation.

```csharp
public class Animal
{
    public void Eat() => Console.WriteLine("Eating");
}
public class Dog : Animal
{
    public void Bark() => Console.WriteLine("Barking");
}
```

## Related Topics

- 4.3.1 Base class and derived class
- 4.3.2 base keyword
- 4.3.3 Sealed classes
- 4.3.4 virtual and override methods
- 4.3.5 abstract classes and methods
- 4.3.6 Hiding members with new
