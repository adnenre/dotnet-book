---
title: Immutable objects after construction
sidebar:
  order: 701
  label: 14.1.1 Immutable objects after construction
---

**Context**: Immutability means that an object’s state cannot change after it is fully constructed. With init‑only setters, you can create immutable objects using simple object initializers instead of writing constructors for every property combination. This improves code readability and prevents accidental mutations, especially in concurrent scenarios.

## Usage Example

```csharp
using System;

public class Configuration
{
    public string Endpoint { get; init; }
    public int TimeoutSeconds { get; init; }
    public bool RetryEnabled { get; init; }
}

class Program
{
    static void Main()
    {
        var config = new Configuration
        {
            Endpoint = "https://api.example.com",
            TimeoutSeconds = 30,
            RetryEnabled = true
        };
        Console.WriteLine($"{config.Endpoint}, timeout: {config.TimeoutSeconds}");
    }
}
```

## Output console

```shell
dotnet run
https://api.example.com, timeout: 30
```

## Important notes

- After the object initializer finishes, init‑only properties cannot be changed.
- For deep immutability, ensure that any referenced objects are also immutable.
- Records (C# 9) provide another powerful way to create immutable types.

## Real-world usage example

**Caching keys** – Immutable cache key objects can be safely used in concurrent dictionaries without risk of modification.  
See [.NET docs on immutability](https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/using-properties#init-only-properties).

## Related sections

- [14.1 init only setters](/en/chapter-14-modern-csharp-features-for-backend/14-1-init-only-setters)
- [14.1.2 Object initialiser with init](/en/chapter-14-modern-csharp-features-for-backend/14-1-2-object-initialiser-with-init)
