---
title: goto case (rare)
sidebar:
  order: 10
  label: 3.2.4 goto case rare
---

`goto case` can transfer control to another case label (rarely used).

## Code

```csharp
int option = 2;
switch (option)
{
    case 1:
        Console.WriteLine("Option 1");
        break;
    case 2:
        Console.WriteLine("Option 2");
        goto case 3;
    case 3:
        Console.WriteLine("Option 3");
        break;
}
```

## Run the Application

```bash
dotnet run
```

## Result

```shell
Option 2
Option 3
```
