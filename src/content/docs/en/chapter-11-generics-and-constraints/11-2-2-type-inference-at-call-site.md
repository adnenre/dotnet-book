---
title: Type inference at call site
sidebar:
  order: 405
  label: 11.2.2 Type inference at call site
---

**Context**: The C# compiler can automatically infer type parameters of a generic method based on the arguments passed. This avoids explicitly specifying types between angle brackets, making code cleaner and more readable.

## Usage Example

```csharp
using System;

public class Utils
{
    public static T Max<T>(T a, T b) where T : IComparable<T>
    {
        return a.CompareTo(b) > 0 ? a : b;
    }
}

class Program
{
    static void Main()
    {
        // Type inference: compiler deduces T = int
        int maxInt = Utils.Max(5, 10);
        Console.WriteLine(maxInt);

        // Inference: T = string
        string maxString = Utils.Max("abc", "def");
        Console.WriteLine(maxString);

        // Explicit (rarely needed):
        double maxDouble = Utils.Max<double>(1.5, 2.5);
        Console.WriteLine(maxDouble);
    }
}
```

## Output console

```shell
dotnet run
10
def
2.5
```

## Important notes

- Inference works based on arguments, not return values.
- If inference fails, you must specify the type explicitly.
- Methods with multiple type parameters may not infer all types.

## Real-world usage example

**LINQ** – `var result = list.Select(x => x.ToString());` infers `T` and `TResult` automatically.  
See [.NET docs on type inference](https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/generics/generic-methods#type-inference).

## Related sections

- [11.2.1 T MyMethod<T>(T param)](/en/chapter-11-generics-and-constraints/11-2-1-t-mymethod-t-param)
- [11.4 Constraints](/en/chapter-11-generics-and-constraints/11-4-constraints)
