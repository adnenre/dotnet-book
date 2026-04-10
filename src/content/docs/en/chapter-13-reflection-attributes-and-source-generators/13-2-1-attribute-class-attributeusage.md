---
title: Attribute class AttributeUsage
sidebar:
  order: 606
  label: 13.2.1 Attribute class AttributeUsage
---

**Context**: The `AttributeUsage` attribute is applied to custom attribute classes to specify where they can be used (classes, methods, properties, assemblies, etc.), whether they can be applied multiple times, and whether they are inherited by derived classes. By default, an attribute is applicable to any target and can be applied only once.

## Usage Example

```csharp
using System;

[AttributeUsage(AttributeTargets.Method | AttributeTargets.Property, AllowMultiple = true, Inherited = false)]
public class CustomAttribute : Attribute
{
    public string Data { get; }
    public CustomAttribute(string data) => Data = data;
}

class Program
{
    static void Main()
    {
        Console.WriteLine(typeof(CustomAttribute).GetCustomAttributes(typeof(AttributeUsageAttribute), false).Length > 0);
    }
}
```

## Output console

```shell
dotnet run
True
```

## Important notes

- `AttributeTargets` enum can be combined with bitwise OR (`|`).
- `AllowMultiple = true` lets you apply the same attribute several times.
- `Inherited` controls whether derived classes inherit the attribute.

## Real-world usage example

**Validation attributes** – `[Required]` uses `AllowMultiple = false`, `AttributeTargets.Field | AttributeTargets.Property`.  
See [.NET docs on AttributeUsage](https://docs.microsoft.com/en-us/dotnet/api/system.attributeusageattribute).

## Related sections

- [13.2 Custom attributes](/en/chapter-13-reflection-attributes-and-source-generators/13-2-custom-attributes)
- [13.2.2 Applying attributes to targets](/en/chapter-13-reflection-attributes-and-source-generators/13-2-2-applying-attributes-to-targets)
