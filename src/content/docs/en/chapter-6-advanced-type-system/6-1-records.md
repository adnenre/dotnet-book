---
title: Records
sidebar:
  order: 134
  label: 6.1 Records
---

**Context**: Records are reference types (C# 9+) that provide value‑based equality and immutability by default. They are ideal for data‑centric types.

Records are similar to classes but with built‑in behavior for equality, hashing, and `ToString()`. They support non‑destructive mutation via `with` expressions.

```csharp
public record Person(string FirstName, string LastName);
var p1 = new Person("Alice", "Smith");
var p2 = new Person("Alice", "Smith");
Console.WriteLine(p1 == p2); // True (value equality)
```

## Real-world usage example

**Data transfer objects (DTOs)**: Records are perfect for DTOs in APIs because they are immutable and provide value equality. When receiving JSON data, you can deserialize into a record and safely pass it around.

**Example**: In ASP.NET Core, you can use records as action method parameters. The [`JsonSerializer`](https://docs.microsoft.com/en-us/dotnet/api/system.text.json.jsonserializer) works seamlessly with records.

## Related sections

- [6.1.1 record class](/en/chapter-6-advanced-type-system/6-1-1-record-class)
- [6.1.2 record struct](/en/chapter-6-advanced-type-system/6-1-2-record-struct)
- [6.1.3 Positional records](/en/chapter-6-advanced-type-system/6-1-3-positional-records)
