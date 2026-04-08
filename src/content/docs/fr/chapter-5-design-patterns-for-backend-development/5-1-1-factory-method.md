---
title: Factory Method
sidebar:
  order: 106
  label: 5.1.1 Factory Method
---

**Contexte** : Définir une interface pour créer un objet, mais laisser les sous‑classes décider quelle classe instancier. Factory Method permet à une classe de différer l’instanciation à ses sous‑classes.

```csharp
public interface IProduct
{
    void Operation();
}

public class ConcreteProductA : IProduct
{
    public void Operation() => Console.WriteLine("Product A");
}

public abstract class Creator
{
    public abstract IProduct FactoryMethod();
}

public class ConcreteCreatorA : Creator
{
    public override IProduct FactoryMethod() => new ConcreteProductA();
}

// Usage
Creator creator = new ConcreteCreatorA();
IProduct product = creator.FactoryMethod();
product.Operation();
```

## Exemple d'utilisation dans le monde réel

**Frameworks de journalisation** : Différents enregistreurs (fichier, base de données, cloud) sont créés par des méthodes de fabrique correspondantes. Le code applicatif ne connaît que l’interface `ILogger` ; l’enregistreur concret est décidé par la configuration ou l’environnement.

**Exemple** : Dans ASP.NET Core, [`ILoggerFactory`](https://docs.microsoft.com/en-us/dotnet/api/microsoft.extensions.logging.iloggerfactory) utilise le pattern Factory Method pour créer des instances de journalisation pour différentes catégories. La méthode [`CreateLogger`](https://docs.microsoft.com/en-us/dotnet/api/microsoft.extensions.logging.iloggerfactory.createlogger) est une méthode de fabrique qui retourne un `ILogger` pour un nom de catégorie donné.

## Sections connexes

- [5.1 Patrons de création](/fr/chapter-5-design-patterns-for-backend-development/5-1-creational-patterns)
- [5.1.2 Abstract Factory](/fr/chapter-5-design-patterns-for-backend-development/5-1-2-abstract-factory)
