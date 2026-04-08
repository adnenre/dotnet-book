---
title: Constant pattern
sidebar:
  order: 156
  label: 6.5.1 Constant pattern
---

**Context**: The constant pattern tests whether an expression equals a constant value (literal, `null`, or `const`).

```csharp
int value = 5;
if (value is 5)
{
    Console.WriteLine("It's five");
}

// In switch expression
string result = value switch
{
    1 => "One",
    2 => "Two",
    _ => "Other"
};
```

## Real-world usage example

**Command handling**: Use constant pattern to match specific command types in a switch expression (e.g., `case "CREATE": ...`).

**Example**: In a [TCP server](https://docs.microsoft.com/en-us/dotnet/api/system.net.sockets.tcplistener), you might parse string commands and use constant pattern.

## Related sections

- [6.5 Pattern matching](/en/chapter-6-advanced-type-system/6-5-pattern-matching)
- [6.5.2 Type pattern](/en/chapter-6-advanced-type-system/6-5-2-type-pattern)
