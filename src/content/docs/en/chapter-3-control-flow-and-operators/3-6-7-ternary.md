---
title: Ternary Operator
sidebar:
  order: 31
  label: 3.6.7 Ternary
---

The ternary operator `condition ? true_value : false_value` returns one of two values.

## Code

```csharp
int age = 20;
string status = age >= 18 ? "Adult" : "Minor";
Console.WriteLine(status);
```

## Run the Application

```bash
dotnet run
```

## Result

```shell
Adult
```
