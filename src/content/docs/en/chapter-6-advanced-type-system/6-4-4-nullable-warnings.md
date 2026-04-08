---
title: Nullable warnings
sidebar:
  order: 154
  label: 6.4.4 Nullable warnings
---

**Context**: When nullable annotations are enabled, the compiler produces warnings for potentially unsafe null operations.

## Common warnings

- **CS8618**: Non‑nullable property uninitialized
- **CS8600**: Converting null literal to non‑nullable type
- **CS8602**: Dereference of a possibly null reference
- **CS8625**: Cannot convert null literal to non‑nullable type

## Fixing warnings

```csharp
public class Person
{
    public string Name { get; set; } // CS8618
}
// Fix: initialize
public class Person
{
    public string Name { get; set; } = "";
}
```

## Using nullable checks

```csharp
string? name = GetName();
if (name != null)
{
    int length = name.Length; // no warning
}
// Or using null‑conditional operator
int? length = name?.Length;
```

## Real-world usage example

**Team coding standards**: Enforce nullable warnings as errors in CI/CD to prevent null reference exceptions in production.

**Example**: In a [GitHub Actions](https://docs.microsoft.com/en-us/dotnet/devops/ci-cd/github-actions) workflow, add `-p:WarningsAsErrors=nullable` to `dotnet build`.

## Related sections

- [6.4 Nullable reference types](/en/chapter-6-advanced-type-system/6-4-nullable-reference-types-c-8-and-later)
- [6.4.2 Nullable annotation context](/en/chapter-6-advanced-type-system/6-4-2-nullable-annotation-context)
