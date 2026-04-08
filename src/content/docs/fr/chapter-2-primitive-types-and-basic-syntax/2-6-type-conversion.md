---
title: Conversion de types
sidebar:
  order: 36
  label: 2.6 Conversion de types
---

La conversion de type transforme une valeur d'un type à un autre.

## Code

```csharp
int i = 100;
double d = i; // implicite
int j = (int)d; // explicite
Console.WriteLine($"i={i}, d={d}, j={j}");
```

## Exécution de l'application

```bash
dotnet run
```

## Résultat

```shell
i=100, d=100, j=100
```
