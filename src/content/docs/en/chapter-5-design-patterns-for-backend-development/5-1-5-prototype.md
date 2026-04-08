---
title: Prototype
sidebar:
  order: 110
  label: 5.1.5 Prototype
---

**Context**: Specify the kinds of objects to create using a prototypical instance, and create new objects by copying this prototype.

```csharp
public abstract class Prototype
{
    public abstract Prototype Clone();
}

public class ConcretePrototype : Prototype
{
    public int Data { get; set; }
    public override Prototype Clone() => (ConcretePrototype)MemberwiseClone();
}

// Usage
var original = new ConcretePrototype { Data = 42 };
var clone = (ConcretePrototype)original.Clone();
Console.WriteLine(clone.Data); // 42
```

## Real-world usage example

**Copying complex documents**: A document editor clones a template document (headers, footers, styles) and then modifies the copy for a new client.

**Example**: In .NET, the [`ICloneable`](https://docs.microsoft.com/en-us/dotnet/api/system.icloneable) interface (though not recommended) is a prototype pattern. More practically, [`MemberwiseClone`](https://docs.microsoft.com/en-us/dotnet/api/system.object.memberwiseclone) is used for shallow copying. In game engines, prefabs are prototypes.

## Related sections

- [5.1 Creational patterns](/en/chapter-5-design-patterns-for-backend-development/5-1-creational-patterns)
- [5.2 Structural patterns](/en/chapter-5-design-patterns-for-backend-development/5-2-structural-patterns)
