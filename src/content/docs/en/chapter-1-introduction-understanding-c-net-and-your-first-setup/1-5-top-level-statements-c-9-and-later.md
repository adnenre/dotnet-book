---
title: Top level statements C# 9 and later
sidebar:
  order: 21
  label: 1.5 Top level statements C# 9 and later
---

**Context**: Top-level statements (C# 9+) simplify code by removing ceremony. They are fully supported in .NET 10.

Top-level statements, introduced in C# 9, allow you to write code without the ceremony of a `Main` method, class, and namespace.

## Benefits

- **Simplicity**: Focus on logic, not boilerplate
- **Learnability**: Easier for beginners
- **Conciseness**: Less code to write and read

## Example Comparison

**Traditional**:

```csharp
using System;

namespace MyApp
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello");
        }
    }
}
```

**Top-level**:

```csharp
Console.WriteLine("Hello");
```

## Related Topics

- 1.5.1 No explicit Main method
- 1.5.2 Implicit using directives
- 1.5.3 When to use vs traditional Main
