---
title: Expression trees
sidebar:
  order: 177
  label: 7.3.4 Expression trees
---

**Context**: Expression trees represent lambda expressions as data structures (abstract syntax trees). They are used to analyze, modify, or translate lambdas (e.g., to SQL).

```csharp
using System.Linq.Expressions;

Expression<Func<int, int>> expr = x => x * 2;
Console.WriteLine(expr); // x => (x * 2)

// Compile and invoke
Func<int, int> compiled = expr.Compile();
Console.WriteLine(compiled(5)); // 10
```

## Inspecting expression trees

```csharp
var body = expr.Body as BinaryExpression;
Console.WriteLine(body.NodeType); // Multiply
```

## Building expressions manually

```csharp
ParameterExpression param = Expression.Parameter(typeof(int), "x");
ConstantExpression constant = Expression.Constant(2);
BinaryExpression multiply = Expression.Multiply(param, constant);
Expression<Func<int, int>> expr2 = Expression.Lambda<Func<int, int>>(multiply, param);
```

## Real-world usage example

**ORM query translation**: Entity Framework Core converts LINQ queries (expression trees) to SQL.

**Example**: [EF Core Querying](https://docs.microsoft.com/en-us/ef/core/querying/) uses expression trees to translate `Where(x => x.Id == 1)` into `WHERE [Id] = 1`.

## Related sections

- [7.3 Lambda expressions](/en/chapter-7-delegates-events-and-lambdas/7-3-lambda-expressions)
- [7.3.1 Syntax](/en/chapter-7-delegates-events-and-lambdas/7-3-1-syntax)
