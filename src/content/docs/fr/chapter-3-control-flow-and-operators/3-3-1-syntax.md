---
title: Syntaxe des expressions switch
sidebar:
  order: 12
  label: 3.3.1 syntaxe
---

Une expression switch utilise `=>` pour associer des motifs à des résultats.

## Code

```csharp
int number = 5;
string parity = number % 2 == 0 ? "Even" : "Odd";
string description = number switch
{
    < 0 => "Negative",
    0 => "Zero",
    > 0 => "Positive"
};
Console.WriteLine($"{parity}, {description}");
```

## Exécution de l'application

```bash
dotnet run
```

## Résultat

```shell
Odd, Positive
```
