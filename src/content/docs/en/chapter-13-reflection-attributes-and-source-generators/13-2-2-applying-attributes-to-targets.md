---
title: Applying attributes to targets
sidebar:
  order: 607
  label: 13.2.2 Applying attributes to targets
---

**Context**: Attributes can be applied to various code targets: assemblies, modules, classes, interfaces, structs, enums, methods, constructors, fields, properties, parameters, return values, and generic parameters. The syntax uses square brackets `[...]` placed above the target element. For assemblies and modules, the attribute appears in the global scope.

## Usage Example

```csharp
using System;

[assembly: AssemblyTitle("MyApp")] // Assembly-level attribute

[Serializable] // Class-level attribute
public class Person
{
    [Obsolete("Use NewMethod instead")] // Method-level attribute
    public void OldMethod() { }

    [JsonProperty("name")] // Property-level attribute
    public string Name { get; set; }

    public void Process([Required] string input) { } // Parameter-level attribute
}
```

## Output console

```shell
// Compiles successfully; no runtime output.
```

## Important notes

- Some attributes are recognized by the compiler (`[Obsolete]`, `[Serializable]`).
- You can apply multiple attributes to the same target, separated by commas or multiple brackets.
- Assembly‑level attributes are placed in `AssemblyInfo.cs` or directly in `Program.cs`.

## Real-world usage example

**ASP.NET Core routing** – `[Route("api/[controller]")]` on a controller class, `[HttpGet("{id}")]` on a method.  
See [.NET docs on applying attributes](https://docs.microsoft.com/en-us/dotnet/standard/attributes/applying-attributes).

## Related sections

- [13.2.1 Attribute class AttributeUsage](/en/chapter-13-reflection-attributes-and-source-generators/13-2-1-attribute-class-attributeusage)
- [13.2.3 Reading attributes with reflection](/en/chapter-13-reflection-attributes-and-source-generators/13-2-3-reading-attributes-with-reflection)
