---
title: var pattern
sidebar:
  order: 161
  label: 6.5.6 var pattern
---

**Context**: The `var` pattern matches any expression and assigns it to a new variable. It is useful in switch expressions to capture the input.

```csharp
object obj = "test";
if (obj is var x)
{
    Console.WriteLine(x.GetType()); // always matches
}
```

## In switch expressions

```csharp
string result = obj switch
{
    int i => $"int: {i}",
    string s => $"string: {s}",
    var other => $"unknown: {other.GetType()}"
};
```

## Real-world usage example

**Logging the original value**: In a switch expression, use `var` as the default case to capture the unmatched value for logging.

**Example**: In a [logging middleware](https://docs.microsoft.com/en-us/aspnet/core/fundamentals/middleware/write), you can log the actual value that didn't match any pattern.

## Related sections

- [6.5 Pattern matching](/en/chapter-6-advanced-type-system/6-5-pattern-matching)
- [6.5.2 Type pattern](/en/chapter-6-advanced-type-system/6-5-2-type-pattern)
