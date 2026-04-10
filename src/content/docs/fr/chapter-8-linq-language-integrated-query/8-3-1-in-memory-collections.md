---
title: Collections en mémoire
sidebar:
  order: 191
  label: 8.3.1 Collections en mémoire
---

**Contexte** : LINQ to Objects fonctionne sur n’importe quel `IEnumerable<T>` (tableaux, listes, dictionnaires, collections personnalisées). Toutes les opérations sont effectuées en mémoire.

```csharp
List<string> fruits = new() { "pomme", "banane", "cerise" };
var longFruits = fruits.Where(f => f.Length > 5);
```

## Considérations de performance

- Utilisez les opérateurs streaming pour les grandes collections
- Matérialisez avec `ToList()` lorsque la requête est réutilisée plusieurs fois

## Exemple d'utilisation dans le monde réel

**Traitement de données dans les applications console** : Lisez un fichier CSV dans une liste d’objets, puis utilisez LINQ pour filtrer, regrouper et agréger.

**Exemple** : Dans [System.IO](https://docs.microsoft.com/en-us/dotnet/api/system.io), vous pouvez lire des lignes avec `File.ReadLines` et utiliser LINQ directement.

## Sections connexes

- [8.3 LINQ to Objects, LINQ to XML, LINQ to Entities](/fr/chapter-8-linq-language-integrated-query/8-3-linq-to-objects-linq-to-xml-linq-to-entities)
- [8.4 Opérateurs courants](/fr/chapter-8-linq-language-integrated-query/8-4-common-operators)
