---
title: Strategy
sidebar:
  order: 120
  label: 5.3.1 Strategy
---

**Context**: Define a family of algorithms, encapsulate each one, and make them interchangeable. Strategy lets the algorithm vary independently from clients that use it.

```csharp
public interface IStrategy
{
    void Execute();
}

public class ConcreteStrategyA : IStrategy
{
    public void Execute() => Console.WriteLine("Strategy A");
}

public class Context
{
    private IStrategy _strategy;
    public void SetStrategy(IStrategy strategy) => _strategy = strategy;
    public void DoWork() => _strategy.Execute();
}
```

## Real-world usage example

**Payment processing**: An e‑commerce site selects different strategies: `CreditCardStrategy`, `PayPalStrategy`, `CryptoStrategy` based on user choice. The `CheckoutContext` uses the selected strategy to calculate final amount.

**Example**: Sorting in .NET: [`List<T>.Sort(IComparer<T>)`](https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.list-1.sort) allows plugging different comparer strategies (by name, by price, by date). Also, [`System.Text.Encoding`](https://docs.microsoft.com/en-us/dotnet/api/system.text.encoding) strategies for different character encodings.

## Related sections

- [5.3 Behavioural patterns](/en/chapter-5-design-patterns-for-backend-development/5-3-behavioural-patterns)
- [5.3.2 Command](/en/chapter-5-design-patterns-for-backend-development/5-3-2-command)
