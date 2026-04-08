---
title: Loop Control
sidebar:
  order: 19
  label: 3.5 Loop control
---

Statements that alter the normal flow of a loop.

## Code

```csharp
for (int i = 0; i < 10; i++)
{
    if (i == 5) break;
    Console.Write($"{i} ");
}
```

## Run the Application

```bash
dotnet run
```

## Result

```shell
0 1 2 3 4
```
