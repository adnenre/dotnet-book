---
title: do-while Loop
sidebar:
  order: 18
  label: 3.4.4 do while
---

`do-while` executes the block at least once, then repeats if condition is true.

## Code

```csharp
int number = 0;
do
{
    Console.WriteLine(number);
    number++;
} while (number < 3);
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
