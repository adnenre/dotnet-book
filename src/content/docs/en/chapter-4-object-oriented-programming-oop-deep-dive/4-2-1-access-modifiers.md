---
title: Access modifiers
sidebar:
  order: 81
  label: 4.2.1 Access modifiers
---

**Context**: Access modifiers control the visibility of types and members.

| Modifier             | Accessibility                                    |
| -------------------- | ------------------------------------------------ |
| `public`             | Any code                                         |
| `private`            | Only within the same class                       |
| `protected`          | Within the class or derived classes              |
| `internal`           | Within the same assembly                         |
| `protected internal` | Same assembly OR derived classes in any assembly |
| `private protected`  | Same assembly AND derived classes (C# 7.2+)      |

## Examples

```csharp
public class Vehicle
{
    private string _vin;          // only Vehicle
    protected int _wheels;        // Vehicle + derived
    internal string _model;       // same assembly
    public void Start() { }       // everyone
}
```

## Default Accessibility

- **Class / struct / interface / enum**: `internal`
- **Members (fields, methods, etc.)**: `private`
