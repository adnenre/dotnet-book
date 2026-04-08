---
title: Base class and derived class
sidebar:
  order: 85
  label: 4.3.1 Base class and derived class
---

**Context**: A base class (parent) is the original class. A derived class (child) inherits from it and can add or override members.

## Syntax

```csharp
public class DerivedClass : BaseClass
{
    // additional members
}
```

## Example

```csharp
public class Shape
{
    public string Color { get; set; }
}

public class Circle : Shape
{
    public double Radius { get; set; }
    public double Area() => Math.PI * Radius * Radius;
}

Circle c = new Circle { Color = "Red", Radius = 5 };
Console.WriteLine(c.Color); // from base
```

## Constructor Inheritance

The base class constructor is called first (implicitly or explicitly with `base()`).

```csharp
public class Base
{
    public Base(string s) { }
}
public class Derived : Base
{
    public Derived(string s) : base(s) { }
}
```
