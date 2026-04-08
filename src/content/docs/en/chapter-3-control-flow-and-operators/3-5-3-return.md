---
title: return
sidebar:
  order: 22
  label: 3.5.3 return
---

`return` exits the current method, optionally returning a value.

## Code

```csharp
static void PrintNumbers()
{
    for (int i = 1; i <= 5; i++)
    {
        if (i == 3) return;
        Console.WriteLine(i);
    }
}
PrintNumbers();
```

## Run the Application

```bash
dotnet run
```

## Result

```shell
1
2
```
