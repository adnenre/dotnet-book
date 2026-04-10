---
title: Record types (emphasis)
sidebar:
  order: 706
  label: 14.3 Record types
---

**Context**: Records (C# 9) are reference types that provide value‑based equality and immutability by default. They are ideal for data‑centric types where you want equality to be based on contents, not references. Records can be positional (with a primary constructor) or nominal (with init‑only properties). They also support `with` expressions for non‑destructive mutation.

## Usage Example

```csharp
using System;

public record Person(string Name, int Age);

public record Product
{
    public int Id { get; init; }
    public string Name { get; init; }
}

class Program
{
    static void Main()
    {
        var person1 = new Person("Alice", 30);
        var person2 = new Person("Alice", 30);
        Console.WriteLine(person1 == person2); // True (value-based equality)

        var product = new Product { Id = 1, Name = "Laptop" };
        var updated = product with { Name = "Gaming Laptop" };
        Console.WriteLine($"{updated.Name}");
    }
}
```

## Output console

```shell
dotnet run
True
Gaming Laptop
```

## Important notes

- Records automatically implement `IEquatable<T>` and override `Equals`, `GetHashCode`, and `ToString`.
- Positional records create a primary constructor and `init` properties.
- Use `with` to create a copy with modified properties.

## Real-world usage example

**Event sourcing** – Store immutable event records (e.g., `UserCreated`, `OrderShipped`) that can be compared by value.  
See [.NET docs on records](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/record).

## Related sections

- [14.1 init only setters](/en/chapter-14-modern-csharp-features-for-backend/14-1-init-only-setters)
- [14.2 Required members C# 11](/en/chapter-14-modern-csharp-features-for-backend/14-2-required-members-csharp-11)
