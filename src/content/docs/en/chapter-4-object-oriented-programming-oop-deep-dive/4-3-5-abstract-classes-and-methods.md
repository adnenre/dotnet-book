---
title: abstract classes and methods
sidebar:
  order: 89
  label: 4.3.5 abstract classes and methods
---

**Context**: An `abstract` class cannot be instantiated. It may contain `abstract` methods (no body) that must be implemented by non‑abstract derived classes.

## Abstract Class

```csharp
public abstract class Vehicle
{
    public abstract void StartEngine(); // no body
    public void Stop() => Console.WriteLine("Stopped");
}
```

## Abstract Method Implementation

```csharp
public class Car : Vehicle
{
    public override void StartEngine()
    {
        Console.WriteLine("Car engine started");
    }
}
```

## Usage

```csharp
Vehicle v = new Car(); // OK
v.StartEngine();       // calls Car's implementation
// Vehicle v2 = new Vehicle(); // error: abstract
```

## Key Points

- Abstract members can only appear in abstract classes.
- A class inheriting an abstract class must implement all abstract members (unless it is also abstract).
- Abstract classes can have constructors, fields, and concrete methods.
