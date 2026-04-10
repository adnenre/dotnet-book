---
title: Multiple constraints
sidebar:
  order: 416
  label: 11.4.7 Multiple constraints
---

**Context**: Multiple constraints can be applied to a single type parameter. The order must be: base class (or `class`/`struct`), interfaces, `new()`. Multiple constraints increase the capabilities of the generic type.

## Usage Example

```csharp
using System;
using System.Collections.Generic;

public interface IComparableWithDisplay<T> : IComparable<T>
{
    void Display();
}

public class Person : IComparableWithDisplay<Person>
{
    public string Name { get; set; }
    public int Age { get; set; }

    public int CompareTo(Person other)
    {
        return Age.CompareTo(other.Age);
    }

    public void Display() => Console.WriteLine($"{Name} ({Age} years)");
}

public class Utility<T> where T : class, IComparableWithDisplay<T>, new()
{
    public T CreateAndDisplay()
    {
        T obj = new T();
        obj.Display();
        return obj;
    }

    public T Max(T a, T b)
    {
        return a.CompareTo(b) > 0 ? a : b;
    }
}

class Program
{
    static void Main()
    {
        var util = new Utility<Person>();
        var p1 = new Person { Name = "Alice", Age = 30 };
        var p2 = new Person { Name = "Bob", Age = 25 };

        Person older = util.Max(p1, p2);
        Console.WriteLine($"Older: {older.Name}");
    }
}
```

## Output console

```shell
dotnet run
Older: Alice
```

## Important notes

- Order: base class (or `class`/`struct`) first, then interfaces, then `new()`.
- You cannot combine `class` and `struct`.
- Constraints increase readability but also rigidity.

## Real-world usage example

**`Dictionary<TKey, TValue>`** – `TKey` must implement `IEquatable<TKey>` or `object.Equals` (implicit constraint).  
See [.NET docs on multiple constraints](https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/generics/constraints-on-type-parameters#multiple-constraints).

## Related sections

- [11.4 Constraints](/en/chapter-11-generics-and-constraints/11-4-constraints)
- [11.5 Project: Generic Repository Simulator](/en/chapter-11-generics-and-constraints/11-5-project-generic-repository-simulator)
