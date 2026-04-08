---
title: Memento
sidebar:
  order: 125
  label: 5.3.6 Memento
---

**Context**: Without violating encapsulation, capture and externalize an object's internal state so that the object can be restored to this state later.

```csharp
public class Memento
{
    public string State { get; }
    public Memento(string state) => State = state;
}

public class Originator
{
    public string State { get; set; }
    public Memento Save() => new Memento(State);
    public void Restore(Memento m) => State = m.State;
}

public class Caretaker
{
    public Memento Memento { get; set; }
}
```

## Real-world usage example

**Undo mechanism**: A text editor saves a memento before each change. The caretaker (history stack) stores mementos to restore previous states.

**Example**: In C#, [serialization](https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/concepts/serialization/) (binary, XML, JSON) can be used to save object state – a form of memento. Also, [`ITrackable` in Entity Framework Core](https://docs.microsoft.com/en-us/ef/core/change-tracking/) tracks original values for concurrency.

## Related sections

- [5.3 Behavioural patterns](/en/chapter-5-design-patterns-for-backend-development/5-3-behavioural-patterns)
- [5.3.5 Mediator](/en/chapter-5-design-patterns-for-backend-development/5-3-5-mediator)
- [5.3.7 State](/en/chapter-5-design-patterns-for-backend-development/5-3-7-state)
