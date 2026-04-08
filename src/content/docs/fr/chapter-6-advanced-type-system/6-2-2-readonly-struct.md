---
title: readonly struct
sidebar:
  order: 142
  label: 6.2.2 readonly struct
---

**Contexte** : `readonly struct` indique que la structure est immuable. Tous les champs d’instance doivent être readonly, et le compilateur applique l’immuabilité.

```csharp
public readonly struct Vector
{
    public double X { get; }
    public double Y { get; }
    public Vector(double x, double y) => (X, Y) = (x, y);
    public double Length => Math.Sqrt(X * X + Y * Y);
}
```

## Avantages

- Intention claire : cette structure ne peut pas être modifiée après sa création
- Performance : le compilateur peut éviter les copies défensives
- Thread‑safe par conception

## Membres `readonly`

Même si la structure n’est pas readonly, vous pouvez marquer certaines méthodes comme `readonly` pour empêcher toute modification.

```csharp
public struct Point
{
    public int X, Y;
    public readonly double DistanceFromOrigin() => Math.Sqrt(X * X + Y * Y);
}
```

## Exemple d'utilisation dans le monde réel

**Paramètres immuables** : Utilisez `readonly struct` pour les valeurs de configuration qui ne changent jamais (ex. `AppConstants` avec `double Pi`, `int MaxRetries`).

**Exemple** : Dans [System.Text.Json](https://docs.microsoft.com/en-us/dotnet/standard/serialization/system-text-json-overview), les options de sérialisation peuvent être des structures readonly pour des performances optimales.

## Sections connexes

- [6.2 Structures](/fr/chapter-6-advanced-type-system/6-2-structs)
- [6.2.1 struct](/fr/chapter-6-advanced-type-system/6-2-1-struct)
