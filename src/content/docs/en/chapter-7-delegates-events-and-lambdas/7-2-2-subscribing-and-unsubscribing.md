---
title: Subscribing and unsubscribing
sidebar:
  order: 170
  label: 7.2.2 Subscribing and unsubscribing
---

**Context**: Subscribers add their event handlers using `+=` and remove them using `-=`. This prevents memory leaks when the subscriber outlives the publisher.

## Subscribing

```csharp
Button button = new Button();
button.Clicked += OnButtonClicked; // subscribe

private void OnButtonClicked(object sender, EventArgs e)
{
    Console.WriteLine("Button clicked");
}
```

## Unsubscribing

```csharp
button.Clicked -= OnButtonClicked; // unsubscribe
```

## Using lambda expressions

```csharp
button.Clicked += (sender, e) => Console.WriteLine("Clicked");
// Unsubscribing from lambda is tricky; store the delegate in a variable.
EventHandler handler = (s, e) => Console.WriteLine("Clicked");
button.Clicked += handler;
button.Clicked -= handler;
```

## Real-world usage example

**Dispose pattern**: In long‑lived applications, always unsubscribe from events in the `Dispose` method to avoid memory leaks.

**Example**: In [WinForms](https://docs.microsoft.com/en-us/dotnet/desktop/winforms/), controls unsubscribe from events when disposed.

## Related sections

- [7.2 Events](/en/chapter-7-delegates-events-and-lambdas/7-2-events)
- [7.2.3 Event invocation](/en/chapter-7-delegates-events-and-lambdas/7-2-3-event-invocation)
