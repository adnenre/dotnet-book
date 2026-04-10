---
title: interface IRepository<T>
sidebar:
  order: 407
  label: 11.3.1 interface IRepository<T>
---

**Contexte** : Le pattern Repository est très courant pour l'accès aux données. Une interface générique `IRepository<T>` définit les opérations CRUD (Create, Read, Update, Delete) sans dépendre d'un type d'entité spécifique. Les implémentations concrètes fournissent le code pour une source de données particulière (base de données, API, fichier).

## Exemple d'utilisation

```csharp
using System;
using System.Collections.Generic;
using System.Linq;

public interface IRepository<T>
{
    T GetById(int id);
    IEnumerable<T> GetAll();
    void Add(T entity);
    void Update(T entity);
    void Delete(int id);
}

// Implémentation en mémoire (pour tests)
public class InMemoryRepository<T> : IRepository<T> where T : class, IEntity
{
    private readonly List<T> _items = new List<T>();
    private int _nextId = 1;

    public T GetById(int id) => _items.FirstOrDefault(x => x.Id == id);

    public IEnumerable<T> GetAll() => _items.ToList();

    public void Add(T entity)
    {
        entity.Id = _nextId++;
        _items.Add(entity);
    }

    public void Update(T entity)
    {
        var existing = GetById(entity.Id);
        if (existing != null)
        {
            _items.Remove(existing);
            _items.Add(entity);
        }
    }

    public void Delete(int id)
    {
        var item = GetById(id);
        if (item != null) _items.Remove(item);
    }
}

public interface IEntity
{
    int Id { get; set; }
}

public class User : IEntity
{
    public int Id { get; set; }
    public string Name { get; set; }
}

class Program
{
    static void Main()
    {
        IRepository<User> userRepo = new InMemoryRepository<User>();
        userRepo.Add(new User { Name = "Alice" });
        userRepo.Add(new User { Name = "Bob" });

        foreach (var user in userRepo.GetAll())
        {
            Console.WriteLine($"{user.Id}: {user.Name}");
        }
    }
}
```

## Sortie console

```shell
dotnet run
1: Alice
2: Bob
```

## Remarques importantes

- `IRepository<T>` est indépendant du mécanisme de persistance.
- Le pattern facilite les tests unitaires (moquage).

## Exemple d'utilisation dans le monde réel

**Entity Framework Core** – `DbSet<T>` agit comme un repository pour chaque entité.  
Voir [documentation sur le pattern Repository](https://docs.microsoft.com/fr-fr/dotnet/architecture/microservices/microservice-ddd-cqrs-patterns/infrastructure-persistence-layer-design).

## Sections connexes

- [11.3 Interfaces génériques](/fr/chapter-11-generics-and-constraints/11-3-generic-interfaces)
- [11.3.2 Covariance / Contravariance](/fr/chapter-11-generics-and-constraints/11-3-2-covariance-out-t-and-contravariance-in-t)
