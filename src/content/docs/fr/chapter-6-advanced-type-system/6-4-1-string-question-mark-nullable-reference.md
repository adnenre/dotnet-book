---
title: string point d’interrogation référence nullable
sidebar:
  order: 151
  label: 6.4.1 string point d’interrogation référence nullable
---

**Contexte** : Ajoutez `?` à un type référence pour indiquer qu’il peut être `null`. Sans `?`, le type est considéré comme non nullable.

```csharp
#nullable enable
string? maybeNull = null;   // autorisé
string notNull = "text";
notNull = maybeNull;        // avertissement
```

## Paramètres de méthode et types de retour

```csharp
public string? FindName(int id) => id == 0 ? null : "John";
public void Process(string name) { }
// L’appel Process(FindName(0)) -> avertissement : argument possiblement null
```

## Exemple d'utilisation dans le monde réel

**Résultats de requête de base de données** : Une méthode qui recherche un utilisateur par ID retourne `User?` (nullable) car l’utilisateur peut ne pas exister. Cela force l’appelant à gérer le cas null.

**Exemple** : Dans [Entity Framework Core](https://docs.microsoft.com/en-us/ef/core/), `FirstOrDefault()` retourne `T?` (nullable) pour les types référence.

## Sections connexes

- [6.4 Types référence nullables](/fr/chapter-6-advanced-type-system/6-4-nullable-reference-types)
- [6.4.3 Opérateur de suppression de null](/fr/chapter-6-advanced-type-system/6-4-3-null-forgiving-operator)
