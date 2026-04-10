---
title: Invoking methods dynamically
sidebar:
  order: 604
  label: 13.1.4 Invoking methods dynamically
---

**Context**: Using `MethodInfo.Invoke`, you can call a method on an object (or static method) at runtime, even if the method name is determined dynamically. This is useful for scripting, plugins, or when the method signature is not known at compile time. Performance is slower than direct calls, but acceptable for many scenarios.

## Usage Example

```csharp
using System;
using System.Reflection;

public class MathService
{
    public int Multiply(int x, int y) => x * y;
}

class Program
{
    static void Main()
    {
        Type t = typeof(MathService);
        object instance = Activator.CreateInstance(t);
        MethodInfo method = t.GetMethod("Multiply");
        object result = method.Invoke(instance, new object[] { 5, 6 });
        Console.WriteLine($"Result: {result}");
    }
}
```

## Output console

```shell
dotnet run
Result: 30
```

## Important notes

- For static methods, pass `null` as the instance.
- Parameters are passed as an array of objects.
- Exceptions thrown by the invoked method are wrapped in `TargetInvocationException`.

## Real-world usage example

**Command line parser** – Dynamically invoke a method on a controller based on the command name.  
See [.NET docs on MethodInfo.Invoke](https://docs.microsoft.com/en-us/dotnet/api/system.reflection.methodbase.invoke).

## Related sections

- [13.1.3 MemberInfo MethodInfo PropertyInfo](/en/chapter-13-reflection-attributes-and-source-generators/13-1-3-memberinfo-methodinfo-propertyinfo)
- [13.2.3 Reading attributes with reflection](/en/chapter-13-reflection-attributes-and-source-generators/13-2-3-reading-attributes-with-reflection)
