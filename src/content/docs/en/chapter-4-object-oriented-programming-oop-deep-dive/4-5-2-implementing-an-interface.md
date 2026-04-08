---
title: Implementing an interface
sidebar:
  order: 97
  label: 4.5.2 Implementing an interface
---

**Context**: A class or struct implements an interface by providing concrete implementations for all its members.

## Syntax

```csharp
class ClassName : InterfaceName
{
    // implement all interface members
}
```

## Example

```csharp
public interface IPerson
{
    string Name { get; set; }
    void Introduce();
}

public class Student : IPerson
{
    public string Name { get; set; }
    public void Introduce() => Console.WriteLine($"I'm {Name}, a student");
}
```

## Multiple Interfaces

```csharp
public class FileManager : IReadable, IWritable
{
    public string Read() => "data";
    public void Write(string data) { /* ... */ }
}
```

## Interface as a Type

You can use an interface type to hold any implementing object.

```csharp
IPerson person = new Student { Name = "Alice" };
person.Introduce(); // works
```
