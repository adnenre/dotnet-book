---
title: decimal
sidebar:
  order: 14
  label: 2.1.2.3 decimal
---

`decimal` est un type à virgule flottante 128 bits avec 28 à 29 chiffres significatifs, adapté aux calculs monétaires. Utilisez le suffixe `m` ou `M`.

## Code

```csharp
decimal price = 19.99m;
Console.WriteLine($"price = {price}");
```

## Exécution de l'application

```bash
dotnet run
```

## Résultat

```shell
price = 19.99
```
