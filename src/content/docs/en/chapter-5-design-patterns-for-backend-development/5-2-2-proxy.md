---
title: Proxy
sidebar:
  order: 113
  label: 5.2.2 Proxy
---

**Context**: Provide a surrogate or placeholder for another object to control access to it.

```csharp
public interface ISubject
{
    void Request();
}

public class RealSubject : ISubject
{
    public void Request() => Console.WriteLine("RealSubject request");
}

public class Proxy : ISubject
{
    private RealSubject _realSubject;
    public void Request()
    {
        if (_realSubject == null)
            _realSubject = new RealSubject();
        // Add access control, logging, etc.
        _realSubject.Request();
    }
}
```

## Real-world usage example

**Lazy loading**: A proxy delays creation of an expensive object (e.g., large image, database connection) until it's actually needed.

**Example**: Entity Framework Core uses [lazy loading proxies](https://docs.microsoft.com/en-us/ef/core/querying/related-data/lazy-loading) for navigation properties. Also, [`RealProxy`](https://docs.microsoft.com/en-us/dotnet/api/system.runtime.remoting.proxies.realproxy) for remoting (legacy) and [dynamic proxies](https://www.castleproject.org/projects/dynamicproxy/) in Castle DynamicProxy.

## Related sections

- [5.2 Structural patterns](/en/chapter-5-design-patterns-for-backend-development/5-2-structural-patterns)
- [5.2.1 Adapter](/en/chapter-5-design-patterns-for-backend-development/5-2-1-adapter)
- [5.2.3 Decorator](/en/chapter-5-design-patterns-for-backend-development/5-2-3-decorator)
