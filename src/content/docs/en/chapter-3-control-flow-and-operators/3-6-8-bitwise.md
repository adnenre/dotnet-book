---
title: Bitwise Operators
sidebar:
  order: 32
  label: 3.6.8 Bitwise
---

Bitwise operators: `&` (AND), `|` (OR), `^` (XOR), `~` (NOT), `<<` (left shift), `>>` (right shift).

## Code

```csharp
int a = 6;  // 0110
int b = 3;  // 0011
Console.WriteLine($"a & b = {a & b}"); // 0010 = 2
Console.WriteLine($"a | b = {a | b}"); // 0111 = 7
Console.WriteLine($"a ^ b = {a ^ b}"); // 0101 = 5
```

## Run the Application

```bash
dotnet run
```

## Result

```shell
a & b = 2
a | b = 7
a ^ b = 5
```
