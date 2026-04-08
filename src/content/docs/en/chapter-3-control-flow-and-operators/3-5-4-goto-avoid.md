---
title: goto (avoid)
sidebar:
  order: 23
  label: 3.5.4 goto avoid
---

`goto` jumps to a label. It is rarely used and can make code hard to follow.

## Code

```csharp
int i = 0;
start:
if (i < 3)
{
    Console.WriteLine(i);
    i++;
    goto start;
}
```

## Run the Application

```bash
dotnet run
```

## Result

```shell
0
1
2
```
