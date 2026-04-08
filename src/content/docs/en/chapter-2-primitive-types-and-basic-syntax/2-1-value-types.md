---
title: Value Types
sidebar:
  order: 1
  label: 2.1 Value types
---

Value types store data directly on the stack. When you assign a value type to another variable, a copy is made.

## Code

```csharp
int a = 10;
int b = a; // copy
b = 20;
Console.WriteLine($"a: {a}, b: {b}");
```

## Run the Application

```bash
dotnet run
```

## Result

```shell
a: 10, b: 20
```
