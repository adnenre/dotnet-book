---
title: event keyword
sidebar:
  order: 169
  label: 7.2.1 event keyword
---

**Context**: The `event` keyword restricts how a delegate field can be used. Only the declaring class can invoke the event; outside code can only add or remove handlers.

## Declaration

```csharp
public class Publisher
{
    // Declare an event based on a delegate type
    public event EventHandler SomethingHappened;
}
```

## Behind the scenes

The compiler creates a private delegate field and adds `add` and `remove` accessors.

```csharp
// Rough equivalent
private EventHandler _somethingHappened;
public event EventHandler SomethingHappened
{
    add { _somethingHappened += value; }
    remove { _somethingHappened -= value; }
}
```

## Custom event accessors

You can provide your own add/remove logic.

```csharp
private EventHandler _handlers;
public event EventHandler MyEvent
{
    add { _handlers += value; Console.WriteLine("Added"); }
    remove { _handlers -= value; Console.WriteLine("Removed"); }
}
```

## Real-world usage example

**Property change notification**: In MVVM frameworks, the `PropertyChanged` event is declared with the `event` keyword, allowing the view to subscribe.

**Example**: [`INotifyPropertyChanged`](https://docs.microsoft.com/en-us/dotnet/api/system.componentmodel.inotifypropertychanged) uses an event `PropertyChanged`.

## Related sections

- [7.2 Events](/en/chapter-7-delegates-events-and-lambdas/7-2-events)
- [7.2.2 Subscribing and unsubscribing](/en/chapter-7-delegates-events-and-lambdas/7-2-2-subscribing-and-unsubscribing)
