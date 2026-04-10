---
title: init only setters
sidebar:
  order: 700
  label: 14.1 init only setters
---

**Context**: Init‑only setters (introduced in C# 9) allow properties to be set during object initialization but become immutable afterwards. Unlike read‑only properties (which can only be set in the constructor), init accessors can be used in object initializers, making them ideal for building immutable data transfer objects (DTOs) without writing verbose constructors.

## Usage Example

```csharp
using System;

public class Person
{
    public string Name { get; init; }
    public int Age { get; init; }
}

class Program
{
    static void Main()
    {
        var person = new Person { Name = "Alice", Age = 30 };
        Console.WriteLine($"{person.Name}, {person.Age}");

        // person.Name = "Bob"; // Compilation error: init-only property cannot be modified
    }
}
```

## Output console

```shell
dotnet run
Alice, 30
```

## Important notes

- Init‑only setters can be called only during object initialization or in the constructor.
- They enable true immutability for objects created with object initializers.
- Combine with `required` (C# 11) to enforce setting certain properties.

## Real-world usage example

**API response DTOs** – Use init‑only properties to return immutable data from Web API controllers, ensuring responses are not modified after creation.  
See [.NET docs on init only setters](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/init).

## Related sections

- [14.1.1 Immutable objects after construction](/en/chapter-14-modern-csharp-features-for-backend/14-1-1-immutable-objects-after-construction)
- [14.1.2 Object initialiser with init](/en/chapter-14-modern-csharp-features-for-backend/14-1-2-object-initialiser-with-init)
- [14.2 Required members C# 11](/en/chapter-14-modern-csharp-features-for-backend/14-2-required-members-csharp-11)
