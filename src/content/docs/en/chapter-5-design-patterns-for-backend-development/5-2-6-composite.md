---
title: Composite
sidebar:
  order: 117
  label: 5.2.6 Composite
---

**Context**: Compose objects into tree structures to represent part‑whole hierarchies. Composite lets clients treat individual objects and compositions uniformly.

```csharp
public abstract class Component
{
    public abstract void Operation();
}

public class Leaf : Component
{
    public override void Operation() => Console.WriteLine("Leaf");
}

public class Composite : Component
{
    private List<Component> _children = new();
    public void Add(Component c) => _children.Add(c);
    public override void Operation()
    {
        foreach (var child in _children)
            child.Operation();
    }
}
```

## Real-world usage example

**File system**: Files (leaf) and directories (composite) both implement `IFileSystemNode`. Operations like `GetSize()` or `Delete()` work on both.

**Example**: In UI frameworks, [`Control`](https://docs.microsoft.com/en-us/dotnet/api/system.windows.forms.control) can be a single button or a panel containing other controls. ASP.NET Core's [`ICompositeMetadataDetailsProvider`](https://docs.microsoft.com/en-us/dotnet/api/microsoft.aspnetcore.mvc.modelbinding.metadata.icompositemetadatadetailsprovider) uses composite pattern.

## Related sections

- [5.2 Structural patterns](/en/chapter-5-design-patterns-for-backend-development/5-2-structural-patterns)
- [5.2.5 Bridge](/en/chapter-5-design-patterns-for-backend-development/5-2-5-bridge)
- [5.2.7 Flyweight](/en/chapter-5-design-patterns-for-backend-development/5-2-7-flyweight)
