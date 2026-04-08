---
title: Positional records
sidebar:
  order: 137
  label: 6.1.3 Positional records
---

**Context**: Positional records use a concise syntax with constructor parameters. The compiler generates `init` properties and a deconstructor.

```csharp
public record Product(string Name, decimal Price, int Stock);
```

## Generated Members

- Properties: `public string Name { get; init; }`, etc.
- Constructor: `Product(string Name, decimal Price, int Stock)`
- Deconstructor: `public void Deconstruct(out string Name, out decimal Price, out int Stock)`

## Usage

```csharp
var product = new Product("Laptop", 999.99m, 10);
var (name, price, stock) = product; // deconstruction
Console.WriteLine(name); // Laptop
```

## Real-world usage example

**API response contracts**: Define a positional record for a REST API response (e.g., `public record ApiResponse<T>(bool Success, T Data, string ErrorMessage)`). Deconstruction makes it easy to extract values.

**Example**: In [Minimal APIs](https://docs.microsoft.com/en-us/aspnet/core/fundamentals/minimal-apis) with .NET 6+, you can return records directly.

## Related sections

- [6.1 Records](/en/chapter-6-advanced-type-system/6-1-records)
- [6.1.4 with expressions](/en/chapter-6-advanced-type-system/6-1-4-with-expressions)
