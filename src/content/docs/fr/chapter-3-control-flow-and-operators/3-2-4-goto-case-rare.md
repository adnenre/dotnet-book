---
title: goto case (rare)
sidebar:
  order: 10
  label: 3.2.4 goto case rare
---

`goto case` peut transférer le contrôle vers un autre label de cas (rarement utilisé).

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

## Exécution de l'application

```bash
dotnet run
```

## Résultat

```shell
Option 2
Option 3
```
