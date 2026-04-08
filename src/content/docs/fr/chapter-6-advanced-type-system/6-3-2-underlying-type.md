---
title: Type sous‑jacent
sidebar:
  order: 147
  label: 6.3.2 Type sous‑jacent
---

**Contexte** : Les énumérations ont un type entier sous‑jacent (par défaut `int`). Vous pouvez le changer en `byte`, `sbyte`, `short`, `ushort`, `int`, `uint`, `long` ou `ulong`.

```csharp
public enum SmallEnum : byte
{
    Zero = 0,
    One = 1,
    Max = 255
}
```

## Spécification du type sous‑jacent

```csharp
public enum FileMode : uint
{
    Read = 1,
    Write = 2,
    ReadWrite = 3
}
```

## Exemple d'utilisation dans le monde réel

**Applications sensibles à la mémoire** : Utilisez `byte` comme type sous‑jacent pour les énumérations de moins de 256 valeurs afin d’économiser la mémoire lorsqu’elles sont stockées dans de grands tableaux.

**Exemple** : Dans le développement de jeux, une énumération `WeaponType : byte` réduit l’empreinte mémoire pour des milliers d’ennemis. [`Enum.GetUnderlyingType`](https://docs.microsoft.com/en-us/dotnet/api/system.enum.getunderlyingtype) peut être utilisé pour inspecter le type.

## Sections connexes

- [6.3 Énumérations](/fr/chapter-6-advanced-type-system/6-3-enums)
- [6.3.1 Définition d’enum](/fr/chapter-6-advanced-type-system/6-3-1-enum-definition)
