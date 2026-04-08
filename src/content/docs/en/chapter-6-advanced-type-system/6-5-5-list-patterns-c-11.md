---
title: List patterns C# 11
sidebar:
  order: 160
  label: 6.5.5 List patterns C# 11
---

**Context**: List patterns (C# 11) allow matching arrays or lists against a sequence of elements.

```csharp
int[] numbers = { 1, 2, 3 };
if (numbers is [1, 2, 3])
{
    Console.WriteLine("Exact match");
}
```

## Slice pattern

Use `..` to match any number of elements.

```csharp
int[] arr = { 1, 2, 3, 4, 5 };
if (arr is [1, .., 5])
{
    Console.WriteLine("Starts with 1, ends with 5");
}
```

## Real-world usage example

**Command line argument parsing**: Match `args` array with list patterns (e.g., `["--help"]`, `["--output", .. var rest]`).

**Example**: In [System.CommandLine](https://docs.microsoft.com/en-us/dotnet/standard/commandline/), you could implement custom parsing with list patterns.

## Related sections

- [6.5 Pattern matching](/en/chapter-6-advanced-type-system/6-5-pattern-matching)
- [6.5.6 var pattern](/en/chapter-6-advanced-type-system/6-5-6-var-pattern)
