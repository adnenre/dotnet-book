---
title: Définition d’enum
sidebar:
  order: 146
  label: 6.3.1 Définition d’enum
---

**Contexte** : Définissez une énumération avec le mot‑clé `enum`. Par défaut, le premier membre a la valeur 0, et chaque membre suivant s’incrémente de 1.

## Syntaxe

```csharp
[modificateur d'accès] enum NomEnum
{
    Membre1,
    Membre2,
    Membre3
}
```

## Exemple

```csharp
public enum DaysOfWeek
{
    Sunday,    // 0
    Monday,    // 1
    Tuesday,   // 2
    Wednesday, // 3
    Thursday,  // 4
    Friday,    // 5
    Saturday   // 6
}
```

## Exemple d'utilisation dans le monde réel

**Statut de commande** : Définissez une énumération `OrderStatus` avec `Pending`, `Processing`, `Shipped`, `Delivered`, `Cancelled` pour rendre le code auto‑documenté.

**Exemple** : Dans les applications e‑commerce, les énumérations sont souvent utilisées pour les machines à états. Le [pattern State](https://en.wikipedia.org/wiki/State_pattern) peut être combiné avec les énumérations.

## Sections connexes

- [6.3 Énumérations](/fr/chapter-6-advanced-type-system/6-3-enums)
- [6.3.2 Type sous‑jacent](/fr/chapter-6-advanced-type-system/6-3-2-underlying-type)
