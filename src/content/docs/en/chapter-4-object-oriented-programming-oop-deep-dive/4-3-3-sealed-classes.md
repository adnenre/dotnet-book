---
title: Sealed classes
sidebar:
  order: 87
  label: 4.3.3 Sealed classes
---

**Context**: The `sealed` modifier prevents other classes from inheriting from a class. It also prevents overriding of methods (when applied to a method).

## Sealed Class

```csharp
public sealed class FinalClass
{
    // cannot be derived from
}
// public class Derived : FinalClass { } // error
```

## Sealed Method

A `sealed` method overrides a virtual method but cannot be overridden further.

```csharp
public class Parent
{
    public virtual void Method() { }
}
public class Child : Parent
{
    public sealed override void Method() { }
}
public class GrandChild : Child
{
    // public override void Method() { } // error: sealed
}
```

## Use Cases

- Prevent unintended inheritance (security, design).
- Improve performance (virtual dispatch can be optimized).
- Immutability (e.g., `string` is sealed).
