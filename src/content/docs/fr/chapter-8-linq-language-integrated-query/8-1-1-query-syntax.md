---
title: Syntaxe de requête
sidebar:
  order: 183
  label: 8.1.1 Syntaxe de requête
---

**Contexte** : La syntaxe de requête ressemble au SQL et est souvent plus lisible pour les requêtes complexes impliquant des jointures, des regroupements et des clauses `let`.

## Structure de base

```csharp
var result = from item in source
             where condition
             select item;
```

## Exemple

```csharp
var fruits = new[] { "pomme", "banane", "cerise", "datte" };
var longNames = from f in fruits
                where f.Length > 5
                select f.ToUpper();
```

## Clause `let`

```csharp
var query = from n in numbers
            let square = n * n
            where square > 10
            select new { n, square };
```

## Exemple d'utilisation dans le monde réel

**Requêtes de reporting** : Lors de la génération de rapports à partir de multiples sources de données, la syntaxe de requête avec jointures et regroupements est plus intuitive.

**Exemple** : Dans [LINQ to XML](https://docs.microsoft.com/en-us/dotnet/standard/linq/linq-xml-overview), la syntaxe de requête est courante pour extraire des éléments.

## Sections connexes

- [8.1 Syntaxe de requête vs syntaxe de méthode](/fr/chapter-8-linq-language-integrated-query/8-1-query-syntax-vs-method-syntax)
- [8.1.2 Syntaxe de méthode](/fr/chapter-8-linq-language-integrated-query/8-1-2-method-syntax)
