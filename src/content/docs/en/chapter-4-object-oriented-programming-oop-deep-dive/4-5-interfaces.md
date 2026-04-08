---
title: Interfaces
sidebar:
  order: 95
  label: 4.5 Interfaces
---

**Context**: An interface defines a contract that implementing classes must follow. It contains only signatures (methods, properties, events, indexers) without implementation.

## Key Characteristics

- No fields or constructors.
- Members are implicitly `public` and `abstract` (before C# 8).
- A class can implement multiple interfaces.

```csharp
public interface IDrawable
{
    void Draw();
}
public class Circle : IDrawable
{
    public void Draw() => Console.WriteLine("Drawing Circle");
}
```

## Related Topics

- 4.5.1 Interface definition
- 4.5.2 Implementing an interface
- 4.5.3 Explicit interface implementation
- 4.5.4 Default interface methods C# 8 and later
