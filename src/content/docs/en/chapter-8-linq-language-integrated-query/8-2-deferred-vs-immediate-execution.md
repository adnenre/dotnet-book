---
title: Deferred vs immediate execution
sidebar:
  order: 186
  label: 8.2 Deferred vs immediate execution
---

**Context**: LINQ queries are not executed when defined, but when iterated (deferred). Some operators force immediate execution.

```csharp
int[] numbers = { 1, 2, 3 };
var query = numbers.Where(n => n > 1); // not executed yet
numbers[0] = 10; // change source
foreach (var n in query) // executed now, uses updated data
{
    Console.WriteLine(n); // 10,2,3
}
```

## Real-world usage example

**Live data views**: Deferred execution allows you to define a query that always reflects the latest data (e.g., filtering a live collection).

**Example**: In [Blazor](https://docs.microsoft.com/en-us/aspnet/core/blazor/), you can bind a UI list to a deferred query that updates when the source changes.

## Related sections

- [8.2.1 Deferred operators](/en/chapter-8-linq-language-integrated-query/8-2-1-deferred-operators)
- [8.2.2 Immediate operators](/en/chapter-8-linq-language-integrated-query/8-2-2-immediate-operators)
- [8.2.3 Streaming vs buffering operators](/en/chapter-8-linq-language-integrated-query/8-2-3-streaming-vs-buffering-operators)
