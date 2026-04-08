---
title: Abstract Factory
sidebar:
  order: 107
  label: 5.1.2 Abstract Factory
---

**Context**: Provide an interface for creating families of related or dependent objects without specifying their concrete classes.

```csharp
public interface IButton { void Render(); }
public interface ITextBox { void Render(); }

public class WinButton : IButton { public void Render() => Console.WriteLine("Win Button"); }
public class WinTextBox : ITextBox { public void Render() => Console.WriteLine("Win TextBox"); }

public interface IGUIFactory
{
    IButton CreateButton();
    ITextBox CreateTextBox();
}

public class WinFactory : IGUIFactory
{
    public IButton CreateButton() => new WinButton();
    public ITextBox CreateTextBox() => new WinTextBox();
}

// Usage
IGUIFactory factory = new WinFactory();
IButton btn = factory.CreateButton();
btn.Render();
```

## Real-world usage example

**Cross‑platform UI frameworks**: Abstract Factory creates platform‑specific controls (buttons, text boxes, windows) without changing client code. For Windows, use `WinFactory`; for macOS, use `MacFactory`.

**Example**: In .NET, [`System.Data.Common.DbProviderFactory`](https://docs.microsoft.com/en-us/dotnet/api/system.data.common.dbproviderfactory) is an abstract factory. Concrete factories like [`SqlClientFactory`](https://docs.microsoft.com/en-us/dotnet/api/microsoft.data.sqlclient.sqlclientfactory) create `DbConnection`, `DbCommand`, `DbDataAdapter` for specific databases.

## Related sections

- [5.1 Creational patterns](/en/chapter-5-design-patterns-for-backend-development/5-1-creational-patterns)
- [5.1.1 Factory Method](/en/chapter-5-design-patterns-for-backend-development/5-1-1-factory-method)
