---
title: Traduction SQL avec EF Core
sidebar:
  order: 193
  label: 8.3.3 Traduction SQL avec EF Core
---

**Contexte** : LINQ to Entities (Entity Framework Core) traduit les requêtes LINQ en SQL, les exécutant sur le serveur de base de données.

```csharp
using (var context = new AppDbContext())
{
    var activeCustomers = context.Customers
                                 .Where(c => c.IsActive && c.Orders.Any())
                                 .OrderBy(c => c.Name)
                                 .Take(10)
                                 .ToList(); // SQL généré et exécuté
}
```

## Remarques importantes

- Seul un sous‑ensemble des méthodes C# peut être traduit en SQL
- Utilisez `AsEnumerable()` ou `ToList()` pour passer à l’évaluation côté client
- L’exécution différée fonctionne avec `IQueryable<T>`

## Exemple d'utilisation dans le monde réel

**Pagination et filtrage en base de données** : EF Core traduit `Skip` et `Take` en `OFFSET` et `FETCH` en SQL.

**Exemple** : La [documentation sur les requêtes EF Core](https://docs.microsoft.com/en-us/ef/core/querying/) explique les règles de traduction.

## Sections connexes

- [8.3 LINQ to Objects, LINQ to XML, LINQ to Entities](/fr/chapter-8-linq-language-integrated-query/8-3-linq-to-objects-linq-to-xml-linq-to-entities)
- [8.4 Opérateurs courants](/fr/chapter-8-linq-language-integrated-query/8-4-common-operators)
