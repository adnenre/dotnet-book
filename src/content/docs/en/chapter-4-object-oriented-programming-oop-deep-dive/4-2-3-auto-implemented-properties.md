---
title: Auto implemented properties
sidebar:
  order: 83
  label: 4.2.3 Auto implemented properties
---

**Context**: Auto‑implemented properties simplify syntax by letting the compiler generate a hidden backing field.

## Syntax

```csharp
public string Name { get; set; }
public int Age { get; set; } = 18;  // with default
```

## Read‑Only Auto Property

```csharp
public string Id { get; }  // can be set only in constructor
```

## Init‑Only Auto Property

```csharp
public DateTime CreatedAt { get; init; }
```

## Example

```csharp
public class Product
{
    public int Id { get; set; }
    public string Name { get; set; }
    public decimal Price { get; set; }
}

// Usage
var product = new Product { Id = 1, Name = "Laptop", Price = 999.99M };
```

The compiler generates a private field like `_<PropertyName>k__BackingField`.
