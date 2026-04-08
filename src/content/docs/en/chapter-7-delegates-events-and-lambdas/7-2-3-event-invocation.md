---
title: Event invocation
sidebar:
  order: 171
  label: 7.2.3 Event invocation
---

**Context**: Only the class that declares the event can invoke it (raise the event). Invocation is done by calling the delegate field (with null check).

## Standard invocation pattern

```csharp
public class Button
{
    public event EventHandler Clicked;

    protected virtual void OnClicked()
    {
        Clicked?.Invoke(this, EventArgs.Empty);
    }

    public void SimulateClick()
    {
        OnClicked();
    }
}
```

## Why `protected virtual`?

Derived classes can override the raising method to add custom behavior.

```csharp
public class SpecialButton : Button
{
    protected override void OnClicked()
    {
        Console.WriteLine("Special logging");
        base.OnClicked();
    }
}
```

## Thread safety

Use a copy of the delegate to avoid null reference in multi‑threaded scenarios.

```csharp
var handler = Clicked;
if (handler != null) handler(this, EventArgs.Empty);
```

## Real-world usage example

**Custom event raising**: In a `Timer` class, you raise the `Elapsed` event when time is up using `OnElapsed()`.

**Example**: [`System.Timers.Timer`](https://docs.microsoft.com/en-us/dotnet/api/system.timers.timer) raises the `Elapsed` event on a background thread.

## Related sections

- [7.2 Events](/en/chapter-7-delegates-events-and-lambdas/7-2-events)
- [7.2.4 Standard pattern EventHandler and EventArgs](/en/chapter-7-delegates-events-and-lambdas/7-2-4-standard-pattern-eventhandler-and-eventargs)
