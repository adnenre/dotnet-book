---
title: Facade
sidebar:
  order: 115
  label: 5.2.4 Facade
---

**Context**: Provide a unified interface to a set of interfaces in a subsystem. Facade defines a higher‑level interface that makes the subsystem easier to use.

```csharp
public class SubsystemA { public void A1() { } }
public class SubsystemB { public void B1() { } }
public class SubsystemC { public void C1() { } }

public class Facade
{
    private SubsystemA _a = new();
    private SubsystemB _b = new();
    private SubsystemC _c = new();
    public void Operation()
    {
        _a.A1();
        _b.B1();
        _c.C1();
    }
}
```

## Real-world usage example

**Order processing system**: A `OrderFacade` calls inventory, payment, shipping, and notification subsystems in the correct order, hiding complexity from the client.

**Example**: In .NET, [`HttpClient`](https://docs.microsoft.com/en-us/dotnet/api/system.net.http.httpclient) provides a facade over lower‑level socket, DNS, and TLS components. Also, [`DbContext`](https://docs.microsoft.com/en-us/dotnet/api/microsoft.entityframeworkcore.dbcontext) in EF Core is a facade over connection, command, transaction objects.

## Related sections

- [5.2 Structural patterns](/en/chapter-5-design-patterns-for-backend-development/5-2-structural-patterns)
- [5.2.3 Decorator](/en/chapter-5-design-patterns-for-backend-development/5-2-3-decorator)
- [5.2.5 Bridge](/en/chapter-5-design-patterns-for-backend-development/5-2-5-bridge)
