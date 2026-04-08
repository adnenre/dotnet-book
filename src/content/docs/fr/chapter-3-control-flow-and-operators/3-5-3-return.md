---
title: return
sidebar:
  order: 22
  label: 3.5.3 return
---

`return` quitte la méthode en cours, retournant éventuellement une valeur.

## Code

```csharp
static void PrintNumbers()
{
    for (int i = 1; i <= 5; i++)
    {
        if (i == 3) return;
        Console.WriteLine(i);
    }
}
PrintNumbers();
```

## Exécution de l'application

```bash
dotnet run
```

## Résultat

```shell
1
2
```
