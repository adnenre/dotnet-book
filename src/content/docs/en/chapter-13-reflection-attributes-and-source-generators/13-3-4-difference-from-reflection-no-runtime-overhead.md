---
title: Difference from reflection no runtime overhead
sidebar:
  order: 613
  label: 13.3.4 Difference from reflection no runtime overhead
---

**Context**: Unlike reflection, which inspects metadata at runtime and is often slow, source generators produce code at compile time. The generated code is ordinary C# that executes with no reflection overhead. This is critical for high‑performance scenarios, ahead‑of‑time (AOT) compilation, and platforms where reflection is restricted (e.g., iOS, WebAssembly).

## Usage Example (comparison)

```csharp
// Reflection approach (runtime overhead)
var props = typeof(Person).GetProperties();
foreach (var p in props) Console.WriteLine(p.GetValue(person));

// Source generator approach (compile time) – generator produces a strongly‑typed method
person.PrintProperties(); // No reflection inside
```

## Output console

```shell
// Both produce same output, but generator is much faster.
```

## Important notes

- Source generators add build time but remove runtime costs.
- They are compatible with Native AOT (reflection may not be).
- They can access compiler internals not available at runtime.

## Real-world usage example

**System.Text.Json source generator** – Generates `JsonSerializerContext` with serialization code, eliminating `JsonSerializerOptions` reflection.  
See [.NET docs on JSON source generation](https://docs.microsoft.com/en-us/dotnet/standard/serialization/system-text-json/source-generation).

## Related sections

- [13.3.3 Use cases compile time code performance](/en/chapter-13-reflection-attributes-and-source-generators/13-3-3-use-cases-compile-time-code-performance)
- [13.1 Reflection](/en/chapter-13-reflection-attributes-and-source-generators/13-1-reflection)
