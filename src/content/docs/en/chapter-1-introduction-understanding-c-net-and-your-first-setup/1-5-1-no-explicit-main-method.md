---
title: No explicit Main method
sidebar:
  order: 22
  label: 1.5.1 No explicit Main method
---

**Context**: With top-level statements, the compiler generates the Main method automatically. This works in .NET 10.

With top-level statements, the compiler automatically generates the `Main` method entry point. You don't need to write it explicitly.

## How It Works

The C# compiler wraps your top-level code into a generated `Main` method. The code you write becomes the body of that method.

## Example

```csharp
// This is all you need!
Console.Write("Enter your name: ");
string name = Console.ReadLine();
Console.WriteLine($"Hello {name}!");
```

## Generated Code (Conceptual)

```csharp
using System;
using System.Threading.Tasks;

namespace MyApp
{
    internal class Program
    {
        private static void Main(string[] args)
        {
            Console.Write("Enter your name: ");
            string name = Console.ReadLine();
            Console.WriteLine($"Hello {name}!");
        }
    }
}
```

## Async Support

```csharp
// Async top-level statements
await Task.Delay(1000);
Console.WriteLine("Done!");
```
