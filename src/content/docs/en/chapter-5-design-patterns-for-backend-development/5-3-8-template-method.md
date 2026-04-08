---
title: Template Method
sidebar:
  order: 127
  label: 5.3.8 Template Method
---

**Context**: Define the skeleton of an algorithm in an operation, deferring some steps to subclasses. Template Method lets subclasses redefine certain steps without changing the algorithm's structure.

```csharp
public abstract class AbstractClass
{
    public void TemplateMethod()
    {
        Step1();
        Step2();
    }
    protected abstract void Step1();
    protected virtual void Step2() => Console.WriteLine("Default step2");
}

public class ConcreteClass : AbstractClass
{
    protected override void Step1() => Console.WriteLine("Step1 implemented");
}
```

## Real-world usage example

**Data importers**: A base `DataImporter` defines steps: `OpenSource()`, `ParseData()`, `ValidateData()`, `SaveToDatabase()`. Subclasses override only needed steps (CSV importer, XML importer, JSON importer).

**Example**: In .NET, [`Stream.Read`](https://docs.microsoft.com/en-us/dotnet/api/system.io.stream.read) is abstract; concrete streams override it. [`IDisposable` pattern](https://docs.microsoft.com/en-us/dotnet/standard/garbage-collection/implementing-dispose) with `Dispose(bool)` is a template method. Also, [`System.Web.UI.Page` life cycle](<https://docs.microsoft.com/en-us/previous-versions/aspnet/ms178472(v=vs.100)>) methods.

## Related sections

- [5.3 Behavioural patterns](/en/chapter-5-design-patterns-for-backend-development/5-3-behavioural-patterns)
- [5.3.7 State](/en/chapter-5-design-patterns-for-backend-development/5-3-7-state)
- [5.3.9 Visitor](/en/chapter-5-design-patterns-for-backend-development/5-3-9-visitor)
