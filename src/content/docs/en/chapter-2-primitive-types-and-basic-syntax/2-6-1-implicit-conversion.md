---
title: Implicit Conversion
sidebar:
  order: 37
  label: 2.6.1 Implicit conversion
---

Implicit conversions happen automatically when no data loss occurs.

## Code

```csharp
int i = 123;
long l = i; // int to long
double d = i; // int to double
Console.WriteLine($"long: {l}, double: {d}");
```

## Run the Application

```bash
dotnet run
```

## Result

```shell
long: 123, double: 123
```
