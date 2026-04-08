---
title: Conversion implicite
sidebar:
  order: 37
  label: 2.6.1 Conversion implicite
---

Les conversions implicites se produisent automatiquement lorsqu'aucune perte de données n'a lieu.

## Code

```csharp
int i = 123;
long l = i; // int vers long
double d = i; // int vers double
Console.WriteLine($"long: {l}, double: {d}");
```

## Exécution de l'application

```bash
dotnet run
```

## Résultat

```shell
long: 123, double: 123
```
