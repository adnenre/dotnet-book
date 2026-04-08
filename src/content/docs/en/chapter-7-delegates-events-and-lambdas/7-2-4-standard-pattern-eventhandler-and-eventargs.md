---
title: Standard pattern EventHandler and EventArgs
sidebar:
  order: 172
  label: 7.2.4 Standard pattern EventHandler and EventArgs
---

**Context**: The .NET standard event pattern uses `EventHandler` delegate and `EventArgs` (or a derived class) to pass event data.

## `EventHandler` delegate

```csharp
public delegate void EventHandler(object sender, EventArgs e);
public delegate void EventHandler<TEventArgs>(object sender, TEventArgs e);
```

## Custom EventArgs

```csharp
public class OrderEventArgs : EventArgs
{
    public int OrderId { get; set; }
    public decimal Amount { get; set; }
}
```

## Implementing the pattern

```csharp
public class OrderProcessor
{
    public event EventHandler<OrderEventArgs> OrderProcessed;

    protected virtual void OnOrderProcessed(OrderEventArgs e)
    {
        OrderProcessed?.Invoke(this, e);
    }

    public void Process(int orderId, decimal amount)
    {
        // processing logic
        OnOrderProcessed(new OrderEventArgs { OrderId = orderId, Amount = amount });
    }
}
```

## Real-world usage example

**All .NET UI frameworks**: `Button.Click` uses `EventHandler`. `Form.Load` uses `EventHandler`. `DataGridView.CellClick` uses `DataGridViewCellEventArgs` derived from `EventArgs`.

**Example**: [`System.EventArgs`](https://docs.microsoft.com/en-us/dotnet/api/system.eventargs) documentation shows many derived types.

## Related sections

- [7.2 Events](/en/chapter-7-delegates-events-and-lambdas/7-2-events)
- [7.5 Project Button Click Simulator Event](/en/chapter-7-delegates-events-and-lambdas/7-5-project-button-click-simulator-event)
