---
title: Opérateurs bit à bit
sidebar:
  order: 32
  label: 3.6.8 Binaires
---

Opérateurs bit à bit : `&` (ET), `|` (OU), `^` (OU exclusif), `~` (NON), `<<` (décalage gauche), `>>` (décalage droit).

## Code

```csharp
int a = 6;  // 0110
int b = 3;  // 0011
Console.WriteLine($"a & b = {a & b}"); // 0010 = 2
Console.WriteLine($"a | b = {a | b}"); // 0111 = 7
Console.WriteLine($"a ^ b = {a ^ b}"); // 0101 = 5
```

## Exécution de l'application

```bash
dotnet run
```

## Résultat

```shell
a & b = 2
a | b = 7
a ^ b = 5
```
