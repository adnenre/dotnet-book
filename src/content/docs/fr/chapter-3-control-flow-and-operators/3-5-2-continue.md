---
title: continue
sidebar:
  order: 21
  label: 3.5.2 continue
---

`continue` saute le reste de l'itération en cours et passe à la suivante.

## Code

```csharp
for (int i = 1; i <= 5; i++)
{
    if (i == 3) continue;
    Console.WriteLine(i);
}
```

## Exécution de l'application

```bash
dotnet run
```

## Résultat

```shell
1
2
4
5
```
