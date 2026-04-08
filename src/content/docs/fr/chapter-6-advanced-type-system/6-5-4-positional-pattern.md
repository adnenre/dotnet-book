---
title: Motif positionnel
sidebar:
  order: 159
  label: 6.5.4 Motif positionnel
---

**Contexte** : Le motif positionnel utilise la déconstruction pour faire correspondre les membres d’un objet de manière positionnelle.

```csharp
public record Point(int X, int Y);

Point p = new Point(3, 4);
if (p is (3, 4))
{
    Console.WriteLine("Point (3,4)");
}
```

## Avec déconstruction

```csharp
if (p is (var x, var y))
{
    Console.WriteLine($"X={x}, Y={y}");
}
```

## Exemple d'utilisation dans le monde réel

**Correspondance de systèmes de coordonnées** : Utilisez le motif positionnel pour faire correspondre des points dans une grille 2D ou pour extraire des coordonnées dans un jeu.

**Exemple** : Dans le [lancer de rayons](<https://en.wikipedia.org/wiki/Ray_tracing_(graphics)>), vous pouvez faire correspondre l’origine et la direction d’un rayon à l’aide de motifs positionnels.

## Sections connexes

- [6.5 Filtrage par motif](/fr/chapter-6-advanced-type-system/6-5-pattern-matching)
- [6.5.3 Motif de propriété](/fr/chapter-6-advanced-type-system/6-5-3-property-pattern)
