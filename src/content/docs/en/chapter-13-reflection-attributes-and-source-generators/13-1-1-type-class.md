---
title: Type class
sidebar:
  order: 601
  label: 13.1.1 Type class
---

**Context**: The `Type` class (in `System`) is the central entry point for reflection. It represents a type declaration (class, struct, interface, enum, etc.). You can obtain a `Type` object using `typeof(MyClass)`, `myObject.GetType()`, or `Type.GetType("MyNamespace.MyClass")`. From there you can inspect members, attributes, base types, implemented interfaces, and more.

## Usage Example

```csharp
using System;
using System.Reflection;

public class Sample { public int Value { get; set; } }

class Program
{
    static void Main()
    {
        Type t = typeof(Sample);
        Console.WriteLine($"Name: {t.Name}");
        Console.WriteLine($"Namespace: {t.Namespace}");
        Console.WriteLine($"Is public: {t.IsPublic}");

        PropertyInfo[] props = t.GetProperties();
        foreach (var prop in props)
            Console.WriteLine($"Property: {prop.Name}");
    }
}
```

## Output console

```shell
dotnet run
Name: Sample
Namespace:
Is public: True
Property: Value
```

## Important notes

- `GetType()` works on instances, `typeof()` on type names at compile time.
- Use `Type.GetType(string)` for dynamic type loading from assembly‑qualified names.
- `Type` includes methods like `GetMethods()`, `GetFields()`, `GetConstructors()`.

## Real-world usage example

**Serialization libraries** – Use `Type` to discover all public properties of an object and serialize them to JSON/XML.  
See [.NET docs on Type class](https://docs.microsoft.com/en-us/dotnet/api/system.type).

## Related sections

- [13.1 Reflection](/en/chapter-13-reflection-attributes-and-source-generators/13-1-reflection)
- [13.1.2 Assembly loading and scanning](/en/chapter-13-reflection-attributes-and-source-generators/13-1-2-assembly-loading-and-scanning)
