---
title: Syntax of Switch Expressions
sidebar:
  order: 12
  label: 3.3.1 syntax
---

A switch expression uses `=>` to map patterns to results.

## Code

```csharp
int number = 5;
string parity = number % 2 == 0 ? "Even" : "Odd";
string description = number
switch
{
    < 0 => "Negative",
    0 => "Zero",
    > 0 => "Positive"
};
Console.WriteLine($"{parity}, {description}");
```

## Run the Application

```bash
dotnet run
```

## Result

```shell
Odd, Positive
```
