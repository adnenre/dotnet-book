---
title: Write Console.WriteLine Hello World
sidebar:
  order: 27
  label: 1.6.2 Write Console.WriteLine Hello World
---

**Context**: `Console.WriteLine()` writes a line to the console. This is the most basic output method in .NET 10.

`Console.WriteLine()` writes a line of text to the console output.

## Basic Usage

Open `Program.cs` and write:

```csharp
Console.WriteLine("Hello World");
```

## Multiple Lines

```csharp
Console.WriteLine("Hello");
Console.WriteLine("World");
Console.WriteLine("From .NET!");
```

## Write Without Newline

```csharp
Console.Write("Hello ");
Console.Write("World");
// Output: "Hello World"
```

## String Interpolation

```csharp
string name = "Alice";
Console.WriteLine($"Hello {name}");
// Output: Hello Alice
```

## Formatting

```csharp
int number = 42;
Console.WriteLine($"Number: {number,10}");  // Right-aligned
Console.WriteLine($"Number: {number,-10}"); // Left-aligned
```
