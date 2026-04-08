---
title: Égalité basée sur la valeur
sidebar:
  order: 139
  label: 6.1.5 Égalité basée sur la valeur
---

**Contexte** : Les enregistrements comparent tous leurs membres pour l’égalité, pas l’égalité de référence. Deux instances d’enregistrement sont égales si toutes leurs propriétés correspondent.

```csharp
public record Point(int X, int Y);

var p1 = new Point(1, 2);
var p2 = new Point(1, 2);
Console.WriteLine(p1 == p2); // True
Console.WriteLine(ReferenceEquals(p1, p2)); // False
```

## Comment cela fonctionne

Les enregistrements remplacent `Equals(object)` et `GetHashCode()` pour considérer tous les champs/propriétés. Ils implémentent également `IEquatable<T>`.

## Égalité pour record struct

Même sémantique de valeur, mais `record struct` utilise l’égalité structurelle similaire à `record class`.

## Exemple d'utilisation dans le monde réel

**Tests unitaires** : L’égalité de valeur simplifie les assertions car vous pouvez comparer directement les instances attendues et réelles sans comparer chaque propriété.

**Exemple** : Dans [xUnit](https://xunit.net/), `Assert.Equal(attendu, actuel)` fonctionne immédiatement pour les enregistrements. Pas besoin d’écrire des comparateurs d’égalité personnalisés.

## Sections connexes

- [6.1 Enregistrements](/fr/chapter-6-advanced-type-system/6-1-records)
- [6.1.2 record struct](/fr/chapter-6-advanced-type-system/6-1-2-record-struct)
