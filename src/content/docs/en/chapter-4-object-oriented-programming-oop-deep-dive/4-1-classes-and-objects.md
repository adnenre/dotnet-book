---
title: Classes and objects
sidebar:
  order: 74
  label: 4.1 Classes and objects
---

**Context**: Classes are blueprints for creating objects. Objects are instances of classes. This section introduces the fundamental concepts of OOP in C#.

A **class** defines a data structure and the operations that can be performed on that data. An **object** is a concrete instance of a class, allocated in memory.

```csharp
// Class definition
class Car
{
    public string Model;
    public void Drive() => Console.WriteLine("Driving");
}

// Creating objects
Car myCar = new Car();
myCar.Model = "Tesla";
myCar.Drive();
```

## Related Topics

- 4.1.1 Class definition
- 4.1.2 Instantiation
- 4.1.3 Fields
- 4.1.4 Properties
- 4.1.5 Methods
