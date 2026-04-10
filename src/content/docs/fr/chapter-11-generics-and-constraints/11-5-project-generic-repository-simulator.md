---
title: "Projet : Simulateur de Repository générique"
sidebar:
  order: 417
  label: 11.5 Projet  Simulateur de Repository générique
---

**Contexte** : Ce projet simule un repository générique en mémoire pour illustrer les concepts de génériques, contraintes et interfaces. Vous implémenterez `IRepository<T>` avec des contraintes pour garantir que les entités ont un identifiant, et vous utiliserez un dictionnaire comme stockage.

## Exemple d'utilisation

```csharp
using System;
using System.Collections.Generic;
using System.Linq;

// Interface pour les entités avec un identifiant
public interface IEntity
{
    int Id { get; set; }
}

// Interface générique du repository
public interface IRepository<T> where T : class, IEntity
{
    T GetById(int id);
    IEnumerable<T> GetAll();
    void Add(T entity);
    void Update(T entity);
    void Delete(int id);
}

// Implémentation en mémoire
public class MemoryRepository<T> : IRepository<T> where T : class, IEntity
{
    private readonly Dictionary<int, T> _storage = new Dictionary<int, T>();
    private int _nextId = 1;

    public T GetById(int id)
    {
        _storage.TryGetValue(id, out T entity);
        return entity;
    }

    public IEnumerable<T> GetAll() => _storage.Values.ToList();

    public void Add(T entity)
    {
        entity.Id = _nextId++;
        _storage.Add(entity.Id, entity);
    }

    public void Update(T entity)
    {
        if (_storage.ContainsKey(entity.Id))
        {
            _storage[entity.Id] = entity;
        }
        else
        {
            throw new KeyNotFoundException($"Entité avec ID {entity.Id} non trouvée");
        }
    }

    public void Delete(int id)
    {
        _storage.Remove(id);
    }
}

// Entité produit
public class Product : IEntity
{
    public int Id { get; set; }
    public string Name { get; set; }
    public decimal Price { get; set; }

    public override string ToString() => $"{Id}: {Name} - {Price:C}";
}

// Programme principal
class Program
{
    static void Main()
    {
        IRepository<Product> repo = new MemoryRepository<Product>();

        // Ajout de produits
        repo.Add(new Product { Name = "Laptop", Price = 999.99m });
        repo.Add(new Product { Name = "Souris", Price = 19.99m });

        // Affichage de tous
        Console.WriteLine("Tous les produits :");
        foreach (var p in repo.GetAll())
            Console.WriteLine(p);

        // Mise à jour
        var laptop = repo.GetById(1);
        if (laptop != null)
        {
            laptop.Price = 899.99m;
            repo.Update(laptop);
        }

        // Affichage après mise à jour
        Console.WriteLine("\nAprès mise à jour :");
        Console.WriteLine(repo.GetById(1));

        // Suppression
        repo.Delete(2);
        Console.WriteLine("\nAprès suppression :");
        Console.WriteLine($"Nombre restant : {repo.GetAll().Count()}");
    }
}
```

## Sortie console

```shell
dotnet run
Tous les produits :
1: Laptop - 999,99 €
2: Souris - 19,99 €

Après mise à jour :
1: Laptop - 899,99 €

Après suppression :
Nombre restant : 1
```

## Comment exécuter

1. Créez un nouveau projet console : `dotnet new console -n GenericRepositorySimulator`
2. Remplacez `Program.cs` par le code ci-dessus.
3. Exécutez `dotnet run`

## Remarques importantes

- Le projet illustre les classes génériques, les interfaces génériques, les contraintes (`where T : class, IEntity`).
- Le repository peut être utilisé avec n'importe quelle entité implémentant `IEntity`.
- Une amélioration possible : ajouter des méthodes asynchrones (`GetByIdAsync`, etc.) et des contraintes supplémentaires.

## Exemple d'utilisation dans le monde réel

**Entity Framework Core** – `DbSet<T>` fournit un repository générique pour chaque entité, avec des méthodes comme `FindAsync`, `Add`, `Remove`.  
Voir [documentation EF Core](https://docs.microsoft.com/fr-fr/ef/core/).

## Sections connexes

- [11.3.1 interface IRepository<T>](/fr/chapter-11-generics-and-constraints/11-3-1-interface-irepository-t)
- [11.4.5 where T : IMyInterface](/fr/chapter-11-generics-and-constraints/11-4-5-where-t-imyinterface-interface-constraint)
