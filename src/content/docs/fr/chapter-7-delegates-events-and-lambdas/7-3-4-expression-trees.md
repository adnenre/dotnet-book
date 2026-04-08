---
title: Arbres d’expressions
sidebar:
  order: 177
  label: 7.3.4 Arbres d’expressions
---

**Contexte** : Les arbres d’expressions représentent les expressions lambda sous forme de structures de données (arbres syntaxiques abstraits). Ils sont utilisés pour analyser, modifier ou traduire des lambdas (par exemple en SQL).

```csharp
using System.Linq.Expressions;

Expression<Func<int, int>> expr = x => x * 2;
Console.WriteLine(expr); // x => (x * 2)

// Compilation et invocation
Func<int, int> compiled = expr.Compile();
Console.WriteLine(compiled(5)); // 10
```

## Inspection d’un arbre d’expressions

```csharp
var body = expr.Body as BinaryExpression;
Console.WriteLine(body.NodeType); // Multiply
```

## Construction manuelle d’expressions

```csharp
ParameterExpression param = Expression.Parameter(typeof(int), "x");
ConstantExpression constant = Expression.Constant(2);
BinaryExpression multiply = Expression.Multiply(param, constant);
Expression<Func<int, int>> expr2 = Expression.Lambda<Func<int, int>>(multiply, param);
```

## Exemple d'utilisation dans le monde réel

**Traduction de requêtes ORM** : Entity Framework Core convertit les requêtes LINQ (arbres d’expressions) en SQL.

**Exemple** : [Documentation EF Core sur les requêtes](https://docs.microsoft.com/en-us/ef/core/querying/) utilise les arbres d’expressions pour traduire `Where(x => x.Id == 1)` en `WHERE [Id] = 1`.

## Sections connexes

- [7.3 Expressions lambda](/fr/chapter-7-delegates-events-and-lambdas/7-3-lambda-expressions)
- [7.3.1 Syntaxe](/fr/chapter-7-delegates-events-and-lambdas/7-3-1-syntax)
