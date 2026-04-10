---
title: Syntaxe de requête vs syntaxe de méthode
sidebar:
  order: 182
  label: 8.1 Syntaxe de requête vs syntaxe de méthode
---

**Contexte** : Language Integrated Query (LINQ) est un ensemble de fonctionnalités en C# qui permet d’écrire des requêtes déclaratives contre des collections, des bases de données, du XML et d’autres sources de données. LINQ rend le code plus lisible, type‑sécurisé et expressif.

## Qu’est‑ce que LINQ et pourquoi l’utiliser ?

LINQ (Language Integrated Query) a été introduit en C# 3.0 (.NET Framework 3.5). Il permet d’interroger des données directement en C# avec une syntaxe proche du SQL, mais intégrée au langage. Les avantages sont :

- **Vérification des types à la compilation** – évite les erreurs à l’exécution.
- **Support IntelliSense** – autocomplétion des expressions de requête.
- **Syntaxe unifiée** – les mêmes modèles de requête fonctionnent sur les tableaux, listes, XML, bases de données, etc.
- **Style déclaratif** – vous dites _ce que_ vous voulez, pas _comment_ l’obtenir.

Cas d’usage courants : filtrage, tri, regroupement, jointure, agrégation, transformation de données.

## Comment commencer à utiliser LINQ

LINQ est intégré à .NET. Pour utiliser LINQ to Objects (requêtes sur des collections en mémoire), il suffit d’ajouter l’espace de noms `System.Linq`. Aucun package NuGet supplémentaire n’est nécessaire pour LINQ de base.

```csharp
// Ajoutez ceci en haut de votre fichier C#
using System.Linq;
```

Une fois `using System.Linq;` ajouté, tous les types qui implémentent `IEnumerable<T>` (tableaux, `List<T>`, `Dictionary<TKey, TValue>`, etc.) gagnent des méthodes d’extension comme `Where`, `Select`, `OrderBy`, `GroupBy`, etc. Vous pouvez également utiliser la syntaxe de requête sans aucun import supplémentaire (le compilateur la traduit en appels de méthodes).

**Configuration requise pour le projet** : Tout projet .NET (console, web, bibliothèque de classes) ciblant .NET Core 3.0+ ou .NET Framework 3.5+ supporte LINQ. Pour les versions plus anciennes, LINQ est disponible via la référence d’assembly `System.Core`.

```csharp
// Exemple : programme complet utilisant LINQ
using System;
using System.Linq;

class Program
{
    static void Main()
    {
        int[] numbers = { 1, 2, 3, 4, 5 };
        var even = numbers.Where(n => n % 2 == 0);
        Console.WriteLine(string.Join(", ", even)); // 2,4
    }
}
```

## Syntaxe de requête vs syntaxe de méthode

LINQ offre deux façons équivalentes d’écrire des requêtes : la **syntaxe de requête** (proche du SQL) et la **syntaxe de méthode** (API fluide avec expressions lambda).

```csharp
int[] numbers = { 1, 2, 3, 4, 5 };

// Syntaxe de requête (déclarative)
var evenQuery = from n in numbers
                where n % 2 == 0
                select n;

// Syntaxe de méthode (fluide)
var evenMethod = numbers.Where(n => n % 2 == 0);
```

Les deux produisent le même résultat. La syntaxe de requête est souvent plus lisible pour les requêtes complexes impliquant des jointures, des regroupements et des clauses `let`. La syntaxe de méthode est plus flexible et supporte tous les opérateurs LINQ (certains opérateurs comme `Take`, `Skip`, `ToDictionary` n’ont pas d’équivalent en syntaxe de requête).

## Exemple d'utilisation dans le monde réel

**Approches mixtes dans les projets réels** : Les développeurs utilisent souvent la syntaxe de requête pour les requêtes complexes avec jointures et regroupements (plus lisible), et la syntaxe de méthode pour les filtres simples, projections et opérations non disponibles en syntaxe de requête (par exemple `Take`, `Skip`, `ToDictionary`).

**Documentation officielle** :

- [Aperçu de LINQ](https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/concepts/linq/)
- [Comparaison entre syntaxe de requête et syntaxe de méthode](https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/concepts/linq/query-syntax-and-method-syntax-in-linq)
- [Espace de noms System.Linq](https://docs.microsoft.com/en-us/dotnet/api/system.linq)
- [LINQ avec Entity Framework Core](https://docs.microsoft.com/en-us/ef/core/querying/)

## Sections connexes

- [8.1.1 Syntaxe de requête](/fr/chapter-8-linq-language-integrated-query/8-1-1-query-syntax)
- [8.1.2 Syntaxe de méthode](/fr/chapter-8-linq-language-integrated-query/8-1-2-method-syntax)
- [8.1.3 Mélange des deux](/fr/chapter-8-linq-language-integrated-query/8-1-3-mixing-both)
