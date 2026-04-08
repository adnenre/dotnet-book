---
title: Conversion explicite (cast)
sidebar:
  order: 38
  label: 2.6.2 Conversion explicite
---

Les conversions explicites (avec `(type)`) sont nécessaires lorsqu'une perte de données peut se produire.

## Code

```csharp
double d = 123.45;
int i = (int)d; // tronque
Console.WriteLine($"double: {d}, int: {i}");
```

## Exécution de l'application

```bash
dotnet run
```

## Résultat

```shell
double: 123.45, int: 123
```
