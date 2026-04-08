---
title: Dependency Injection
sidebar:
  order: 132
  label: 5.4.3 Dependency Injection
---

**Contexte** : Une technique où un objet reçoit ses dépendances d’une source externe plutôt que de les créer lui‑même. Elle favorise un couplage lâche et la testabilité.

```csharp
public interface IGreetingService
{
    string Greet(string name);
}

public class GreetingService : IGreetingService
{
    public string Greet(string name) => $"Hello {name}";
}

public class Consumer
{
    private readonly IGreetingService _greeting;
    public Consumer(IGreetingService greeting) => _greeting = greeting;
    public void Print(string name) => Console.WriteLine(_greeting.Greet(name));
}

// Simple DI container
var services = new Dictionary<Type, object>();
services[typeof(IGreetingService)] = new GreetingService();
var consumer = new Consumer((IGreetingService)services[typeof(IGreetingService)]);
consumer.Print("Alice");
```

## Exemple d'utilisation dans le monde réel

**Injection de dépendances intégrée d’ASP.NET Core** : Les services sont enregistrés dans `Program.cs` et injectés dans les constructeurs des contrôleurs, middlewares et services. Permet les tests unitaires en remplaçant les dépendances réelles par des mocks.

**Exemple** : [Documentation sur l’injection de dépendances ASP.NET Core](https://docs.microsoft.com/en-us/aspnet/core/fundamentals/dependency-injection). Services courants : [`ILogger<T>`](https://docs.microsoft.com/en-us/dotnet/api/microsoft.extensions.logging.ilogger-1), [`DbContext`](https://docs.microsoft.com/en-us/dotnet/api/microsoft.entityframeworkcore.dbcontext), [`IHttpClientFactory`](https://docs.microsoft.com/en-us/dotnet/api/microsoft.extensions.http.ihttpclientfactory). Également des conteneurs tiers comme [Autofac](https://autofac.org/), [Unity](https://github.com/unitycontainer/unity).

## Sections connexes

- [5.4 Patrons architecturaux pour le backend](/en/chapter-5-design-patterns-for-backend-development/5-4-architectural-patterns-for-backend)
- [5.4.2 Middleware](/fr/chapter-5-design-patterns-for-backend-development/5-4-2-middleware)
- [5.5 Projet Système de stratégie de remise](/fr/chapter-5-design-patterns-for-backend-development/5-5-project-discount-strategy-system)
