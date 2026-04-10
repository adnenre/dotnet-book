---
title: MemberInfo MethodInfo PropertyInfo
sidebar:
  order: 603
  label: 13.1.3 MemberInfo MethodInfo PropertyInfo
---

**Context**: `MemberInfo` is the abstract base class for reflection objects representing members of a type (methods, properties, fields, events, constructors). `MethodInfo` represents a method, `PropertyInfo` a property, `FieldInfo` a field. These objects provide access to metadata and allow dynamic invocation.

## Usage Example

```csharp
using System;
using System.Reflection;

public class Calculator
{
    public int Add(int a, int b) => a + b;
    public string Name { get; set; }
}

class Program
{
    static void Main()
    {
        Type t = typeof(Calculator);
        MethodInfo[] methods = t.GetMethods();
        PropertyInfo[] properties = t.GetProperties();

        foreach (var m in methods)
            Console.WriteLine($"Method: {m.Name}");
        foreach (var p in properties)
            Console.WriteLine($"Property: {p.Name}");
    }
}
```

## Output console

```shell
dotnet run
Method: Add
Method: GetType
Method: ToString
Method: Equals
Method: GetHashCode
Property: Name
```

## Important notes

- Use `GetMethod`, `GetProperty`, `GetField` to get specific members.
- `BindingFlags` filters members (static, instance, public, non‑public).
- `MethodInfo.Invoke` calls the method dynamically.

## Real-world usage example

**Unit testing frameworks** – Use `MethodInfo` to discover test methods (decorated with `[Test]`) and invoke them via reflection.  
See [.NET docs on MethodInfo](https://docs.microsoft.com/en-us/dotnet/api/system.reflection.methodinfo).

## Related sections

- [13.1.4 Invoking methods dynamically](/en/chapter-13-reflection-attributes-and-source-generators/13-1-4-invoking-methods-dynamically)
- [13.2 Custom attributes](/en/chapter-13-reflection-attributes-and-source-generators/13-2-custom-attributes)
