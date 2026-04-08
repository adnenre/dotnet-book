---
title: record struct
sidebar:
  order: 136
  label: 6.1.2 record struct
---

**Contexte** : `record struct` (C# 10+) est un enregistrement de type valeur qui fournit la sémantique de valeur pour les structures.

```csharp
public record struct Point(int X, int Y);
```

## Caractéristiques

- Type valeur (alloué sur la pile)
- Muable par défaut (ajouter `readonly` pour l’immuabilité)
- Fournit les mêmes avantages d’égalité et `ToString` que `record class`

```csharp
public readonly record struct ImmutablePoint(int X, int Y);
var p = new ImmutablePoint(3, 4);
// p.X = 5; // erreur : readonly
```

## Exemple d'utilisation dans le monde réel

**Calculs géométriques** : Utilisez `record struct` pour les petites structures immuables comme `Point`, `Size`, `Rectangle` afin d’éviter les allocations sur le tas et d’obtenir gratuitement l’égalité de valeur.

**Exemple** : Dans .NET, [`System.Drawing.Point`](https://docs.microsoft.com/en-us/dotnet/api/system.drawing.point) est une structure mais pas un enregistrement. Le passer en `record struct` ajouterait la déconstruction et l’égalité.

## Sections connexes

- [6.1 Enregistrements](/fr/chapter-6-advanced-type-system/6-1-records)
- [6.1.1 record class](/fr/chapter-6-advanced-type-system/6-1-1-record-class)
- [6.2 Structures](/fr/chapter-6-advanced-type-system/6-2-structs)
