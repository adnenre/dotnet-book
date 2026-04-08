---
title: decimal
sidebar:
  order: 14
  label: 2.1.2.3 decimal
---

`decimal` is a 128‑bit floating point type with 28–29 significant digits, suitable for monetary calculations. Use suffix `m` or `M`.

## Code

```csharp
decimal price = 19.99m;
Console.WriteLine($"price = {price}");
```

## Run the Application

```bash
dotnet run
```

## Result

```shell
price = 19.99
```
