---
title: Streaming vs buffering operators
sidebar:
  order: 189
  label: 8.2.3 Streaming vs buffering operators
---

**Context**: Streaming operators yield results one by one as they iterate over the source. Buffering operators consume the entire source before producing any result.

## Streaming operators

`Where`, `Select`, `Take`, `Skip`, `SelectMany` (they process elements on‑the‑fly).

```csharp
var streaming = numbers.Where(n => n > 2); // yields one by one
```

## Buffering operators

`OrderBy`, `GroupBy`, `Distinct`, `Reverse` (need all data to work).

```csharp
var buffered = numbers.OrderBy(n => n); // reads all numbers first
```

## Real-world usage example

**Large data sets**: Use streaming operators to avoid loading everything into memory. Avoid `OrderBy` on huge collections unless necessary.

**Example**: In [System.Reactive (Rx.NET)](https://github.com/dotnet/reactive), streaming operators are used for infinite sequences.

## Related sections

- [8.2 Deferred vs immediate execution](/en/chapter-8-linq-language-integrated-query/8-2-deferred-vs-immediate-execution)
- [8.4 Common operators](/en/chapter-8-linq-language-integrated-query/8-4-common-operators)
