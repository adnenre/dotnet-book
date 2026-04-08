---
title: Class definition
sidebar:
  order: 75
  label: 4.1.1 Class definition
---

**Context**: A class definition specifies the members (fields, properties, methods, events) that instances of the class will have.

## Syntax

```csharp
[access modifier] class ClassName
{
    // members: fields, properties, methods, constructors, etc.
}
```

## Example

```csharp
public class Person
{
    // Fields
    private string _name;

    // Constructor
    public Person(string name)
    {
        _name = name;
    }

    // Method
    public void SayHello()
    {
        Console.WriteLine($"Hello, I'm {_name}");
    }
}
```

## Naming Conventions

- Class names use **PascalCase** (e.g., `CustomerService`).
- File name usually matches the class name (e.g., `Person.cs`).
- One class per file is common but not mandatory.
