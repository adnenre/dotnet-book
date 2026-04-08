---
title: Statement lambdas
sidebar:
  order: 175
  label: 7.3.2 Statement lambdas
---

**Context**: Statement lambdas have a block of statements inside braces `{}`. They can contain multiple statements, loops, conditionals, and even local variables.

```csharp
Action<int> printSquare = x =>
{
    int square = x * x;
    Console.WriteLine($"Square of {x} is {square}");
};
printSquare(5);
```

## With return value

```csharp
Func<int, int, int> max = (a, b) =>
{
    if (a > b) return a;
    return b;
};
```

## Use in LINQ (less common but possible)

```csharp
var numbers = new List<int> { 1, 2, 3, 4 };
var evenSquares = numbers.Where(x => x % 2 == 0)
                         .Select(x =>
                         {
                             int square = x * x;
                             return square;
                         });
```

## Real-world usage example

**Complex event handlers**: When an event handler needs multiple steps (logging, validation, processing), use a statement lambda.

**Example**: In [WinForms](https://docs.microsoft.com/en-us/dotnet/desktop/winforms/), you can write `button.Click += (s, e) => { MessageBox.Show("Hi"); LogClick(); };`.

## Related sections

- [7.3 Lambda expressions](/en/chapter-7-delegates-events-and-lambdas/7-3-lambda-expressions)
- [7.3.1 Syntax](/en/chapter-7-delegates-events-and-lambdas/7-3-1-syntax)
