---
title: Generic Methods
sidebar:
  order: 403
  label: 11.2 Generic Methods
---

**Context**: A generic method declares its own type parameters, independent of the class (which may also be generic or not). This allows you to create a method that works with any type, with compile-time type safety.

## Usage Example

```csharp
using System;

public class Utility
{
    // Generic method
    public T Max<T>(T a, T b) where T : IComparable<T>
    {
        return a.CompareTo(b) > 0 ? a : b;
    }
}

class Program
{
    static void Main()
    {
        Utility util = new Utility();
        int maxInt = util.Max(5, 10);
        Console.WriteLine(maxInt);

        string maxString = util.Max("apple", "banana");
        Console.WriteLine(maxString);
    }
}
```

## Output console

```shell
dotnet run
10
apple
```

## Important notes

- The type parameter is declared after the method name and before the parameter list.
- Generic methods can be overloaded.
- Constraints apply to the method's type parameters.

## Real-world usage example

**LINQ** – Methods like `Select`, `Where`, `OrderBy` are generic methods that work with `IEnumerable<T>`.  
See [.NET docs on generic methods](https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/generics/generic-methods).

## Related sections

- [11.2.1 T MyMethod<T>(T param)](/en/chapter-11-generics-and-constraints/11-2-1-t-mymethod-t-param)
- [11.2.2 Type inference at call site](/en/chapter-11-generics-and-constraints/11-2-2-type-inference-at-call-site)
