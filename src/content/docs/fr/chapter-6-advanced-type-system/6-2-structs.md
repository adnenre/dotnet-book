---
title: Structures (struct)
sidebar:
  order: 140
  label: 6.2 Structures (struct)
---

**Contexte** : Les structures sont des types valeurs qui peuvent contenir des données et des méthodes. Elles conviennent aux objets petits et légers.

Les structures sont allouées sur la pile (ou en ligne dans les objets du tas) et sont copiées lors de l’affectation.

```csharp
public struct Point
{
    public int X;
    public int Y;
    public Point(int x, int y) { X = x; Y = y; }
}
```

## Exemple d'utilisation dans le monde réel

**Mathématiques vectorielles dans le développement de jeux** : Utilisez des structures pour `Vector2`, `Vector3`, `Matrix4x4` afin d’éviter la charge du garbage collector et d’améliorer les performances.

**Exemple** : Dans [Unity](https://docs.unity3d.com/ScriptReference/Vector3.html), `Vector3` est une structure. Dans .NET, [`System.Numerics.Vector3`](https://docs.microsoft.com/en-us/dotnet/api/system.numerics.vector3) est également une structure.

## Sections connexes

- [6.2.1 struct](/fr/chapter-6-advanced-type-system/6-2-1-struct)
- [6.2.2 readonly struct](/fr/chapter-6-advanced-type-system/6-2-2-readonly-struct)
- [6.2.3 ref struct](/fr/chapter-6-advanced-type-system/6-2-3-ref-struct)
