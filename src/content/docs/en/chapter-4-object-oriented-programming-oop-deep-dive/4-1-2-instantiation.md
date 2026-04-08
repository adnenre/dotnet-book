---
title: Instantiation
sidebar:
  order: 76
  label: 4.1.2 Instantiation
---

**Context**: Instantiation creates an object (instance) of a class using the `new` keyword, which allocates memory and calls the constructor.

## Syntax

```csharp
ClassName variableName = new ClassName([arguments]);
```

## Examples

```csharp
Person person1 = new Person("Alice");
var person2 = new Person("Bob");        // using var
Person person3 = new() { Name = "Charlie" }; // target-typed new (C# 9+)
```

## Default Constructor

If you don't define any constructor, the compiler provides a parameterless constructor that initializes fields to default values.

```csharp
class Simple
{
    public int Number;
}
Simple obj = new Simple(); // Number = 0
```

## Object Initializers

Set public fields/properties at creation.

```csharp
var car = new Car { Model = "Tesla", Year = 2025 };
```
