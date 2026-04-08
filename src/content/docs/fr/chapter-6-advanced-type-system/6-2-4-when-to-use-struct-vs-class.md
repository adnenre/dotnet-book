---
title: Quand utiliser struct vs class
sidebar:
  order: 144
  label: 6.2.4 Quand utiliser struct vs class
---

**Contexte** : Le choix entre struct et class dépend de l’utilisation prévue, de la taille et des besoins de comportement.

## Utilisez une `struct` quand :

- L’instance est petite (≤ 16 octets typiquement)
- Le type est immuable (ou doit avoir une sémantique de valeur)
- Vous avez besoin d’égalité de valeur (les copies sont indépendantes)
- Les performances nécessitent une allocation sur la pile (ex. nombreuses instances de courte durée)
- Le type est utilisé dans des chemins critiques pour la performance

## Utilisez une `class` quand :

- Le type est grand (> 16 octets)
- Vous avez besoin de sémantique de référence (partage, identité)
- L’héritage est requis
- Vous devez utiliser le type avec des vérifications `null` (types référence)
- L’objet sera fréquemment stocké dans des collections (coût du boxing pour les structures)

## Lignes directrices

| Fonctionnalité     | Struct                | Class                  |
| ------------------ | --------------------- | ---------------------- |
| Type               | Type valeur           | Type référence         |
| Allocation         | Pile / en ligne       | Tas                    |
| Héritage           | Non (sauf interfaces) | Oui                    |
| Égalité par défaut | Basée sur la valeur   | Basée sur la référence |
| Nullable           | `Nullable<T>` ou `T?` | Directement `null`     |

```csharp
// Bon candidat struct : petit, immuable, sémantique de valeur
public readonly struct Point(int X, int Y);

// Bon candidat class : grand, muable, besoin d’identité
public class Customer
{
    public int Id { get; set; }
    public string Name { get; set; }
    // ...
}
```

## Exemple d'utilisation dans le monde réel

**Entités de base de données** : Utilisez des classes car elles ont une identité (clé primaire) et sont souvent grandes. **Les objets valeur** (comme `Money`, `Address`) sont mieux implémentés en tant que structures ou enregistrements.

**Exemple** : Dans [Entity Framework Core](https://docs.microsoft.com/en-us/ef/core/), les entités sont des classes. Les objets valeur peuvent être implémentés comme `struct` ou `record struct`.

## Sections connexes

- [6.2 Structures](/fr/chapter-6-advanced-type-system/6-2-structs)
- [6.1 Enregistrements](/fr/chapter-6-advanced-type-system/6-1-records)
