---
title: Adapter
sidebar:
  order: 112
  label: 5.2.1 Adapter
---

**Contexte** : Convertir l’interface d’une classe en une interface attendue par les clients. Adapter permet à des classes de fonctionner ensemble alors qu’elles ne le pourraient pas autrement à cause d’interfaces incompatibles.

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

## Exemple d'utilisation dans le monde réel

**Fournisseurs de bases de données** : Une application utilise une interface commune `IDatabase`. Des adaptateurs pour MySQL, PostgreSQL et SQL Server convertissent leurs API natives en `IDatabase`.

**Exemple** : Dans .NET, [`SqlDataAdapter`](https://docs.microsoft.com/en-us/dotnet/api/microsoft.data.sqlclient.sqldataadapter) remplit un `DataSet` – il adapte le `DataReader` SQL à un conteneur de données déconnecté. De même, [`ConfigurationManager`](https://docs.microsoft.com/en-us/dotnet/api/system.configuration.configurationmanager) adapte différentes sources de configuration.

## Sections connexes

- [5.2 Patrons structurels](/fr/chapter-5-design-patterns-for-backend-development/5-2-structural-patterns)
- [5.2.2 Proxy](/fr/chapter-5-design-patterns-for-backend-development/5-2-2-proxy)
