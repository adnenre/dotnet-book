---
title: switch with Pattern Matching (C# 7+)
sidebar:
  order: 8
  label: 3.2.2 switch with pattern matching C# 7 and later
---

Pattern matching allows switching on type and other patterns.

## Code

```csharp
object obj = 42;
switch (obj)
{
    case int i:
        Console.WriteLine($"Integer: {i}");
        break;
    case string s:
        Console.WriteLine($"String: {s}");
        break;
    default:
        Console.WriteLine("Unknown type");
        break;
}
```

## Run the Application

```bash
dotnet run
```

## Result

```shell
Integer: 42
```
