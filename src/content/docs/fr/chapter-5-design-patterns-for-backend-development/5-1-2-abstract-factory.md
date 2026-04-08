---
title: Abstract Factory
sidebar:
  order: 107
  label: 5.1.2 Abstract Factory
---

**Contexte** : Fournir une interface pour créer des familles d’objets liés ou dépendants sans spécifier leurs classes concrètes.

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

## Exemple d'utilisation dans le monde réel

**Frameworks UI multiplateformes** : Abstract Factory crée des contrôles spécifiques à la plateforme (boutons, zones de texte, fenêtres) sans changer le code client. Pour Windows, utilisez `WinFactory` ; pour macOS, `MacFactory`.

**Exemple** : Dans .NET, [`System.Data.Common.DbProviderFactory`](https://docs.microsoft.com/en-us/dotnet/api/system.data.common.dbproviderfactory) est une fabrique abstraite. Les fabriques concrètes comme [`SqlClientFactory`](https://docs.microsoft.com/en-us/dotnet/api/microsoft.data.sqlclient.sqlclientfactory) créent `DbConnection`, `DbCommand`, `DbDataAdapter` pour des bases de données spécifiques.

## Sections connexes

- [5.1 Patrons de création](/fr/chapter-5-design-patterns-for-backend-development/5-1-creational-patterns)
- [5.1.1 Factory Method](/fr/chapter-5-design-patterns-for-backend-development/5-1-1-factory-method)
- [5.1.3 Singleton](/fr/chapter-5-design-patterns-for-backend-development/5-1-3-singleton)
