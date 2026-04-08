---
title: Gardes when
sidebar:
  order: 9
  label: 3.2.3 gardes when
---

Utilisez `when` pour ajouter des conditions supplémentaires à un cas.

## Code

```csharp
int number = 15;
switch (number)
{
    case int n when n < 10:
        Console.WriteLine("Less than 10");
        break;
    case int n when n >= 10 && n <= 20:
        Console.WriteLine("Between 10 and 20");
        break;
    default:
        Console.WriteLine("Other");
        break;
}
```

## Exécution de l'application

```bash
dotnet run
```

## Résultat

```shell
Between 10 and 20
```
