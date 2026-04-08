---
title: Visitor
sidebar:
  order: 128
  label: 5.3.9 Visitor
---

**Context**: Represent an operation to be performed on the elements of an object structure. Visitor lets you define a new operation without changing the classes of the elements.

```csharp
public interface IElement
{
    void Accept(IVisitor visitor);
}

public class ConcreteElementA : IElement
{
    public void Accept(IVisitor visitor) => visitor.VisitConcreteElementA(this);
}

public interface IVisitor
{
    void VisitConcreteElementA(ConcreteElementA element);
}

public class ConcreteVisitor : IVisitor
{
    public void VisitConcreteElementA(ConcreteElementA element) => Console.WriteLine("Visited A");
}
```

## Real-world usage example

**Abstract syntax tree (AST) processing**: A compiler defines different visitors (type checker, code generator, optimizer) that traverse the AST without modifying node classes.

**Example**: In .NET, [`System.Linq.Expressions.ExpressionVisitor`](https://docs.microsoft.com/en-us/dotnet/api/system.linq.expressions.expressionvisitor) allows visiting expression trees. [Roslyn](https://github.com/dotnet/roslyn) uses visitors extensively for syntax tree analysis and transformation.

## Related sections

- [5.3 Behavioural patterns](/en/chapter-5-design-patterns-for-backend-development/5-3-behavioural-patterns)
- [5.3.8 Template Method](/en/chapter-5-design-patterns-for-backend-development/5-3-8-template-method)
- [5.4 Architectural patterns for backend](/en/chapter-5-design-patterns-for-backend-development/5-4-architectural-patterns-for-backend)
