---
title: Syntax
sidebar:
  order: 174
  label: 7.3.1 Syntax
---

**Context**: Lambda syntax: `(parameters) => expression`. The `=>` is the lambda operator.

## No parameters

```csharp
Action greet = () => Console.WriteLine("Hello");
```

## One parameter (parentheses optional)

```csharp
Func<int, int> doubleIt = x => x * 2;
```

## Multiple parameters

```csharp
Func<int, int, int> add = (a, b) => a + b;
```

## Explicitly typed parameters

```csharp
Func<int, string> toString = (int x) => x.ToString();
```

## Real-world usage example

**Event handlers**: Use lambda for simple event handling without a separate method.

```csharp
button.Click += (sender, e) => Console.WriteLine("Clicked");
```

**Example**: In [ASP.NET Core Minimal APIs](https://docs.microsoft.com/en-us/aspnet/core/fundamentals/minimal-apis), lambdas are used as endpoint handlers: `app.MapGet("/", () => "Hello")`.

## Related sections

- [7.3 Lambda expressions](/en/chapter-7-delegates-events-and-lambdas/7-3-lambda-expressions)
- [7.3.2 Statement lambdas](/en/chapter-7-delegates-events-and-lambdas/7-3-2-statement-lambdas)
