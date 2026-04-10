---
title: Custom attributes
sidebar:
  order: 605
  label: 13.2 Custom attributes
---

**Context**: Custom attributes allow you to add metadata to code elements (classes, methods, properties, etc.). You define an attribute by creating a class that inherits from `System.Attribute`. Attributes can be read at runtime using reflection, enabling declarative programming. They are used extensively in ASP.NET Core (e.g., `[Route]`, `[Authorize]`), serialization (`[JsonIgnore]`), and validation (`[Required]`).

## Usage Example

```csharp
using System;

[AttributeUsage(AttributeTargets.Class | AttributeTargets.Method)]
public class AuthorAttribute : Attribute
{
    public string Name { get; }
    public AuthorAttribute(string name) => Name = name;
}

[Author("John Doe")]
public class SampleClass { }

class Program
{
    static void Main()
    {
        var attr = (AuthorAttribute)Attribute.GetCustomAttribute(typeof(SampleClass), typeof(AuthorAttribute));
        Console.WriteLine(attr?.Name);
    }
}
```

## Output console

```shell
dotnet run
John Doe
```

## Important notes

- Attribute names end with "Attribute" by convention (you can omit the suffix when applying).
- `AttributeUsage` restricts where the attribute can be applied.
- Constructors define required parameters; properties define optional ones.

## Real-world usage example

**Enum display names** – Use `[Display(Name = "Some Value")]` to provide human‑readable names for enum values.  
See [.NET docs on custom attributes](https://docs.microsoft.com/en-us/dotnet/standard/attributes/writing-custom-attributes).

## Related sections

- [13.2.1 Attribute class AttributeUsage](/en/chapter-13-reflection-attributes-and-source-generators/13-2-1-attribute-class-attributeusage)
- [13.2.2 Applying attributes to targets](/en/chapter-13-reflection-attributes-and-source-generators/13-2-2-applying-attributes-to-targets)
- [13.2.3 Reading attributes with reflection](/en/chapter-13-reflection-attributes-and-source-generators/13-2-3-reading-attributes-with-reflection)
