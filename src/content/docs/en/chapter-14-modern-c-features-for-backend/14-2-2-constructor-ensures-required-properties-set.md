---
title: Constructor ensures required properties set
sidebar:
  order: 705
  label: 14.2.2 Constructor ensures required properties set
---

**Context**: Constructors can set required properties. To avoid repeated required‑member checks, you can decorate a constructor with the `[SetsRequiredMembers]` attribute. This tells the compiler that the constructor initializes all required members, so callers do not need to set them again in object initializers.

## Usage Example

```csharp
using System;
using System.Diagnostics.CodeAnalysis;

public class Product
{
    public required int Id { get; init; }
    public required string Name { get; init; }

    [SetsRequiredMembers]
    public Product(int id, string name)
    {
        Id = id;
        Name = name;
    }
}

class Program
{
    static void Main()
    {
        var product = new Product(1, "Keyboard");
        Console.WriteLine($"{product.Id}: {product.Name}");
    }
}
```

## Output console

```shell
dotnet run
1: Keyboard
```

## Important notes

- Use `[SetsRequiredMembers]` only when the constructor truly sets every required member.
- Misusing this attribute can lead to runtime uninitialized members.
- The attribute is in the `System.Diagnostics.CodeAnalysis` namespace.

## Real-world usage example

**Factory methods** – A static `Create` method can use `[SetsRequiredMembers]` to encapsulate required initialization logic.  
See [.NET docs on SetsRequiredMembers](https://docs.microsoft.com/en-us/dotnet/api/system.diagnostics.codeanalysis.setsrequiredmembersattribute).

## Related sections

- [14.2.1 required keyword](/en/chapter-14-modern-csharp-features-for-backend/14-2-1-required-keyword)
- [14.2 Required members C# 11](/en/chapter-14-modern-csharp-features-for-backend/14-2-required-members-csharp-11)
