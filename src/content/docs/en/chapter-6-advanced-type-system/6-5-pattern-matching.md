---
title: Pattern matching
sidebar:
  order: 155
  label: 6.5 Pattern matching
---

**Context**: Pattern matching simplifies conditional logic by matching expressions against patterns. It is used in `switch` expressions, `if` statements, and more.

```csharp
object obj = 42;
if (obj is int i)
{
    Console.WriteLine($"Integer: {i}");
}
```

## Real-world usage example

**Processing polymorphic events**: Use pattern matching in a `switch` expression to handle different message types (e.g., `UserCreated`, `OrderPaid`) without casting.

**Example**: In [Message processing pipelines](https://docs.microsoft.com/en-us/dotnet/architecture/microservices/architect-microservice-container-applications/communication-in-microservice-architecture), pattern matching simplifies the dispatcher.

## Related sections

- [6.5.1 Constant pattern](/en/chapter-6-advanced-type-system/6-5-1-constant-pattern)
- [6.5.2 Type pattern](/en/chapter-6-advanced-type-system/6-5-2-type-pattern)
- [6.5.3 Property pattern](/en/chapter-6-advanced-type-system/6-5-3-property-pattern)
- [6.5.4 Positional pattern](/en/chapter-6-advanced-type-system/6-5-4-positional-pattern)
- [6.5.5 List patterns C# 11](/en/chapter-6-advanced-type-system/6-5-5-list-patterns-c-11)
- [6.5.6 var pattern](/en/chapter-6-advanced-type-system/6-5-6-var-pattern)
