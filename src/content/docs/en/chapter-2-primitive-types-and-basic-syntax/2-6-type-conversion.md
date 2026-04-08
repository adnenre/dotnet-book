---
title: Type Conversion
sidebar:
  order: 36
  label: 2.6 Type conversion
---

Type conversion changes a value from one type to another.

## Code

```csharp
int i = 100;
double d = i; // implicit
int j = (int)d; // explicit
Console.WriteLine($"i={i}, d={d}, j={j}");
```

## Run the Application

```bash
dotnet run
```

## Result

```shell
i=100, d=100, j=100
```
