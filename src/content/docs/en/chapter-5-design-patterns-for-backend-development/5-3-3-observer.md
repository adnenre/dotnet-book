---
title: Observer
sidebar:
  order: 122
  label: 5.3.3 Observer
---

**Context**: Define a one‑to‑many dependency between objects so that when one object changes state, all its dependents are notified and updated automatically.

```csharp
public interface IObserver
{
    void Update(string message);
}

public class ConcreteObserver : IObserver
{
    private string _name;
    public ConcreteObserver(string name) => _name = name;
    public void Update(string message) => Console.WriteLine($"{_name} received: {message}");
}

public class Subject
{
    private List<IObserver> _observers = new();
    public void Attach(IObserver observer) => _observers.Add(observer);
    public void Notify(string message)
    {
        foreach (var o in _observers) o.Update(message);
    }
}
```

## Real-world usage example

**Event handling in UI**: Buttons notify all registered event handlers when clicked. Multiple UI elements can listen to the same data source and refresh when data changes.

**Example**: In .NET, [`INotifyPropertyChanged`](https://docs.microsoft.com/en-us/dotnet/api/system.componentmodel.inotifypropertychanged) is used in MVVM (WPF, MAUI). [`System.Reactive` (Rx.NET)](https://github.com/dotnet/reactive) implements observable sequences. Also, [`EventAggregator` in Prism](https://github.com/PrismLibrary/Prism) and [`IObservable<T>` / `IObserver<T>`](https://docs.microsoft.com/en-us/dotnet/api/system.iobservable-1).

## Related sections

- [5.3 Behavioural patterns](/en/chapter-5-design-patterns-for-backend-development/5-3-behavioural-patterns)
- [5.3.2 Command](/en/chapter-5-design-patterns-for-backend-development/5-3-2-command)
- [5.3.4 Chain of Responsibility](/en/chapter-5-design-patterns-for-backend-development/5-3-4-chain-of-responsibility)
