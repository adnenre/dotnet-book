---
title: Repository
sidebar:
  order: 130
  label: 5.4.1 Repository
---

**Contexte** : Faire le lien entre la couche domaine et la couche de mappage de données en utilisant une interface similaire à une collection pour accéder aux objets du domaine.

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

## Exemple d'utilisation dans le monde réel

**Abstraction d’accès aux données** : Une application utilise `IRepository<Customer>` ; l’implémentation peut être Entity Framework, Dapper ou un mock pour les tests unitaires. La logique métier est découplée de la source de données.

**Exemple** : Dans ASP.NET Core, un `IRepository<T>` générique est souvent utilisé avec [`DbSet<T>` d’EF Core](https://docs.microsoft.com/en-us/dotnet/api/microsoft.entityframeworkcore.dbset-1). Le pattern Repository est courant dans [l’architecture propre](https://docs.microsoft.com/en-us/dotnet/architecture/modern-web-apps-azure/common-web-application-architectures) / DDD.

## Sections connexes

- [5.4 Patrons architecturaux pour le backend](/en/chapter-5-design-patterns-for-backend-development/5-4-architectural-patterns-for-backend)
- [5.4.2 Middleware](/fr/chapter-5-design-patterns-for-backend-development/5-4-2-middleware)
