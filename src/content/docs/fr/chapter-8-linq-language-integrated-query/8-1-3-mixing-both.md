---
title: Mélange des deux
sidebar:
  order: 185
  label: 8.1.3 Mélange des deux
---

**Contexte** : Vous pouvez commencer avec la syntaxe de requête, puis passer à la syntaxe de méthode en plaçant la requête entre parenthèses et en appelant des méthodes d’extension.

```csharp
var numbers = new[] { 1, 2, 3, 4, 5, 6 };

var result = (from n in numbers
              where n % 2 == 0
              select n)
              .OrderByDescending(n => n)
              .Take(2);
```

## Quand mélanger

- Utilisez la syntaxe de requête pour le filtrage / jointure principal
- Utilisez la syntaxe de méthode pour les opérations non disponibles en syntaxe de requête (par exemple `Take`, `Skip`, `ToDictionary`)

## Exemple d'utilisation dans le monde réel

**Pagination avec syntaxe de requête** : Écrivez la requête de base en syntaxe de requête, puis ajoutez `.Skip(page * size).Take(size)` avec la syntaxe de méthode.

**Exemple** : Dans [EF Core](https://docs.microsoft.com/en-us/ef/core/querying/), on écrit souvent `from c in context.Customers where c.Active select c` puis on enchaîne avec `.Skip(10).Take(10)`.

## Sections connexes

- [8.1 Syntaxe de requête vs syntaxe de méthode](/fr/chapter-8-linq-language-integrated-query/8-1-query-syntax-vs-method-syntax)
- [8.4 Opérateurs courants](/fr/chapter-8-linq-language-integrated-query/8-4-common-operators)
