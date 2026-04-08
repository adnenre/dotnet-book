---
title: Flyweight
sidebar:
  order: 118
  label: 5.2.7 Flyweight
---

**Context**: Use sharing to support large numbers of fine‑grained objects efficiently.

```csharp
public class Flyweight
{
    private string _sharedState;
    public Flyweight(string state) => _sharedState = state;
    public void Operation(string uniqueState) => Console.WriteLine($"{_sharedState} + {uniqueState}");
}

public class FlyweightFactory
{
    private Dictionary<string, Flyweight> _flyweights = new();
    public Flyweight GetFlyweight(string key)
    {
        if (!_flyweights.ContainsKey(key))
            _flyweights[key] = new Flyweight(key);
        return _flyweights[key];
    }
}
```

## Real-world usage example

**Text rendering**: Each character in a document can share a `Character` flyweight with intrinsic state (font, size, style). The extrinsic state (position) is passed when drawing.

**Example**: In .NET, [string interning](https://docs.microsoft.com/en-us/dotnet/api/system.string.intern) is a flyweight: identical string literals share the same memory. Also, [`Int32`](https://docs.microsoft.com/en-us/dotnet/api/system.int32) caching in `-128` to `127` range.

## Related sections

- [5.2 Structural patterns](/en/chapter-5-design-patterns-for-backend-development/5-2-structural-patterns)
- [5.2.6 Composite](/en/chapter-5-design-patterns-for-backend-development/5-2-6-composite)
- [5.3 Behavioural patterns](/en/chapter-5-design-patterns-for-backend-development/5-3-behavioural-patterns)
