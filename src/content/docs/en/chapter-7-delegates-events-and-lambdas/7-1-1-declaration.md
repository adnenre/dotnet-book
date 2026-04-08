---
title: Declaration
sidebar:
  order: 164
  label: 7.1.1 Declaration
---

**Context**: Declare a delegate using the `delegate` keyword, specifying the return type and parameter types.

## Syntax

```csharp
[access modifier] delegate returnType DelegateName(parameters);
```

## Example

```csharp
public delegate void PrintMessage(string message);
public delegate int Calculator(int a, int b);
```

## Delegate as a type

Delegates are reference types. You can declare them at namespace or class level.

```csharp
public class MathOperations
{
    public delegate double Operation(double x, double y);
}
```

## Real-world usage example

**Defining custom callbacks**: In UI frameworks, you might declare a delegate for validation callbacks (e.g., `delegate bool ValidateInput(string input)`).

**Example**: In [ASP.NET Core](https://docs.microsoft.com/en-us/aspnet/core/fundamentals/middleware), custom middleware often uses delegate declarations for request handling.

## Related sections

- [7.1 Delegates](/en/chapter-7-delegates-events-and-lambdas/7-1-delegates)
- [7.1.2 Instantiation and invocation](/en/chapter-7-delegates-events-and-lambdas/7-1-2-instantiation-invocation)
