---
title: goto (à éviter)
sidebar:
  order: 23
  label: 3.5.4 goto à éviter
---

`goto` saute vers un label. Il est rarement utilisé et peut rendre le code difficile à suivre.

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
