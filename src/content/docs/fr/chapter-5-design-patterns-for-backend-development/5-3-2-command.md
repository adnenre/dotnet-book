---
title: Command
sidebar:
  order: 121
  label: 5.3.2 Command
---

**Contexte** : Encapsuler une requête sous forme d’objet, ce qui permet de paramétrer des clients avec des files d’attente, des requêtes et des opérations.

```csharp
public interface ICommand
{
    void Execute();
}

public class Receiver
{
    public void Action() => Console.WriteLine("Receiver action");
}

public class ConcreteCommand : ICommand
{
    private Receiver _receiver;
    public ConcreteCommand(Receiver receiver) => _receiver = receiver;
    public void Execute() => _receiver.Action();
}

public class Invoker
{
    private ICommand _command;
    public void SetCommand(ICommand command) => _command = command;
    public void PressButton() => _command.Execute();
}
```

## Exemple d'utilisation dans le monde réel

**Annuler/rétablir dans les éditeurs** : Chaque action utilisateur (insertion, suppression, formatage) devient une commande avec `Execute()` et `Undo()`. La pile d’historique stocke les commandes pour annuler/rétablir.

**Exemple** : Dans ASP.NET Core MVC, [les actions de contrôleur](https://docs.microsoft.com/en-us/aspnet/core/mvc/controllers/actions) sont des objets commande. De même, [`ICommand` dans WPF/MVVM](https://docs.microsoft.com/en-us/dotnet/api/system.windows.input.icommand) et [`BackgroundService`](https://docs.microsoft.com/en-us/dotnet/api/microsoft.extensions.hosting.backgroundservice) avec file d’attente de commandes.

## Sections connexes

- [5.3 Patrons comportementaux](/fr/chapter-5-design-patterns-for-backend-development/5-3-behavioural-patterns)
- [5.3.1 Strategy](/fr/chapter-5-design-patterns-for-backend-development/5-3-1-strategy)
- [5.3.3 Observer](/fr/chapter-5-design-patterns-for-backend-development/5-3-3-observer)
