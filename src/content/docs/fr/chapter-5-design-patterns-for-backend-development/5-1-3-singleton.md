---
title: Singleton
sidebar:
  order: 108
  label: 5.1.3 Singleton
---

**Contexte** : Garantir qu’une classe n’a qu’une seule instance et fournir un point d’accès global à celle‑ci.

## Implantation thread‑safe paresseuse

```csharp
public sealed class Singleton
{
    private static readonly Lazy<Singleton> _lazy = new(() => new Singleton());
    public static Singleton Instance => _lazy.Value;
    private Singleton() { }
    public void DoSomething() => Console.WriteLine("Singleton work");
}
```

## Exemple d'utilisation dans le monde réel

**Gestionnaire de configuration d’application** : Charge les paramètres une fois et les partage dans toute l’application. Les pools de connexions de base de données, les services de journalisation et les caches utilisent souvent Singleton.

**Exemple** : Dans .NET, [`HttpClient`](https://docs.microsoft.com/en-us/dotnet/api/system.net.http.httpclient) est destiné à être utilisé comme singleton pour éviter l’épuisement des sockets. La classe [`Lazy<T>`](https://docs.microsoft.com/en-us/dotnet/api/system.lazy-1) implémente elle‑même un singleton paresseux. De plus, le conteneur [`Dependency Injection`](https://docs.microsoft.com/en-us/aspnet/core/fundamentals/dependency-injection) enregistre souvent des services avec `AddSingleton()`.

## Sections connexes

- [5.1 Patrons de création](/fr/chapter-5-design-patterns-for-backend-development/5-1-creational-patterns)
- [5.1.2 Abstract Factory](/fr/chapter-5-design-patterns-for-backend-development/5-1-2-abstract-factory)
- [5.1.4 Builder](/fr/chapter-5-design-patterns-for-backend-development/5-1-4-builder)
