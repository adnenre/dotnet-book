---
title: delegate keyword pre lambda
sidebar:
  order: 179
  label: 7.4.1 delegate keyword pre lambda
---

**Context**: Before C# 3.0, anonymous methods were written using the `delegate` keyword. They can still be used but are largely superseded by lambdas.

## Syntax

```csharp
delegate(parameters) { statements }
```

## Examples

```csharp
Action<string> print = delegate(string msg)
{
    Console.WriteLine(msg);
};

Func<int, int> doubleIt = delegate(int x)
{
    return x * 2;
};
```

## Capturing outer variables

Same as lambdas: they create closures.

```csharp
int factor = 3;
Func<int, int> multiply = delegate(int x) { return x * factor; };
```

## Real-world usage example

**Compatibility with C# 2.0**: If you need to write code that compiles on .NET Framework 2.0, you must use anonymous methods instead of lambdas.

**Example**: In some legacy [ASP.NET WebForms](https://docs.microsoft.com/en-us/aspnet/web-forms/), you might still see `delegate` used in event handlers.

## Related sections

- [7.4 Anonymous functions](/en/chapter-7-delegates-events-and-lambdas/7-4-anonymous-functions)
- [7.4.2 Comparison with lambdas](/en/chapter-7-delegates-events-and-lambdas/7-4-2-comparison-with-lambdas)
