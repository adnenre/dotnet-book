---
title: Capturing outer variables closures
sidebar:
  order: 176
  label: 7.3.3 Capturing outer variables closures
---

**Context**: Lambdas can capture variables from the enclosing scope. The captured variables are stored in a closure and live as long as the lambda.

```csharp
int factor = 2;
Func<int, int> multiplier = x => x * factor;
Console.WriteLine(multiplier(5)); // 10

factor = 3;
Console.WriteLine(multiplier(5)); // 15 (captures by reference)
```

## Capturing local variables

```csharp
List<Action> actions = new List<Action>();
for (int i = 0; i < 3; i++)
{
    int captured = i;
    actions.Add(() => Console.WriteLine(captured));
}
foreach (var a in actions) a(); // 0,1,2 (not 3,3,3)
```

## Performance implications

Capturing can cause allocations (closure objects). Avoid capturing in performance‑critical loops.

## Real-world usage example

**Task continuation**: Capturing `userId` in an async task continuation.

```csharp
int userId = GetUserId();
Task.Run(() => ProcessUser(userId));
```

**Example**: In [ASP.NET Core](https://docs.microsoft.com/en-us/aspnet/core/fundamentals/middleware), lambdas in middleware often capture configuration values.

## Related sections

- [7.3 Lambda expressions](/en/chapter-7-delegates-events-and-lambdas/7-3-lambda-expressions)
- [7.3.2 Statement lambdas](/en/chapter-7-delegates-events-and-lambdas/7-3-2-statement-lambdas)
