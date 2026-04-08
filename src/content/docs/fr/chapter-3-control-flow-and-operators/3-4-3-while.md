---
title: Boucle while
sidebar:
  order: 17
  label: 3.4.3 while
---

La boucle `while` se répète tant que la condition est vraie.

## Code

```csharp
int counter = 0;
while (counter < 3)
{
    Console.WriteLine($"Count: {counter}");
    counter++;
}
```

## Exécution de l'application

```bash
dotnet run
```

## Résultat

```shell
Count: 0
Count: 1
Count: 2
```
