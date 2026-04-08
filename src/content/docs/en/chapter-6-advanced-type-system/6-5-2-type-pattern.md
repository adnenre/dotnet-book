---
title: Type pattern
sidebar:
  order: 157
  label: 6.5.2 Type pattern
---

**Context**: The type pattern tests whether an expression is of a specified type and, if so, assigns it to a new variable.

```csharp
object obj = "Hello";
if (obj is string s)
{
    Console.WriteLine(s.Length);
}
```

## With `when` clause

```csharp
object obj = 42;
if (obj is int i && i > 10)
{
    Console.WriteLine("Large integer");
}
// Or using when in switch
string result = obj switch
{
    int x when x > 0 => "Positive int",
    int x => "Non-positive int",
    null => "Null",
    _ => "Other"
};
```

## Real-world usage example

**Handling different JSON token types**: When parsing JSON with `System.Text.Json`, you can use type pattern to handle `JsonValueKind.Number`, `JsonValueKind.String`, etc.

**Example**: [`JsonDocument`](https://docs.microsoft.com/en-us/dotnet/api/system.text.json.jsondocument) returns `JsonElement`; you can check `ValueKind` with type pattern.

## Related sections

- [6.5 Pattern matching](/en/chapter-6-advanced-type-system/6-5-pattern-matching)
- [6.5.1 Constant pattern](/en/chapter-6-advanced-type-system/6-5-1-constant-pattern)
