---
title: break
sidebar:
  order: 20
  label: 3.5.1 break
---

`break` immediately exits the nearest enclosing loop or switch.

## Code

```csharp
for (int i = 1; i <= 10; i++)
{
    if (i == 4) break;
    Console.WriteLine(i);
}
```

## Run the Application

```bash
dotnet run
```

## Result

```shell
1
2
3
```
