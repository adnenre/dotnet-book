---
title: When to use struct vs class
sidebar:
  order: 144
  label: 6.2.4 When to use struct vs class
---

**Context**: Choosing between struct and class depends on the intended use, size, and behavior requirements.

## Use a `struct` when:

- The instance is small (≤ 16 bytes typically)
- The type is immutable (or should have value semantics)
- You need value equality (copies are independent)
- Performance requires stack allocation (e.g., many short‑lived instances)
- The type is used in performance‑critical paths

## Use a `class` when:

- The type is large (> 16 bytes)
- You need reference semantics (sharing, identity)
- Inheritance is required
- You need to use the type with `null` checks (reference types)
- The object will be stored in collections frequently (boxing overhead for structs)

## Guidelines

| Feature          | Struct                 | Class           |
| ---------------- | ---------------------- | --------------- |
| Type             | Value type             | Reference type  |
| Allocation       | Stack / inline         | Heap            |
| Inheritance      | No (except interfaces) | Yes             |
| Default equality | Value‑based            | Reference‑based |
| Nullable         | `Nullable<T>` or `T?`  | Directly `null` |

```csharp
// Good struct candidate: small, immutable, value semantics
public readonly struct Point(int X, int Y);

// Good class candidate: large, mutable, needs identity
public class Customer
{
    public int Id { get; set; }
    public string Name { get; set; }
    // ...
}
```

## Real-world usage example

**Database entities**: Use classes because they have identity (database primary key) and are often large. **Value objects** (like `Money`, `Address`) are better as structs or records.

**Example**: In [Entity Framework Core](https://docs.microsoft.com/en-us/ef/core/), entities are classes. Value objects can be implemented as `struct` or `record struct`.

## Related sections

- [6.2 Structs](/en/chapter-6-advanced-type-system/6-2-structs)
- [6.1 Records](/en/chapter-6-advanced-type-system/6-1-records)
