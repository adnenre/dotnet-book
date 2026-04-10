---
title: where T  new() (parameterless constructor)
sidebar:
  order: 412
  label: 11.4.3 where T  new()
---

**Context**: The `new()` constraint requires that the generic type has a public parameterless constructor. It allows creating instances of the type inside the generic class. This constraint must be the last if combined with others.

## Usage Example

```csharp
using System;

public class Factory<T> where T : new()
{
    public T Create()
    {
        return new T(); // possible because of new()
    }
}

public class Person
{
    public string Name { get; set; }
    public Person() => Name = "Unknown";
}

public class NoDefaultCtor
{
    public NoDefaultCtor(string name) { }
}

class Program
{
    static void Main()
    {
        var personFactory = new Factory<Person>();
        Person p = personFactory.Create();
        Console.WriteLine(p.Name); // Unknown

        // This does not compile: NoDefaultCtor has no parameterless constructor
        // var errorFactory = new Factory<NoDefaultCtor>();
    }
}
```

## Output console

```shell
dotnet run
Unknown
```

## Important notes

- `new()` cannot be used with `struct` (structs always have an implicit default constructor, but the syntax is allowed).
- If multiple constraints, `new()` must be last.

## Real-world usage example

**`Activator.CreateInstance<T>()`** – Has the same parameterless constructor requirement.  
See [.NET docs on new()](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/where-generic-type-constraint#new).

## Related sections

- [11.4.2 where T : class](/en/chapter-11-generics-and-constraints/11-4-2-where-t-class-reference-type)
- [11.4.7 Multiple constraints](/en/chapter-11-generics-and-constraints/11-4-7-multiple-constraints)
