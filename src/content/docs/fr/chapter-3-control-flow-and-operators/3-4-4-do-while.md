---
title: Boucle do-while
sidebar:
  order: 18
  label: 3.4.4 do while
---

`do-while` exécute le bloc au moins une fois, puis se répète si la condition est vraie.

## Code

```csharp
int number = 0;
do
{
    Console.WriteLine(number);
    number++;
} while (number < 3);
```

## Exécution de l'application

```bash
dotnet run
```

## Résultat

```shell
0
1
2
```
