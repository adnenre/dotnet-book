---
title: where T  struct (value type)
sidebar:
  order: 410
  label: 11.4.1 where T  struct
---

**Context**: The constraint `where T : struct` requires the type parameter to be a non-nullable value type (`int`, `double`, `bool`, `DateTime`, `enum`, etc.). It excludes reference types (classes, interfaces, delegates). This constraint allows safe usage of value types.

## Usage Example

```csharp
using System;

public class NumericCalculator<T> where T : struct
{
    public T Zero => default(T); // default(T) = 0 for int, false for bool, etc.

    public T Add(T a, T b)
    {
        // For simplicity, use dynamic conversion (not ideal, but demonstration)
        dynamic da = a;
        dynamic db = b;
        return da + db;
    }
}

class Program
{
    static void Main()
    {
        var calcInt = new NumericCalculator<int>();
        Console.WriteLine(calcInt.Add(5, 3)); // 8

        var calcDouble = new NumericCalculator<double>();
        Console.WriteLine(calcDouble.Add(2.5, 1.2)); // 3.7

        // This does not compile: string is a reference type
        // var calcString = new NumericCalculator<string>();
    }
}
```

## Output console

```shell
dotnet run
8
3.7
```

## Important notes

- `struct` implies `System.ValueType`.
- Nullable value types (`int?`) are not allowed (because `Nullable<T>` is a struct but with special constraint).
- Useful for mathematical types or low-level buffers.

## Real-world usage example

**`System.Nullable<T>`** – `where T : struct` guarantees that `T` is a value type.  
See [.NET docs on struct constraint](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/where-generic-type-constraint#struct).

## Related sections

- [11.4 Constraints](/en/chapter-11-generics-and-constraints/11-4-constraints)
- [11.4.2 where T : class](/en/chapter-11-generics-and-constraints/11-4-2-where-t-class-reference-type)
