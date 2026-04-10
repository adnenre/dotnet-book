---
title: interface IRepository<T>
sidebar:
  order: 407
  label: 11.3.1 interface IRepository<T>
---

**Context**: The Repository pattern is very common for data access. A generic `IRepository<T>` interface defines CRUD operations (Create, Read, Update, Delete) without depending on a specific entity type. Concrete implementations provide the code for a particular data source (database, API, file).

## Usage Example

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

// In-memory implementation (for testing)
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

## Output console

```shell
dotnet run
1: Alice
2: Bob
```

## Important notes

- `IRepository<T>` is independent of the persistence mechanism.
- The pattern facilitates unit testing (mocking).

## Real-world usage example

**Entity Framework Core** – `DbSet<T>` acts as a repository for each entity.  
See [docs on Repository pattern](https://docs.microsoft.com/en-us/dotnet/architecture/microservices/microservice-ddd-cqrs-patterns/infrastructure-persistence-layer-design).

## Related sections

- [11.3 Generic Interfaces](/en/chapter-11-generics-and-constraints/11-3-generic-interfaces)
- [11.3.2 Covariance / Contravariance](/en/chapter-11-generics-and-constraints/11-3-2-covariance-out-t-and-contravariance-in-t)
