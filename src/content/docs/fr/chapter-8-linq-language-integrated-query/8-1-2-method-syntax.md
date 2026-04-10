---
title: Syntaxe de méthode
sidebar:
  order: 184
  label: 8.1.2 Syntaxe de méthode
---

**Contexte** : La syntaxe de méthode utilise des méthodes d’extension comme `Where`, `Select`, `OrderBy` avec des expressions lambda. Elle est plus flexible et fonctionne avec tous les opérateurs.

## Structure de base

```csharp
var result = source.Where(item => condition).Select(item => expression);
```

## Exemple

```csharp
var fruits = new[] { "pomme", "banane", "cerise", "datte" };
var longNames = fruits.Where(f => f.Length > 5)
                      .Select(f => f.ToUpper());
```

## Enchaînement de plusieurs opérateurs

```csharp
var result = numbers.Where(n => n > 2)
                    .OrderBy(n => n)
                    .Select(n => n * 2);
```

## Exemple d'utilisation dans le monde réel

**Pipelines de transformation de données** : La syntaxe de méthode est préférée dans les pipelines de programmation fonctionnelle (par exemple, processus ETL).

**Exemple** : Dans [ASP.NET Core](https://docs.microsoft.com/en-us/aspnet/core/), la syntaxe de méthode est largement utilisée avec `IQueryable` pour les requêtes de base de données.

## Sections connexes

- [8.1 Syntaxe de requête vs syntaxe de méthode](/fr/chapter-8-linq-language-integrated-query/8-1-query-syntax-vs-method-syntax)
- [8.1.1 Syntaxe de requête](/fr/chapter-8-linq-language-integrated-query/8-1-1-query-syntax)
