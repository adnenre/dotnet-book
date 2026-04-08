---
title: Mediator
sidebar:
  order: 124
  label: 5.3.5 Mediator
---

**Context**: Define an object that encapsulates how a set of objects interact. Mediator promotes loose coupling by keeping objects from referring to each other explicitly.

```csharp
public interface IMediator
{
    void Notify(object sender, string ev);
}

public class ConcreteMediator : IMediator
{
    private ComponentA _a;
    private ComponentB _b;
    public void RegisterA(ComponentA a) => _a = a;
    public void RegisterB(ComponentB b) => _b = b;
    public void Notify(object sender, string ev)
    {
        if (ev == "A") _b.DoB();
        else if (ev == "B") _a.DoA();
    }
}
```

## Real-world usage example

**Chat room**: A chat mediator handles message routing between users. Users don't reference each other directly; they send to the mediator, which broadcasts.

**Example**: In .NET, the [MediatR library](https://github.com/jbogard/MediatR) implements mediator pattern for in‑process messaging. Also, [`IHttpClientFactory`](https://docs.microsoft.com/en-us/dotnet/api/microsoft.extensions.http.ihttpclientfactory) acts as a mediator for creating `HttpClient` instances.

## Related sections

- [5.3 Behavioural patterns](/en/chapter-5-design-patterns-for-backend-development/5-3-behavioural-patterns)
- [5.3.4 Chain of Responsibility](/en/chapter-5-design-patterns-for-backend-development/5-3-4-chain-of-responsibility)
- [5.3.6 Memento](/en/chapter-5-design-patterns-for-backend-development/5-3-6-memento)
