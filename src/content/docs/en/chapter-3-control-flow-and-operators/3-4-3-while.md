---
title: while Loop
sidebar:
  order: 17
  label: 3.4.3 while
---

The `while` loop repeats as long as the condition is true.

## Code

```csharp
int counter = 0;
while (counter < 3)
{
    Console.WriteLine($"Count: {counter}");
    counter++;
}
```

## Run the Application

```bash
dotnet run
```

## Result

```shell
Count: 0
Count: 1
Count: 2
```
