---
title: Types à virgule flottante
sidebar:
  order: 11
  label: 2.1.2 Types à virgule flottante
---

Les types à virgule flottante représentent les nombres avec partie fractionnaire. Ils incluent `float`, `double` et `decimal`.

## Code

```csharp
float f = 3.14159f;
double d = 3.14159265358979;
decimal m = 123.456789m;
Console.WriteLine($"float: {f}, double: {d}, decimal: {m}");
```

## Exécution de l'application

```bash
dotnet run
```

## Résultat

```shell
float: 3.14159, double: 3.14159265358979, decimal: 123.456789
```
