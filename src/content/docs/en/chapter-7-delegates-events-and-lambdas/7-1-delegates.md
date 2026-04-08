---
title: Delegates
sidebar:
  order: 163
  label: 7.1 Delegates
---

**Context**: Delegates are type‑safe function pointers that reference methods with a specific signature. They enable callbacks, event handling, and flexible method invocation.

A delegate defines the signature of a method. You can assign any matching method to a delegate variable and invoke it.

```csharp
public delegate int MathOperation(int a, int b);

public static int Add(int x, int y) => x + y;
public static int Multiply(int x, int y) => x * y;

MathOperation op = Add;
int result = op(3, 4); // 7
```

## Real-world usage example

**Callback methods in asynchronous programming**: Delegates are used to pass callback methods to asynchronous operations, allowing code to run when the operation completes.

**Example**: In .NET, [`Action<T>`](https://docs.microsoft.com/en-us/dotnet/api/system.action-1) and [`Func<TResult>`](https://docs.microsoft.com/en-us/dotnet/api/system.func-1) are generic delegates used extensively in LINQ, Task Parallel Library, and event handling.

## Related sections

- [7.1.1 Declaration](/en/chapter-7-delegates-events-and-lambdas/7-1-1-declaration)
- [7.1.2 Instantiation and invocation](/en/chapter-7-delegates-events-and-lambdas/7-1-2-instantiation-invocation)
- [7.1.3 Multicast delegates](/en/chapter-7-delegates-events-and-lambdas/7-1-3-multicast-delegates)
- [7.1.4 Generic delegates Action Func Predicate](/en/chapter-7-delegates-events-and-lambdas/7-1-4-generic-delegates-action-func-predicate)
