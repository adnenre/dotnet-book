---
title: Comparaison avec les lambdas
sidebar:
  order: 180
  label: 7.4.2 Comparaison avec les lambdas
---

**Contexte** : Les lambdas sont plus concises et plus expressives que les méthodes anonymes. Elles sont la manière privilégiée d’écrire des fonctions en ligne en C# moderne.

## Comparaison de syntaxe

```csharp
// Méthode anonyme
Func<int, int> anon = delegate(int x) { return x * x; };

// Expression lambda
Func<int, int> lambda = x => x * x;
```

## Fonctionnalités exclusives aux lambdas

- Conversion en arbre d’expressions (`Expression<Func<T>>`)
- Inférence de type naturelle
- Syntaxe plus courte pour les corps à une seule expression

```csharp
Expression<Func<int, int>> expr = x => x * x; // fonctionne uniquement avec lambda
```

## Quand utiliser les méthodes anonymes

- Vous devez omettre les paramètres (délégué sans paramètres mais acceptant n’importe lequel)
- Vous ciblez C# 2.0

```csharp
Action act = delegate { Console.WriteLine("Pas de paramètres"); };
// La lambda nécessiterait () => ...
```

## Exemple d'utilisation dans le monde réel

**Code .NET moderne** : Privilégiez toujours les lambdas. Les méthodes anonymes ne sont utilisées que pour la rétrocompatibilité.

**Exemple** : La [documentation Microsoft](https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/statements-expressions-operators/anonymous-functions) recommande les lambdas pour les nouveaux développements.

## Sections connexes

- [7.4 Fonctions anonymes](/fr/chapter-7-delegates-events-and-lambdas/7-4-anonymous-functions)
- [7.3 Expressions lambda](/fr/chapter-7-delegates-events-and-lambdas/7-3-lambda-expressions)
