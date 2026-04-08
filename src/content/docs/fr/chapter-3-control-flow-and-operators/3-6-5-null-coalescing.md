---
title: Opérateur de coalescence nulle
sidebar:
  order: 29
  label: 3.6.5 Null coalescing
---

L'opérateur de coalescence nulle `??` retourne l'opérande de gauche s'il n'est pas nul, sinon celui de droite.

## Code

```csharp
string name = null;
string display = name ?? "Guest";
Console.WriteLine(display);
```

## Exécution de l'application

```bash
dotnet run
```

## Résultat

```shell
Guest
```
