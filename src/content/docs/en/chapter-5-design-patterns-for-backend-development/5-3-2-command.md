---
title: Command
sidebar:
  order: 121
  label: 5.3.2 Command
---

**Context**: Encapsulate a request as an object, thereby letting you parameterize clients with queues, requests, and operations.

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

## Real-world usage example

**Undo/redo in editors**: Each user action (insert, delete, format) becomes a command with `Execute()` and `Undo()`. The history stack stores commands for undo/redo.

**Example**: In ASP.NET Core MVC, [controller actions](https://docs.microsoft.com/en-us/aspnet/core/mvc/controllers/actions) are command objects. Also, [`ICommand` in WPF/MVVM](https://docs.microsoft.com/en-us/dotnet/api/system.windows.input.icommand) and [`BackgroundService`](https://docs.microsoft.com/en-us/dotnet/api/microsoft.extensions.hosting.backgroundservice) with command queuing.

## Related sections

- [5.3 Behavioural patterns](/en/chapter-5-design-patterns-for-backend-development/5-3-behavioural-patterns)
- [5.3.1 Strategy](/en/chapter-5-design-patterns-for-backend-development/5-3-1-strategy)
- [5.3.3 Observer](/en/chapter-5-design-patterns-for-backend-development/5-3-3-observer)
