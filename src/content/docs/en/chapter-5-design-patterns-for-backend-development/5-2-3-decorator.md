---
title: Decorator
sidebar:
  order: 114
  label: 5.2.3 Decorator
---

**Context**: Attach additional responsibilities to an object dynamically. Decorators provide a flexible alternative to subclassing for extending functionality.

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

## Real-world usage example

**Streams in .NET**: `FileStream` can be decorated with `BufferedStream`, `CryptoStream`, `GZipStream` to add buffering, encryption, or compression without changing the original stream.

**Example**: [ASP.NET Core middleware](https://docs.microsoft.com/en-us/aspnet/core/fundamentals/middleware) is a decorator pipeline: each middleware decorates the next, adding logging, authentication, caching, etc. [`System.IO.Stream`](https://docs.microsoft.com/en-us/dotnet/api/system.io.stream) decorators include [`GZipStream`](https://docs.microsoft.com/en-us/dotnet/api/system.io.compression.gzipstream), [`CryptoStream`](https://docs.microsoft.com/en-us/dotnet/api/system.security.cryptography.cryptostream).

## Related sections

- [5.2 Structural patterns](/en/chapter-5-design-patterns-for-backend-development/5-2-structural-patterns)
- [5.2.2 Proxy](/en/chapter-5-design-patterns-for-backend-development/5-2-2-proxy)
- [5.2.4 Facade](/en/chapter-5-design-patterns-for-backend-development/5-2-4-facade)
