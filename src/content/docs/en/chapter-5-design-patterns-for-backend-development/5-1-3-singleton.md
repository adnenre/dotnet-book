---
title: Singleton
sidebar:
  order: 108
  label: 5.1.3 Singleton
---

**Context**: Ensure a class has only one instance and provide a global point of access to it.

## Thread‑safe lazy implementation

--codecsharp
public sealed class Singleton
{
private static readonly Lazy<Singleton> \_lazy = new(() => new Singleton());
public static Singleton Instance => \_lazy.Value;
private Singleton() { }
public void DoSomething() => Console.WriteLine("Singleton work");
}
--code

## Real-world usage example

**Application configuration manager**: Load settings once and share across the entire application. Database connection pools, logging services, and caches often use Singleton.

**Example**: In .NET, [`HttpClient`](https://docs.microsoft.com/en-us/dotnet/api/system.net.http.httpclient) is intended to be used as a singleton to avoid socket exhaustion. The [`Lazy<T>`](https://docs.microsoft.com/en-us/dotnet/api/system.lazy-1) class itself implements a lazy singleton pattern. Also, [`Dependency Injection`](https://docs.microsoft.com/en-us/aspnet/core/fundamentals/dependency-injection) container often registers services as `AddSingleton()`.

## Related sections

- [5.1 Creational patterns](/en/chapter-5-design-patterns-for-backend-development/5-1-creational-patterns)
- [5.1.4 Builder](/en/chapter-5-design-patterns-for-backend-development/5-1-4-builder)
