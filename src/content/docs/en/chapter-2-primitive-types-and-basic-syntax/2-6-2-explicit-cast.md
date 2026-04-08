---
title: Explicit Cast
sidebar:
  order: 38
  label: 2.6.2 Explicit cast
---

Explicit casts (using `(type)`) are required when data loss may occur.

## Code

```csharp
double d = 123.45;
int i = (int)d; // truncates
Console.WriteLine($"double: {d}, int: {i}");
```

## Run the Application

```bash
dotnet run
```

## Result

```shell
double: 123.45, int: 123
```
