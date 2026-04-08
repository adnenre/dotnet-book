---
title: Contrôle de boucle
sidebar:
  order: 19
  label: 3.5 Contrôle de boucle
---

Instructions qui modifient le déroulement normal d'une boucle.

## Code

```csharp
for (int i = 0; i < 10; i++)
{
    if (i == 5) break;
    Console.Write($"{i} ");
}
```

## Exécution de l'application

```bash
dotnet run
```

## Résultat

```shell
0 1 2 3 4
```
