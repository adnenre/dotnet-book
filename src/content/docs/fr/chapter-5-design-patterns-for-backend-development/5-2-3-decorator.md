---
title: Decorator
sidebar:
  order: 114
  label: 5.2.3 Decorator
---

**Contexte** : Attacher dynamiquement des responsabilités supplémentaires à un objet. Les décorateurs offrent une alternative flexible à l’héritage pour étendre les fonctionnalités.

```csharp
public interface IComponent
{
    void Operation();
}

public class ConcreteComponent : IComponent
{
    public void Operation() => Console.WriteLine("Component operation");
}

public abstract class Decorator : IComponent
{
    protected IComponent _component;
    public Decorator(IComponent component) => _component = component;
    public virtual void Operation() => _component.Operation();
}

public class ConcreteDecoratorA : Decorator
{
    public ConcreteDecoratorA(IComponent c) : base(c) { }
    public override void Operation()
    {
        base.Operation();
        Console.WriteLine("Added behavior A");
    }
}
```

## Exemple d'utilisation dans le monde réel

**Flux dans .NET** : `FileStream` peut être décoré avec `BufferedStream`, `CryptoStream`, `GZipStream` pour ajouter des fonctionnalités de mise en mémoire tampon, chiffrement ou compression sans modifier le flux original.

**Exemple** : [Le middleware ASP.NET Core](https://docs.microsoft.com/en-us/aspnet/core/fundamentals/middleware) est un pipeline de décorateurs : chaque middleware décore le suivant, ajoutant journalisation, authentification, mise en cache, etc. Les décorateurs de [`System.IO.Stream`](https://docs.microsoft.com/en-us/dotnet/api/system.io.stream) incluent [`GZipStream`](https://docs.microsoft.com/en-us/dotnet/api/system.io.compression.gzipstream), [`CryptoStream`](https://docs.microsoft.com/en-us/dotnet/api/system.security.cryptography.cryptostream).

## Sections connexes

- [5.2 Patrons structurels](/fr/chapter-5-design-patterns-for-backend-development/5-2-structural-patterns)
- [5.2.2 Proxy](/fr/chapter-5-design-patterns-for-backend-development/5-2-2-proxy)
- [5.2.4 Facade](/fr/chapter-5-design-patterns-for-backend-development/5-2-4-facade)
