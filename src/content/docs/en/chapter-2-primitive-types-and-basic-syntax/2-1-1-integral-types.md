---
title: Integral Types
sidebar:
  order: 2
  label: 2.1.1 Integral types
---

Integral types represent whole numbers. They differ in size and range.

## Code

```csharp
sbyte sb = 100;
byte b = 255;
short sh = 30000;
ushort us = 60000;
int i = 1234567890;
uint ui = 4000000000;
long l = 9223372036854775807;
ulong ul = 18446744073709551615;
Console.WriteLine($"int max: {int.MaxValue}");
```

## Run the Application

```bash
dotnet run
```

## Result

```shell
int max: 2147483647
```
