---
title: Type Inference with var
sidebar:
  order: 24
  label: 2.3.3 Type inference with var
---

The `var` keyword lets the compiler infer the type from the initialisation expression.

## Code

```csharp
var number = 10; // int
var text = "Hi"; // string
var pi = 3.14; // double
Console.WriteLine($"{number}, {text}, {pi}");
```

## Run the Application

```bash
dotnet run
```

## Result

```shell
10, Hi, 3.14
```
