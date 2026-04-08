---
title: record class
sidebar:
  order: 135
  label: 6.1.1 record class
---

**Contexte** : `record class` (ou simplement `record`) est un type référence qui se comporte comme une classe mais avec une sémantique d’égalité de valeur.

```csharp
// Syntaxe standard
public record class Person
{
    public string FirstName { get; init; }
    public string LastName { get; init; }
}

// Syntaxe positionnelle (le compilateur génère les propriétés init et un déconstructeur)
public record class Employee(string Name, int Id);
```

## Caractéristiques

- Type référence (alloué sur le tas)
- Immuable par défaut (accesseurs `init`)
- Implémente `IEquatable<T>` automatiquement
- Remplace `Equals`, `GetHashCode` et `ToString`

## Exemple d'utilisation dans le monde réel

**Entités de domaine dans l’event sourcing** : Les enregistrements sont utilisés pour représenter des événements (par exemple `UserCreated`, `OrderShipped`) car ils sont immuables et l’égalité repose sur le contenu, non sur l’identité.

**Exemple** : En C#, [`System.Environment`](https://docs.microsoft.com/en-us/dotnet/api/system.environment) n’est pas un enregistrement, mais les enregistrements sont largement utilisés dans les bibliothèques de programmation fonctionnelle comme [LanguageExt](https://github.com/louthy/language-ext).

## Sections connexes

- [6.1 Enregistrements](/fr/chapter-6-advanced-type-system/6-1-records)
- [6.1.2 record struct](/fr/chapter-6-advanced-type-system/6-1-2-record-struct)
