---
title: Instantiation and invocation
sidebar:
  order: 165
  label: 7.1.2 Instantiation and invocation
---

**Context**: Create a delegate instance by referencing a method (using the method name or a lambda). Invoke it like a method.

## Instantiation

```csharp
public delegate void Display(string text);

public static void Show(string msg) => Console.WriteLine(msg);

// Old syntax (C# 1.0)
Display d1 = new Display(Show);

// Simplified syntax (C# 2.0+)
Display d2 = Show;

// Using lambda (C# 3.0+)
Display d3 = (msg) => Console.WriteLine(msg);
```

## Invocation

```csharp
d2("Hello"); // invokes Show
d3("World");
```

## Null check

Always check for null before invoking a delegate.

```csharp
if (d2 != null) d2("Safe");
// Or using null‑conditional operator
d2?.Invoke("Safe");
```

## Real-world usage example

**Button click handlers**: In Windows Forms or WPF, you instantiate a delegate to wire a button click event to a method.

**Example**: In [WinForms](https://docs.microsoft.com/en-us/dotnet/desktop/winforms/), `button.Click += new EventHandler(Button_Click);` instantiates an `EventHandler` delegate.

## Related sections

- [7.1 Delegates](/en/chapter-7-delegates-events-and-lambdas/7-1-delegates)
- [7.1.3 Multicast delegates](/en/chapter-7-delegates-events-and-lambdas/7-1-3-multicast-delegates)
