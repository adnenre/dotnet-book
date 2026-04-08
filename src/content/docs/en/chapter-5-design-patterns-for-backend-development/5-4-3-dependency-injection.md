---
title: Dependency Injection
sidebar:
  order: 132
  label: 5.4.3 Dependency Injection
---

**Context**: A technique where an object receives its dependencies from an external source rather than creating them itself. It promotes loose coupling and testability.

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

## Real-world usage example

**ASP.NET Core built‑in DI**: Services are registered in `Program.cs` and injected into constructors of controllers, middleware, and services. Enables unit testing by replacing real dependencies with mocks.

**Example**: [ASP.NET Core Dependency Injection](https://docs.microsoft.com/en-us/aspnet/core/fundamentals/dependency-injection) docs. Common services: [`ILogger<T>`](https://docs.microsoft.com/en-us/dotnet/api/microsoft.extensions.logging.ilogger-1), [`DbContext`](https://docs.microsoft.com/en-us/dotnet/api/microsoft.entityframeworkcore.dbcontext), [`IHttpClientFactory`](https://docs.microsoft.com/en-us/dotnet/api/microsoft.extensions.http.ihttpclientfactory). Also third‑party containers like [Autofac](https://autofac.org/), [Unity](https://github.com/unitycontainer/unity).

## Related sections

- [5.4 Architectural patterns for backend](/en/chapter-5-design-patterns-for-backend-development/5-4-architectural-patterns-for-backend)
- [5.4.2 Middleware](/en/chapter-5-design-patterns-for-backend-development/5-4-2-middleware)
- [5.5 Project Discount Strategy System](/en/chapter-5-design-patterns-for-backend-development/5-5-project-discount-strategy-system)
