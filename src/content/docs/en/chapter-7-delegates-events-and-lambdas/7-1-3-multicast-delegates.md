---
title: Multicast delegates
sidebar:
  order: 166
  label: 7.1.3 Multicast delegates
---

**Context**: Delegates can hold multiple methods using the `+` and `-` operators. Invoking a multicast delegate calls all methods in order.

```csharp
public delegate void Notify(string message);

public static void LogToFile(string msg) => Console.WriteLine($"File: {msg}");
public static void LogToConsole(string msg) => Console.WriteLine($"Console: {msg}");

Notify logger = LogToFile;
logger += LogToConsole; // add second method

logger("Hello"); // both methods are called
```

## Removing methods

```csharp
logger -= LogToFile; // removes first method
logger("Only console");
```

## Return values

For multicast delegates with non‑void return, only the last method's return value is kept. Use `GetInvocationList()` to process all.

```csharp
foreach (Notify n in logger.GetInvocationList())
{
    n("Processing");
}
```

## Real-world usage example

**Event notifications**: Multiple subscribers to an event are stored as a multicast delegate. Raising the event notifies all subscribers.

**Example**: In [ASP.NET Core](https://docs.microsoft.com/en-us/aspnet/core/fundamentals/events), the `IApplicationLifetime` events use multicast delegates.

## Related sections

- [7.1 Delegates](/en/chapter-7-delegates-events-and-lambdas/7-1-delegates)
- [7.2 Events](/en/chapter-7-delegates-events-and-lambdas/7-2-events)
