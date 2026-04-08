---
title: else if Chain
sidebar:
  order: 3
  label: 3.1.2 else if chain
---

Use `else if` to test multiple conditions.

## Code

```csharp
int score = 85;
if (score >= 90)
Console.WriteLine("A");
else if (score >= 80)
Console.WriteLine("B");
else if (score >= 70)
Console.WriteLine("C");
else
Console.WriteLine("F");
```

## Run the Application

```bash
dotnet run
```

## Result

```shell
B
```
