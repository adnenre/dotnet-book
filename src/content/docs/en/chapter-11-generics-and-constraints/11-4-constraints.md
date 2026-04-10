---
title: Constraints
sidebar:
  order: 409
  label: 11.4 Constraints
---

**Context**: Constraints restrict the types that can be used as generic type arguments. They allow accessing specific members (constructors, methods, properties) of the type parameter. The `where` clause is used to declare constraints.

## Usage Example

```csharp
using System;

// Multiple constraints illustrated in a class
public class ConstraintDemo<T> where T : class, new()
{
    public T CreateInstance()
    {
        return new T(); // new() allows using the parameterless constructor
    }
}

class Program
{
    static void Main()
    {
        var demo = new ConstraintDemo<ConstraintDemo<object>>();
        var instance = demo.CreateInstance();
        Console.WriteLine(instance != null);
    }
}
```

## Output console

```shell
dotnet run
True
```

## Important notes

- Constraints are optional but powerful.
- Constraints can be applied to the class or the method.
- Multiple constraints are separated by commas.

## Real-world usage example

**`Dictionary<TKey, TValue>`** – `TKey` cannot be `null` (implicit constraint).  
See [.NET docs on constraints](https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/generics/constraints-on-type-parameters).

## Related sections

- [11.4.1 where T : struct](/en/chapter-11-generics-and-constraints/11-4-1-where-t-struct-value-type)
- [11.4.2 where T : class](/en/chapter-11-generics-and-constraints/11-4-2-where-t-class-reference-type)
- [11.4.3 where T : new()](/en/chapter-11-generics-and-constraints/11-4-3-where-t-new-parameterless-constructor)
- [11.4.4 where T : BaseClass](/en/chapter-11-generics-and-constraints/11-4-4-where-t-baseclass-base-class-constraint)
- [11.4.5 where T : IMyInterface](/en/chapter-11-generics-and-constraints/11-4-5-where-t-imyinterface-interface-constraint)
- [11.4.6 where T : unmanaged](/en/chapter-11-generics-and-constraints/11-4-6-where-t-unmanaged-no-references)
- [11.4.7 Multiple constraints](/en/chapter-11-generics-and-constraints/11-4-7-multiple-constraints)
