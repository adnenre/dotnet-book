---
title: struct
sidebar:
  order: 141
  label: 6.2.1 struct
---

**Contexte** : Une `struct` est un type valeur qui peut encapsuler des données et un comportement. Contrairement aux classes, les structures ne supportent pas l’héritage.

## Structure basique

```csharp
public struct Rectangle
{
    public double Width;
    public double Height;

    public double Area() => Width * Height;
}
```

## Constructeurs

Une structure peut avoir des constructeurs paramétrés. Le constructeur sans paramètre n’est pas autorisé (C# 10+ l’autorise sous certaines conditions).

```csharp
public struct Color
{
    public byte R, G, B;
    public Color(byte r, byte g, byte b) => (R, G, B) = (r, g, b);
}
```

## Exemple d'utilisation dans le monde réel

**Types numériques haute performance** : Utilisez des structures pour les nombres complexes, les fractions ou les montants monétaires afin de réduire les allocations sur le tas dans les boucles serrées.

**Exemple** : Dans .NET, [`System.Decimal`](https://docs.microsoft.com/en-us/dotnet/api/system.decimal) est une structure. Elle fournit des opérations arithmétiques avec sémantique de valeur.

## Sections connexes

- [6.2 Structures](/fr/chapter-6-advanced-type-system/6-2-structs)
- [6.2.2 readonly struct](/fr/chapter-6-advanced-type-system/6-2-2-readonly-struct)
