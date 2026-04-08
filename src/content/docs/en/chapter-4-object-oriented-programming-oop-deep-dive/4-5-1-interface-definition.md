---
title: Interface definition
sidebar:
  order: 96
  label: 4.5.1 Interface definition
---

**Context**: Define an interface using the `interface` keyword. It can contain methods, properties, events, and indexers.

## Syntax

```csharp
[access modifier] interface IInterfaceName
{
    // method signature
    int DoWork(string input);

    // property signature
    string Name { get; set; }

    // event
    event EventHandler Updated;
}
```

## Naming Convention

Prefix with `I` (e.g., `IComparable`, `IDisposable`).

## Example

```csharp
public interface ILogger
{
    void Log(string message);
    bool IsEnabled { get; set; }
}
```

## Interface Inheritance

Interfaces can inherit from other interfaces.

```csharp
public interface IReadable { string Read(); }
public interface IWritable { void Write(string data); }
public interface IReadWrite : IReadable, IWritable { }
```
