---
title: Motif de propriété
sidebar:
  order: 158
  label: 6.5.3 Motif de propriété
---

**Contexte** : Le motif de propriété fait correspondre les propriétés d’un objet à des motifs imbriqués.

```csharp
public class Point
{
    public int X { get; set; }
    public int Y { get; set; }
}

Point p = new Point { X = 10, Y = 20 };
if (p is { X: 10, Y: 20 })
{
    Console.WriteLine("Point (10,20)");
}
```

## Dans une expression switch

```csharp
string quadrant = p switch
{
    { X: > 0, Y: > 0 } => "Q1",
    { X: < 0, Y: > 0 } => "Q2",
    { X: < 0, Y: < 0 } => "Q3",
    { X: > 0, Y: < 0 } => "Q4",
    _ => "Sur un axe"
};
```

## Exemple d'utilisation dans le monde réel

**Règles de validation** : Utilisez le motif de propriété dans une expression `switch` pour valider des objets complexes sans multiples instructions `if`.

**Exemple** : Dans [FluentValidation](https://docs.fluentvalidation.net/), vous pourriez implémenter des règles personnalisées en utilisant le motif de propriété.

## Sections connexes

- [6.5 Filtrage par motif](/fr/chapter-6-advanced-type-system/6-5-pattern-matching)
- [6.5.4 Motif positionnel](/fr/chapter-6-advanced-type-system/6-5-4-positional-pattern)
