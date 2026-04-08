---
title: Events
sidebar:
  order: 168
  label: 7.2 Events
---

**Context**: Events enable a class to notify other classes when something happens. They are built on delegates and provide a publish‑subscribe pattern.

Events are declared using the `event` keyword and a delegate type. Only the declaring class can invoke the event; subscribers can only add/remove handlers.

```csharp
public class Button
{
    public event EventHandler Clicked;
    protected virtual void OnClicked() => Clicked?.Invoke(this, EventArgs.Empty);
}
```

## Real-world usage example

**UI frameworks**: Buttons, text boxes, and other controls expose events like `Click`, `TextChanged`, `MouseMove` that your code can subscribe to.

**Example**: In [WinForms](https://docs.microsoft.com/en-us/dotnet/desktop/winforms/), every control has events. [ASP.NET Core Blazor](https://docs.microsoft.com/en-us/aspnet/core/blazor/components/event-handling) also uses events for component communication.

## Related sections

- [7.2.1 event keyword](/en/chapter-7-delegates-events-and-lambdas/7-2-1-event-keyword)
- [7.2.2 Subscribing and unsubscribing](/en/chapter-7-delegates-events-and-lambdas/7-2-2-subscribing-and-unsubscribing)
- [7.2.3 Event invocation](/en/chapter-7-delegates-events-and-lambdas/7-2-3-event-invocation)
- [7.2.4 Standard pattern EventHandler and EventArgs](/en/chapter-7-delegates-events-and-lambdas/7-2-4-standard-pattern-eventhandler-and-eventargs)
