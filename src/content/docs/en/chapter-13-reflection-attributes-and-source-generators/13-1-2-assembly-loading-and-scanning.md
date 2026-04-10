---
title: Assembly loading and scanning
sidebar:
  order: 602
  label: 13.1.2 Assembly loading and scanning
---

**Context**: Assemblies are the compiled units of .NET applications (EXEs and DLLs). Reflection allows you to load assemblies dynamically at runtime (from file path, byte array, or current domain) and scan all types contained within. This is the foundation for plugin architectures, dependency injection containers, and code analysis tools.

## Usage Example

```csharp
using System;
using System.IO;
using System.Linq;
using System.Reflection;

class Program
{
    static void Main()
    {
        // Load assembly from the current directory
        Assembly assembly = Assembly.LoadFrom("MyLibrary.dll");
        Type[] types = assembly.GetTypes();
        foreach (var type in types)
        {
            Console.WriteLine(type.FullName);
        }
    }
}
```

## Output console

```shell
dotnet run
MyLibrary.MyClass1
MyLibrary.MyClass2
```

## Important notes

- Use `Assembly.Load` for loading by strong name, `Assembly.LoadFrom` by file path.
- Scanning all types can be expensive; consider caching results.
- Be aware of loading contexts and version conflicts.

## Real-world usage example

**Plugin system** – Load all DLLs from a plugins folder, scan for types implementing `IPlugin`, and instantiate them.  
See [.NET docs on Assembly class](https://docs.microsoft.com/en-us/dotnet/api/system.reflection.assembly).

## Related sections

- [13.1.1 Type class](/en/chapter-13-reflection-attributes-and-source-generators/13-1-1-type-class)
- [13.1.3 MemberInfo MethodInfo PropertyInfo](/en/chapter-13-reflection-attributes-and-source-generators/13-1-3-memberinfo-methodinfo-propertyinfo)
