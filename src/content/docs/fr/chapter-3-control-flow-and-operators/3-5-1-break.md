---
title: break
sidebar:
  order: 20
  label: 3.5.1 break
---

`break` quitte immédiatement la boucle ou l'instruction switch la plus proche.

## Code

```csharp
for (int i = 1; i <= 10; i++)
{
    if (i == 4) break;
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
3
```
