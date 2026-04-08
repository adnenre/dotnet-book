---
title: Explicit interface implementation
sidebar:
  order: 98
  label: 4.5.3 Explicit interface implementation
---

**Context**: Explicit implementation allows a class to implement interface members without making them public. Useful for resolving naming conflicts or hiding implementation details.

## Syntax

```csharp
void IInterfaceName.MethodName() { }
```

## Example

```csharp
public interface IWriter { void Write(); }
public interface IReader { void Write(); } // same name

public class Device : IWriter, IReader
{
    void IWriter.Write() => Console.WriteLine("Writer write");
    void IReader.Write() => Console.WriteLine("Reader write");
}
```

## Access

Explicitly implemented members are only accessible through the interface.

```csharp
Device d = new Device();
// d.Write(); // error
((IWriter)d).Write(); // "Writer write"
((IReader)d).Write(); // "Reader write"
```

## When to Use

- Resolving name conflicts between interfaces.
- Hiding implementation details (e.g., `ICollection<T>` vs `IEnumerable<T>`).
- Forcing usage through the interface.
