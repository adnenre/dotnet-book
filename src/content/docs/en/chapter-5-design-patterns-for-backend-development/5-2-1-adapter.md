---
title: Adapter
sidebar:
  order: 112
  label: 5.2.1 Adapter
---

**Context**: Convert the interface of a class into another interface clients expect. Adapter lets classes work together that couldn't otherwise because of incompatible interfaces.

```csharp
// Adaptee
public class Adaptee
{
    public string SpecificRequest() => "Specific response";
}

// Target interface
public interface ITarget
{
    string Request();
}

// Adapter
public class Adapter : ITarget
{
    private readonly Adaptee _adaptee;
    public Adapter(Adaptee adaptee) => _adaptee = adaptee;
    public string Request() => _adaptee.SpecificRequest();
}

// Usage
Adaptee adaptee = new();
ITarget target = new Adapter(adaptee);
Console.WriteLine(target.Request());
```

## Real-world usage example

**Database providers**: An application uses a common `IDatabase` interface. Adapters for MySQL, PostgreSQL, and SQL Server convert their native APIs to `IDatabase`.

**Example**: In .NET, [`SqlDataAdapter`](https://docs.microsoft.com/en-us/dotnet/api/microsoft.data.sqlclient.sqldataadapter) fills `DataSet` – it adapts the SQL DataReader to a disconnected data container. Also, the [`ConfigurationManager`](https://docs.microsoft.com/en-us/dotnet/api/system.configuration.configurationmanager) adapts different configuration sources.

## Related sections

- [5.2 Structural patterns](/en/chapter-5-design-patterns-for-backend-development/5-2-structural-patterns)
- [5.2.2 Proxy](/en/chapter-5-design-patterns-for-backend-development/5-2-2-proxy)
