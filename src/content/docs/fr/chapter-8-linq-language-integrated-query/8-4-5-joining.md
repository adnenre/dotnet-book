---
title: Jointures
sidebar:
  order: 199
  label: 8.4.5 Jointures
---

**Contexte** : Les opérateurs de jointure (`Join`, `GroupJoin`) combinent des séquences basées sur des clés correspondantes.

```csharp
var customers = new[] { new { Id = 1, Name = "Alice" }, new { Id = 2, Name = "Bob" } };
var orders = new[] { new { CustomerId = 1, Amount = 100 }, new { CustomerId = 1, Amount = 50 } };

var join = customers.Join(orders,
                          c => c.Id,
                          o => o.CustomerId,
                          (c, o) => new { c.Name, o.Amount });
// Name=Alice, Amount=100
// Name=Alice, Amount=50
```

## Exemple d'utilisation dans le monde réel

**Données relationnelles** : Dans EF Core, les jointures sont automatiques pour les propriétés de navigation, mais vous pouvez utiliser des jointures explicites.

**Exemple** : La [documentation LINQ Join](https://docs.microsoft.com/en-us/dotnet/csharp/linq/perform-inner-joins) montre les jointures internes et gauches.

## Sections connexes

- [8.4 Opérateurs courants](/fr/chapter-8-linq-language-integrated-query/8-4-common-operators)
- [8.4.4 Regroupement](/fr/chapter-8-linq-language-integrated-query/8-4-4-grouping)
