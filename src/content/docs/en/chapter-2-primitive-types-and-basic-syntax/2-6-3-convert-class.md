---
title: Convert Class
sidebar:
  order: 39
  label: 2.6.3 Convert class
---

The `Convert` class provides static methods for type conversion.

## Code

```csharp
string s = "123";
int i = Convert.ToInt32(s);
double d = Convert.ToDouble(s);
Console.WriteLine($"int: {i}, double: {d}");
```

## Run the Application

```bash
dotnet run
```

## Result

```shell
int: 123, double: 123
```
