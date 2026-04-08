---
title: base keyword
sidebar:
  order: 86
  label: 4.3.2 base keyword
---

**Context**: The `base` keyword accesses members of the immediate base class. It is used to call base constructors or overridden methods.

## Call Base Constructor

```csharp
public class Employee
{
    public string Name { get; }
    public Employee(string name) => Name = name;
}

public class Manager : Employee
{
    public string Department { get; }
    public Manager(string name, string dept) : base(name)
    {
        Department = dept;
    }
}
```

## Call Base Method

```csharp
public class Animal
{
    public virtual void Speak() => Console.WriteLine("Animal sound");
}
public class Dog : Animal
{
    public override void Speak()
    {
        base.Speak(); // call base implementation
        Console.WriteLine("Woof!");
    }
}
```

## Access Hidden Members

If a derived class hides a base member with `new`, you can still access the base member using `base`.
