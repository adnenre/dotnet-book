---
title: Motif d'abandon (_)
sidebar:
  order: 13
  label: 3.3.2 modèle d'abandon
---

Le motif d'abandon `_` correspond à n'importe quelle valeur et est utilisé par défaut.

## Code

```csharp
int score = 85;
string grade = score switch
{
    >= 90 => "A",
    >= 80 => "B",
    >= 70 => "C",
    _ => "F"
};
Console.WriteLine(grade);
```

## Exécution de l'application

```bash
dotnet run
```

## Résultat

```shell
B
```
