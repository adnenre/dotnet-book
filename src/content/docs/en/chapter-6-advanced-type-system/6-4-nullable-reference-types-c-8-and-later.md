---
title: Nullable reference types C# 8 and later
sidebar:
  order: 150
  label: 6.4 Nullable reference types C# 8 and later
---

**Context**: Nullable reference types help prevent null reference exceptions by distinguishing between nullable and non‑nullable reference types.

```csharp
#nullable enable
string nonNullable = "Hello";
string? nullable = null;
nonNullable = nullable; // warning: possible null assignment
```

## Real-world usage example

**API contracts**: Mark optional fields as `string?` and required fields as `string`. This documents the contract and the compiler enforces null checks.

**Example**: In ASP.NET Core, model binding respects nullable annotations. The [Swagger/OpenAPI](https://docs.microsoft.com/en-us/aspnet/core/tutorials/getting-started-with-swashbuckle) generator uses them to mark optional parameters.

## Related sections

- [6.4.1 string question mark nullable reference](/en/chapter-6-advanced-type-system/6-4-1-string-question-mark-nullable-reference)
- [6.4.2 Nullable annotation context](/en/chapter-6-advanced-type-system/6-4-2-nullable-annotation-context)
