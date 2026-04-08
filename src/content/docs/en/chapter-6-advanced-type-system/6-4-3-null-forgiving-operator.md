---
title: Null forgiving operator
sidebar:
  order: 153
  label: 6.4.3 Null forgiving operator
---

**Context**: The null forgiving operator (`!`) suppresses nullable warnings when you are certain that an expression is not null.

```csharp
#nullable enable
string? maybeNull = GetString();
int length = maybeNull!.Length; // no warning, but risky
```

## Use cases

- When you know a value is not null despite the compiler's analysis
- For unit testing where you intentionally assign null
- Interop with frameworks that use non‑nullable types but may return null

## Real-world usage example

**Dependency injection**: When you register a service as non‑nullable but the DI container guarantees it, you can use `!` after resolving.

```csharp
var service = services.GetRequiredService<IMyService>()!;
```

**Example**: In [ASP.NET Core](https://docs.microsoft.com/en-us/aspnet/core/fundamentals/dependency-injection), `GetRequiredService` throws if not found, so using `!` is safe.

## Related sections

- [6.4 Nullable reference types](/en/chapter-6-advanced-type-system/6-4-nullable-reference-types-c-8-and-later)
- [6.4.1 string question mark nullable reference](/en/chapter-6-advanced-type-system/6-4-1-string-question-mark-nullable-reference)
