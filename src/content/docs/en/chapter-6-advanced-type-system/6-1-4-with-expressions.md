---
title: with expressions
sidebar:
  order: 138
  label: 6.1.4 with expressions
---

**Context**: `with` expressions create a new record instance by copying an existing one and modifying specified properties. This enables non‑destructive mutation.

```csharp
public record Person(string FirstName, string LastName, int Age);

var original = new Person("Alice", "Smith", 30);
var updated = original with { Age = 31 };
Console.WriteLine(original); // Person { FirstName = Alice, LastName = Smith, Age = 30 }
Console.WriteLine(updated);  // Person { FirstName = Alice, LastName = Smith, Age = 31 }
```

## With nested records

```csharp
public record Address(string City, string Street);
public record Person(string Name, Address Address);

var p1 = new Person("John", new Address("Paris", "Rue A"));
var p2 = p1 with { Address = p1.Address with { Street = "Rue B" } };
```

## Real-world usage example

**Configuration objects**: When you have an immutable configuration record, you can create a modified version for a specific environment using `with`.

**Example**: In [ASP.NET Core Options pattern](https://docs.microsoft.com/en-us/aspnet/core/fundamentals/configuration/options), you could use records and `with` to derive test configurations.

## Related sections

- [6.1 Records](/en/chapter-6-advanced-type-system/6-1-records)
- [6.1.3 Positional records](/en/chapter-6-advanced-type-system/6-1-3-positional-records)
