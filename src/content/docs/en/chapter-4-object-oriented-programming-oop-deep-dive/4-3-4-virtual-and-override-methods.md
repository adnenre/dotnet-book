---
title: virtual and override methods
sidebar:
  order: 88
  label: 4.3.4 virtual and override methods
---

**Context**: `virtual` allows a method to be overridden in a derived class. `override` provides a new implementation.

## Rules

- A `virtual` method may have an implementation.
- An `override` method must match the signature.
- You cannot override a non‑virtual or static method.

```csharp
public class Shape
{
    public virtual double Area() => 0;
}
public class Circle : Shape
{
    private double _radius;
    public Circle(double r) => _radius = r;
    public override double Area() => Math.PI * _radius * _radius;
}
```

## Calling Overridden Methods

Runtime polymorphism: the actual object type determines which method is called.

```csharp
Shape shape = new Circle(5);
Console.WriteLine(shape.Area()); // uses Circle's Area
```

## Override vs `new`

`override` replaces the base method; `new` hides it (see 4.3.6).
