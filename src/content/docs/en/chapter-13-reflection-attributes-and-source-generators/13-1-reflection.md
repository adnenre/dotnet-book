---
title: Reflection
sidebar:
  order: 600
  label: 13.1 Reflection
---

**Context**: Reflection is the ability of a running program to inspect and interact with its own metadata (types, methods, properties, attributes) at runtime. It allows you to load assemblies dynamically, discover types, create instances, invoke methods, and access fields even if they are private. Reflection is powerful but comes with a performance cost and bypasses compile‑time safety.

## Usage Example

```csharp
using System;
using System.Reflection;

class Program
{
    static void Main()
    {
        Type type = typeof(string);
        Console.WriteLine($"Type name: {type.Name}");
        Console.WriteLine($"Full name: {type.FullName}");
        Console.WriteLine($"Is class: {type.IsClass}");
    }
}
```

## Output console

```shell
dotnet run
Type name: String
Full name: System.String
Is class: True
```

## Important notes

- Reflection can break encapsulation (access private members).
- It is slower than direct code (use sparingly in performance‑critical paths).
- Useful for plugins, serialization, and ORMs.

## Real-world usage example

**Dependency injection containers** – Use reflection to scan assemblies for types decorated with custom attributes and register them automatically.  
See [.NET docs on reflection](https://docs.microsoft.com/en-us/dotnet/framework/reflection-and-codedom/reflection).

## Related sections

- [13.1.1 Type class](/en/chapter-13-reflection-attributes-and-source-generators/13-1-1-type-class)
- [13.1.2 Assembly loading and scanning](/en/chapter-13-reflection-attributes-and-source-generators/13-1-2-assembly-loading-and-scanning)
- [13.1.3 MemberInfo MethodInfo PropertyInfo](/en/chapter-13-reflection-attributes-and-source-generators/13-1-3-memberinfo-methodinfo-propertyinfo)
- [13.1.4 Invoking methods dynamically](/en/chapter-13-reflection-attributes-and-source-generators/13-1-4-invoking-methods-dynamically)
