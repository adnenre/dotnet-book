---
title: LINQ to Objects, LINQ to XML, LINQ to Entities
sidebar:
  order: 190
  label: 8.3 LINQ to Objects, LINQ to XML, LINQ to Entities
---

**Contexte** : LINQ fonctionne sur différentes sources de données : collections en mémoire (LINQ to Objects), documents XML (LINQ to XML) et bases de données via Entity Framework (LINQ to Entities).

```csharp
// LINQ to Objects
var numbers = new[] { 1, 2, 3 };
var even = numbers.Where(n => n % 2 == 0);

// LINQ to XML
XDocument doc = XDocument.Load("data.xml");
var names = from e in doc.Descendants("Person") select (string)e.Element("Name");

// LINQ to Entities (EF Core)
var active = dbContext.Customers.Where(c => c.IsActive);
```

## Exemple d'utilisation dans le monde réel

**Expérience de requête unifiée** : Les mêmes modèles de requête fonctionnent sur toutes les sources, réduisant la courbe d’apprentissage.

**Exemple** : La [documentation Microsoft](https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/concepts/linq/) montre des exemples pour chaque fournisseur.

## Sections connexes

- [8.3.1 Collections en mémoire](/fr/chapter-8-linq-language-integrated-query/8-3-1-in-memory-collections)
- [8.3.2 XML](/fr/chapter-8-linq-language-integrated-query/8-3-2-xml)
- [8.3.3 Traduction SQL avec EF Core](/fr/chapter-8-linq-language-integrated-query/8-3-3-ef-core-sql-translation)
