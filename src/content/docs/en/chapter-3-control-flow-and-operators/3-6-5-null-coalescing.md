---
title: Null Coalescing Operator
sidebar:
  order: 29
  label: 3.6.5 Null coalescing
---

The null coalescing operator `??` returns the left-hand operand if not null, else the right.

## Code

```csharp
string name = null;
string display = name ?? "Guest";
Console.WriteLine(display);
```

## Run the Application

```bash
dotnet run
```

## Result

```shell
Guest
```
