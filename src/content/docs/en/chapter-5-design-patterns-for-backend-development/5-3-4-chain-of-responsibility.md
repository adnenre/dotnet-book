---
title: Chain of Responsibility
sidebar:
  order: 123
  label: 5.3.4 Chain of Responsibility
---

**Context**: Avoid coupling the sender of a request to its receiver by giving more than one object a chance to handle the request. Chain the receiving objects and pass the request along the chain.

```csharp
public abstract class Handler
{
    protected Handler _next;
    public void SetNext(Handler next) => _next = next;
    public abstract void HandleRequest(int request);
}

public class ConcreteHandlerA : Handler
{
    public override void HandleRequest(int request)
    {
        if (request < 10) Console.WriteLine("Handler A handled");
        else _next?.HandleRequest(request);
    }
}
```

## Real-world usage example

**Logging framework**: Loggers with different levels (INFO, DEBUG, ERROR) form a chain. If a logger cannot handle a level, it passes to the next.

**Example**: [ASP.NET Core middleware pipeline](https://docs.microsoft.com/en-us/aspnet/core/fundamentals/middleware) is a chain of responsibility. Each middleware decides to process or pass to the next. Also, [`ValidationHandler` in FluentValidation](https://docs.fluentvalidation.net/en/latest/).

## Related sections

- [5.3 Behavioural patterns](/en/chapter-5-design-patterns-for-backend-development/5-3-behavioural-patterns)
- [5.3.3 Observer](/en/chapter-5-design-patterns-for-backend-development/5-3-3-observer)
- [5.3.5 Mediator](/en/chapter-5-design-patterns-for-backend-development/5-3-5-mediator)
