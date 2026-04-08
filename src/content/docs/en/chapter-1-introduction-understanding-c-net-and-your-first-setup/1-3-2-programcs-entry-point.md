---
title: Program.cs entry point
sidebar:
  order: 12
  label: 1.3.2 Program.cs entry point
---

`Program.cs` contains the entry point of your .NET application—the code that runs first when the application starts.

## Traditional Main Method

```csharp
using System;

namespace MyApp
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");
        }
    }
}
```

## Top-Level Statements (C# 9+)

```csharp
// No namespace, no class, no Main method
Console.WriteLine("Hello World!");
```

## Command-Line Arguments

```csharp
// With top-level statements
if (args.Length > 0)
{
    Console.WriteLine($"Hello {args[0]}!");
}
```
