---
title: Anonymous functions
sidebar:
  order: 178
  label: 7.4 Anonymous functions
---

**Context**: Anonymous functions are methods without a name. C# has two kinds: lambda expressions and anonymous methods (using the `delegate` keyword).

```csharp
// Anonymous method (pre‑C# 3.0)
Func<int, int> square = delegate(int x) { return x * x; };

// Lambda expression (C# 3.0+)
Func<int, int> squareLambda = x => x * x;
```

## Real-world usage example

**Legacy codebases**: Older .NET Framework code often uses anonymous methods where lambdas are not available (C# 2.0).

**Example**: In [WinForms](https://docs.microsoft.com/en-us/dotnet/desktop/winforms/), you might still see `button.Click += delegate(object sender, EventArgs e) { ... };`.

## Related sections

- [7.4.1 delegate keyword pre lambda](/en/chapter-7-delegates-events-and-lambdas/7-4-1-delegate-keyword-pre-lambda)
- [7.4.2 Comparison with lambdas](/en/chapter-7-delegates-events-and-lambdas/7-4-2-comparison-with-lambdas)
