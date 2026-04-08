---
title: Static constructor
sidebar:
  order: 102
  label: 4.6.2 Static constructor
---

**Context**: A static constructor initializes static fields or performs one‑time setup. It is called automatically before the first static member access or first instance creation.

## Syntax

```csharp
class ClassName
{
    static ClassName()
    {
        // initialization code
    }
}
```

## Characteristics

- No parameters.
- No access modifiers (implicitly private).
- Cannot be called directly.
- Runs at most once.

## Example

```csharp
public class Config
{
    public static readonly string ConnectionString;
    static Config()
    {
        ConnectionString = LoadFromFile();
    }
    private static string LoadFromFile() => "Server=...";
}
```

## Order of Execution

1. Static constructor runs.
2. Then instance constructors (if creating instances).

## Exceptions

If a static constructor throws an exception, the type becomes unusable.
