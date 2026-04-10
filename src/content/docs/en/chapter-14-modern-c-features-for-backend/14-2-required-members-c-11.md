---
title: Required members (C# 11)
sidebar:
  order: 703
  label: 14.2 Required members C# 11
---

**Context**: The `required` keyword (C# 11) forces the caller to initialize a property or field during object construction. The compiler emits an error if a required member is not set. This is especially useful with init‑only properties, ensuring that immutable objects are fully initialized without writing constructors.

## Usage Example

```csharp
using System;

public class User
{
    public required string Name { get; init; }
    public required int Age { get; init; }
    public string? Email { get; init; } // optional
}

class Program
{
    static void Main()
    {
        var user = new User { Name = "Alice", Age = 30 }; // valid
        // var invalid = new User { Name = "Bob" }; // compilation error: Age required
        Console.WriteLine($"{user.Name}, {user.Age}");
    }
}
```

## Output console

```shell
dotnet run
Alice, 30
```

## Important notes

- Required members can be properties or fields.
- The `SetsRequiredMembers` attribute can be used on constructors to bypass required checks (use with care).
- Required members work with positional records as well.

## Real-world usage example

**DTOs for API requests** – Ensure that mandatory fields (e.g., `UserId`, `Timestamp`) are always provided when creating request objects.  
See [.NET docs on required members](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/required).

## Related sections

- [14.2.1 required keyword](/en/chapter-14-modern-csharp-features-for-backend/14-2-1-required-keyword)
- [14.2.2 Constructor ensures required properties set](/en/chapter-14-modern-csharp-features-for-backend/14-2-2-constructor-ensures-required-properties-set)
