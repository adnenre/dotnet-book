---
title: ref struct
sidebar:
  order: 143
  label: 6.2.3 ref struct
---

**Context**: `ref struct` is a stack‑only struct that cannot be allocated on the heap. It is used for high‑performance scenarios (e.g., `Span<T>`).

```csharp
public ref struct Buffer
{
    private Span<byte> _data;
    public Buffer(Span<byte> data) => _data = data;
    public void Write(byte value) => _data[0] = value;
}
```

## Restrictions

- Cannot be boxed (no `object` conversion)
- Cannot be used as a field in a class or non‑ref struct
- Cannot implement interfaces
- Cannot be used in async methods (cannot be captured by lambda/async state machine)

## Real-world usage example

**Zero‑allocation parsing**: Use `ref struct` with `Span<char>` to parse CSV or JSON without allocating strings on the heap.

**Example**: [`System.Span<T>`](https://docs.microsoft.com/en-us/dotnet/api/system.span-1) itself is a `ref struct`. Also [`Utf8JsonReader`](https://docs.microsoft.com/en-us/dotnet/api/system.text.json.utf8jsonreader) in `System.Text.Json` is a `ref struct` for high‑performance JSON parsing.

## Related sections

- [6.2 Structs](/en/chapter-6-advanced-type-system/6-2-structs)
- [6.2.2 readonly struct](/en/chapter-6-advanced-type-system/6-2-2-readonly-struct)
