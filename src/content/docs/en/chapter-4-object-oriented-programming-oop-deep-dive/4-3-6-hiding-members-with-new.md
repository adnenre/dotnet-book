---
title: Hiding members with new
sidebar:
  order: 90
  label: 4.3.6 Hiding members with new
---

**Context**: Use the `new` modifier to hide an inherited member intentionally. This breaks polymorphism for that member.

## Example

```csharp
public class Base
{
    public void Display() => Console.WriteLine("Base");
}
public class Derived : Base
{
    public new void Display() => Console.WriteLine("Derived");
}
```

## Polymorphic Behavior

With `new`, the method called depends on the compile‑time type.

```csharp
Base b = new Derived();
b.Display(); // "Base" (not polymorphic)

Derived d = new Derived();
d.Display(); // "Derived"
```

## When to Use

- When you cannot modify the base class (e.g., third‑party library).
- When you want to provide a new method with the same name but different behavior that should not be virtual.

## Warning

Hiding can cause confusion; prefer `override` when possible.
