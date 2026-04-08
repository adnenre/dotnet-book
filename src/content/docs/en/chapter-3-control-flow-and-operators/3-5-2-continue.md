---
title: continue
sidebar:
  order: 21
  label: 3.5.2 continue
---

`continue` skips the rest of the current iteration and moves to the next.

## Code

```csharp
for (int i = 1; i <= 5; i++)
{
    if (i == 3) continue;
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
4
5
```
