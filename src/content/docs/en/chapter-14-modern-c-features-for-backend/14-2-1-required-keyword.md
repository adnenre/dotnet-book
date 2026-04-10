---
title: required keyword
sidebar:
  order: 704
  label: 14.2.1 required keyword
---

**Context**: The `required` modifier indicates that a property or field must be initialized when the containing object is created. The compiler enforces this at the call site. It can be combined with `init` or `set` accessors. This feature eliminates the need to write many constructors just to ensure mandatory properties are set.

## Usage Example

```csharp
using System;

public class OrderItem
{
    public required string ProductId { get; init; }
    public required int Quantity { get; init; }
    public decimal UnitPrice { get; init; }
}

class Program
{
    static void Main()
    {
        var item = new OrderItem { ProductId = "P100", Quantity = 2, UnitPrice = 10.0m };
        Console.WriteLine($"{item.ProductId} x{item.Quantity} = {item.Quantity * item.UnitPrice:C}");
    }
}
```

## Output console

```shell
dotnet run
P100 x2 = $20.00
```

## Important notes

- Required members cannot be uninitialized after construction.
- The compiler checks object initializers and constructors.
- Use the `[SetsRequiredMembers]` attribute to mark constructors that set all required members.

## Real-world usage example

**Command objects in MediatR** – Use `required` to ensure all command parameters are provided, reducing validation code.  
See [.NET docs on required keyword](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/required).

## Related sections

- [14.2 Required members C# 11](/en/chapter-14-modern-csharp-features-for-backend/14-2-required-members-csharp-11)
- [14.2.2 Constructor ensures required properties set](/en/chapter-14-modern-csharp-features-for-backend/14-2-2-constructor-ensures-required-properties-set)
