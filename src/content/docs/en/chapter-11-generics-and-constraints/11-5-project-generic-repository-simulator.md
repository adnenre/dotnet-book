---
title: "Project: Generic Repository Simulator"
sidebar:
  order: 417
  label: 11.5 Project Generic Repository Simulator
---

**Context**: This project simulates an in‑memory generic repository to illustrate generics, constraints, and interfaces. You will implement `IRepository<T>` with constraints to guarantee entities have an identifier, and use a dictionary as storage.

## Usage Example

```csharp
using System;
using System.Collections.Generic;
using System.Linq;

// Interface for entities with an identifier
public interface IEntity
{
    int Id { get; set; }
}

// Generic repository interface
public interface IRepository<T> where T : class, IEntity
{
    T GetById(int id);
    IEnumerable<T> GetAll();
    void Add(T entity);
    void Update(T entity);
    void Delete(int id);
}

// In-memory implementation
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
            throw new KeyNotFoundException($"Entity with ID {entity.Id} not found");
        }
    }

    public void Delete(int id)
    {
        _storage.Remove(id);
    }
}

// Product entity
public class Product : IEntity
{
    public int Id { get; set; }
    public string Name { get; set; }
    public decimal Price { get; set; }

    public override string ToString() => $"{Id}: {Name} - {Price:C}";
}

// Main program
class Program
{
    static void Main()
    {
        IRepository<Product> repo = new MemoryRepository<Product>();

        // Add products
        repo.Add(new Product { Name = "Laptop", Price = 999.99m });
        repo.Add(new Product { Name = "Mouse", Price = 19.99m });

        // Display all
        Console.WriteLine("All products:");
        foreach (var p in repo.GetAll())
            Console.WriteLine(p);

        // Update
        var laptop = repo.GetById(1);
        if (laptop != null)
        {
            laptop.Price = 899.99m;
            repo.Update(laptop);
        }

        // Display after update
        Console.WriteLine("\nAfter update:");
        Console.WriteLine(repo.GetById(1));

        // Delete
        repo.Delete(2);
        Console.WriteLine("\nAfter deletion:");
        Console.WriteLine($"Remaining count: {repo.GetAll().Count()}");
    }
}
```

## Output console

```shell
dotnet run
All products:
1: Laptop - $999.99
2: Mouse - $19.99

After update:
1: Laptop - $899.99

After deletion:
Remaining count: 1
```

## How to run

1. Create a new console project: `dotnet new console -n GenericRepositorySimulator`
2. Replace `Program.cs` with the code above.
3. Run `dotnet run`

## Important notes

- The project illustrates generic classes, generic interfaces, and constraints (`where T : class, IEntity`).
- The repository can be used with any entity implementing `IEntity`.
- Possible improvement: add asynchronous methods (`GetByIdAsync`, etc.) and additional constraints.

## Real-world usage example

**Entity Framework Core** – `DbSet<T>` provides a generic repository for each entity, with methods like `FindAsync`, `Add`, `Remove`.  
See [EF Core docs](https://docs.microsoft.com/en-us/ef/core/).

## Related sections

- [11.3.1 interface IRepository<T>](/en/chapter-11-generics-and-constraints/11-3-1-interface-irepository-t)
- [11.4.5 where T : IMyInterface](/en/chapter-11-generics-and-constraints/11-4-5-where-t-imyinterface-interface-constraint)
