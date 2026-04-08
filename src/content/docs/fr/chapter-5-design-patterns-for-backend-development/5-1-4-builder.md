---
title: Builder
sidebar:
  order: 109
  label: 5.1.4 Builder
---

**Contexte** : Séparer la construction d’un objet complexe de sa représentation afin que le même processus de construction puisse créer différentes représentations.

```csharp
public class Product
{
    public string PartA { get; set; }
    public string PartB { get; set; }
}

public interface IBuilder
{
    void BuildPartA();
    void BuildPartB();
    Product GetResult();
}

public class ConcreteBuilder : IBuilder
{
    private Product _product = new();
    public void BuildPartA() => _product.PartA = "A";
    public void BuildPartB() => _product.PartB = "B";
    public Product GetResult() => _product;
}

public class Director
{
    public void Construct(IBuilder builder)
    {
        builder.BuildPartA();
        builder.BuildPartB();
    }
}

// Usage
var builder = new ConcreteBuilder();
new Director().Construct(builder);
Product p = builder.GetResult();
```

## Exemple d'utilisation dans le monde réel

**Construction de requêtes SQL** : Un `SqlQueryBuilder` permet une construction étape par étape des clauses SELECT, WHERE, ORDER BY, produisant différentes chaînes de requête.

**Exemple** : En C#, [`StringBuilder`](https://docs.microsoft.com/en-us/dotnet/api/system.text.stringbuilder) est un constructeur classique pour construire efficacement des chaînes. Le [`IQueryable`](https://docs.microsoft.com/en-us/dotnet/api/system.linq.iqueryable) d’Entity Framework Core utilise des méthodes fluides comme `.Where()`, `.OrderBy()`, `.Select()` pour construire des requêtes.

## Sections connexes

- [5.1 Patrons de création](/fr/chapter-5-design-patterns-for-backend-development/5-1-creational-patterns)
- [5.1.3 Singleton](/fr/chapter-5-design-patterns-for-backend-development/5-1-3-singleton)
- [5.1.5 Prototype](/fr/chapter-5-design-patterns-for-backend-development/5-1-5-prototype)
