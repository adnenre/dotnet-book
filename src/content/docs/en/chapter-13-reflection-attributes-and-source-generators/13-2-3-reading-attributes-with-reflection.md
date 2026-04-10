---
title: Reading attributes with reflection
sidebar:
  order: 608
  label: 13.2.3 Reading attributes with reflection
---

**Context**: Attributes are metadata; to access them at runtime, you use reflection. The `GetCustomAttributes` method (or `GetCustomAttribute`) retrieves attributes applied to a type, method, property, etc. This allows you to implement behaviors based on declarative metadata (e.g., validation, serialization, dependency injection).

## Usage Example

```csharp
using System;
using System.Linq;
using System.Reflection;

[AttributeUsage(AttributeTargets.Property)]
public class RequiredAttribute : Attribute { }

public class User
{
    [Required]
    public string Name { get; set; }
    public int Age { get; set; }
}

class Program
{
    static void Main()
    {
        PropertyInfo[] props = typeof(User).GetProperties();
        foreach (var prop in props)
        {
            bool hasRequired = prop.GetCustomAttribute<RequiredAttribute>() != null;
            Console.WriteLine($"{prop.Name}: Required = {hasRequired}");
        }
    }
}
```

## Output console

```shell
dotnet run
Name: Required = True
Age: Required = False
```

## Important notes

- Use `GetCustomAttribute<T>()` for a single attribute, `GetCustomAttributes<T>()` for multiple.
- Specify `inherit: true` to include inherited attributes.
- Reflection is needed because attributes are not directly accessible at runtime.

## Real-world usage example

**Validation engine** – Read `[Required]`, `[StringLength]`, `[Range]` attributes on a model's properties and validate values.  
See [.NET docs on retrieving attributes](https://docs.microsoft.com/en-us/dotnet/standard/attributes/retrieving-attributes-stored-in-the-custom-attribute-store).

## Related sections

- [13.2.1 Attribute class AttributeUsage](/en/chapter-13-reflection-attributes-and-source-generators/13-2-1-attribute-class-attributeusage)
- [13.4 Project: Attribute Based Validation Engine](/en/chapter-13-reflection-attributes-and-source-generators/13-4-project-attribute-based-validation-engine)
