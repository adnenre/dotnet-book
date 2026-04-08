---
title: Logical Operators
sidebar:
  order: 27
  label: 3.6.3 Logical
---

Logical operators: `&&` (AND), `||` (OR), `!` (NOT).

## Code

```csharp
bool isSunny = true;
bool isWarm = false;
Console.WriteLine(isSunny && isWarm); // False
Console.WriteLine(isSunny || isWarm); // True
Console.WriteLine(!isSunny); // False
```

## Run the Application

```bash
dotnet run
```

## Result

```shell
False
True
False
```
