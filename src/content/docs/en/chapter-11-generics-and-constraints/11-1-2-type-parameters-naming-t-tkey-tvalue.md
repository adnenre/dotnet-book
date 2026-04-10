---
title: Type parameters naming (T, TKey, TValue)
sidebar:
  order: 402
  label: 11.1.2 Type parameters naming
---

**Context**: By convention, type parameters are named with a prefix `T` (for Type). For a single parameter, use `T`. For multiple parameters, use descriptive names like `TKey`, `TValue`, `TInput`, `TOutput`. This improves code readability.

## Usage Example

```csharp
using System;
using System.Collections.Generic;

// Convention: T for a single type
public class Transformer<T>
{
    public T Transform(T input)
    {
        return input;
    }
}

// Convention: TKey and TValue for a dictionary
public class SimpleDictionary<TKey, TValue>
{
    private Dictionary<TKey, TValue> _dictionary = new Dictionary<TKey, TValue>();

    public void Add(TKey key, TValue value)
    {
        _dictionary.Add(key, value);
    }

    public TValue Get(TKey key)
    {
        return _dictionary[key];
    }
}

class Program
{
    static void Main()
    {
        var dict = new SimpleDictionary<string, int>();
        dict.Add("age", 30);
        Console.WriteLine(dict.Get("age"));
    }
}
```

## Output console

```shell
dotnet run
30
```

## Important notes

- `T` is the most common name for a single type parameter.
- `TKey` and `TValue` are used for key-value collections.
- Avoid names like `T1`, `T2` except for trivial cases.

## Real-world usage example

**`Dictionary<TKey, TValue>`** – Uses exactly this convention. `List<T>` uses `T`.  
See [.NET docs on naming conventions](https://docs.microsoft.com/en-us/dotnet/standard/design-guidelines/names-of-type-members).

## Related sections

- [11.1.1 Syntax](/en/chapter-11-generics-and-constraints/11-1-1-syntax)
- [11.2 Generic methods](/en/chapter-11-generics-and-constraints/11-2-generic-methods)
