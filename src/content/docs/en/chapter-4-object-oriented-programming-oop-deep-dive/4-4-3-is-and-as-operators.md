---
title: is and as operators
sidebar:
  order: 94
  label: 4.4.3 is and as operators
---

**Context**: `is` checks if an object is compatible with a given type; `as` performs a safe cast (returns `null` if incompatible).

## `is` Operator

```csharp
object obj = "Hello";
if (obj is string)
{
    Console.WriteLine("It's a string");
}

// Pattern matching (C# 7+)
if (obj is string s)
{
    Console.WriteLine($"Length: {s.Length}");
}
```

## `as` Operator

```csharp
object obj = "Hello";
string str = obj as string;
if (str != null)
{
    Console.WriteLine(str.Length);
}
// If obj is not a string, str is null (no exception)
```

## Difference from Cast

- `(string)obj` throws `InvalidCastException` on failure.
- `as` returns `null` (only for reference types and nullable value types).
- `is` does not cast; just checks.

## Type Pattern

```csharp
if (shape is Circle circle)
{
    Console.WriteLine($"Radius: {circle.Radius}");
}
```
