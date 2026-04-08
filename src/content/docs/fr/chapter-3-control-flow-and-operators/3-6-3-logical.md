---
title: Opérateurs logiques
sidebar:
  order: 27
  label: 3.6.3 Logiques
---

Opérateurs logiques : `&&` (ET), `||` (OU), `!` (NON).

## Code

```csharp
bool isSunny = true;
bool isWarm = false;
Console.WriteLine(isSunny && isWarm); // False
Console.WriteLine(isSunny || isWarm); // True
Console.WriteLine(!isSunny); // False
```

## Exécution de l'application

```bash
dotnet run
```

## Résultat

```shell
False
True
False
```
