---
title: record class
sidebar:
  order: 135
  label: 6.1.1 record class
---

**Context**: `record class` (or simply `record`) is a reference type that behaves like a class but with value semantics for equality.

```csharp
// Standard record class syntax
public record class Person
{
    public string FirstName { get; init; }
    public string LastName { get; init; }
}

// Positional syntax (compiler generates init properties and deconstructor)
public record class Employee(string Name, int Id);
```

## Characteristics

- Reference type (allocated on heap)
- Immutable by default (`init` accessors)
- `IEquatable<T>` implementation automatically provided
- Overrides `Equals`, `GetHashCode`, and `ToString`

## Real-world usage example

**Domain entities in event sourcing**: Records are used to represent events (e.g., `UserCreated`, `OrderShipped`) because they are immutable and equality is based on content, not identity.

**Example**: In C#, [`System.Environment`](https://docs.microsoft.com/en-us/dotnet/api/system.environment) is not a record, but records are heavily used in functional programming libraries like [LanguageExt](https://github.com/louthy/language-ext).

## Related sections

- [6.1 Records](/en/chapter-6-advanced-type-system/6-1-records)
- [6.1.2 record struct](/en/chapter-6-advanced-type-system/6-1-2-record-struct)
