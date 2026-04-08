---
title: Repository
sidebar:
  order: 130
  label: 5.4.1 Repository
---

**Context**: Mediate between the domain and data mapping layers using a collection‑like interface for accessing domain objects.

```csharp
public interface IRepository<T>
{
    T GetById(int id);
    IEnumerable<T> GetAll();
    void Add(T entity);
    void Remove(T entity);
}

public class InMemoryRepository<T> : IRepository<T>
{
    private List<T> _data = new();
    public T GetById(int id) => _data.FirstOrDefault(e => e.GetHashCode() == id);
    public IEnumerable<T> GetAll() => _data;
    public void Add(T entity) => _data.Add(entity);
    public void Remove(T entity) => _data.Remove(entity);
}
```

## Real-world usage example

**Data access abstraction**: An application uses `IRepository<Customer>`; the implementation can be Entity Framework, Dapper, or a mock for unit tests. Business logic is decoupled from data source.

**Example**: In ASP.NET Core, generic `IRepository<T>` is often used with [EF Core's `DbSet<T>`](https://docs.microsoft.com/en-us/dotnet/api/microsoft.entityframeworkcore.dbset-1). The repository pattern is common in [clean architecture](https://docs.microsoft.com/en-us/dotnet/architecture/modern-web-apps-azure/common-web-application-architectures) / DDD.

## Related sections

- [5.4 Architectural patterns for backend](/en/chapter-5-design-patterns-for-backend-development/5-4-architectural-patterns-for-backend)
- [5.4.2 Middleware](/en/chapter-5-design-patterns-for-backend-development/5-4-2-middleware)
