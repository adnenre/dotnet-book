---
title: Bridge
sidebar:
  order: 116
  label: 5.2.5 Bridge
---

**Context**: Decouple an abstraction from its implementation so that the two can vary independently.

```csharp
public interface IImplementation
{
    void OperationImpl();
}

public class ConcreteImplA : IImplementation
{
    public void OperationImpl() => Console.WriteLine("Impl A");
}

public abstract class Abstraction
{
    protected IImplementation _impl;
    protected Abstraction(IImplementation impl) => _impl = impl;
    public abstract void Operation();
}

public class RefinedAbstraction : Abstraction
{
    public RefinedAbstraction(IImplementation impl) : base(impl) { }
    public override void Operation() => _impl.OperationImpl();
}
```

## Real-world usage example

**Device drivers and remote controls**: A remote control abstraction can work with different device implementations (TV, radio, projector). Adding a new remote (e.g., voice remote) doesn't affect device classes.

**Example**: In .NET, [`Stream`](https://docs.microsoft.com/en-us/dotnet/api/system.io.stream) is an abstraction; [`FileStream`](https://docs.microsoft.com/en-us/dotnet/api/system.io.filestream), [`MemoryStream`](https://docs.microsoft.com/en-us/dotnet/api/system.io.memorystream) are implementations. [`GZipStream`](https://docs.microsoft.com/en-us/dotnet/api/system.io.compression.gzipstream) is another abstraction that uses a stream implementation – bridge pattern.

## Related sections

- [5.2 Structural patterns](/en/chapter-5-design-patterns-for-backend-development/5-2-structural-patterns)
- [5.2.4 Facade](/en/chapter-5-design-patterns-for-backend-development/5-2-4-facade)
- [5.2.6 Composite](/en/chapter-5-design-patterns-for-backend-development/5-2-6-composite)
