---
title: where T  BaseClass (base class constraint)
sidebar:
  order: 413
  label: 11.4.4 where T  BaseClass
---

**Context**: The constraint `where T : BaseClass` requires the type parameter to inherit from the specified base class (or be that class itself). This allows using members of the base class on instances of `T`.

## Usage Example

```csharp
using System;

public abstract class Shape
{
    public abstract double Area();
}

public class Circle : Shape
{
    public double Radius { get; set; }
    public override double Area() => Math.PI * Radius * Radius;
}

public class Square : Shape
{
    public double Side { get; set; }
    public override double Area() => Side * Side;
}

public class AreaCalculator<T> where T : Shape
{
    public double CalculateArea(T shape)
    {
        return shape.Area(); // possible because T inherits Shape
    }
}

class Program
{
    static void Main()
    {
        var calc = new AreaCalculator<Circle>();
        double area = calc.CalculateArea(new Circle { Radius = 5 });
        Console.WriteLine($"Circle area: {area:F2}");

        var calcSquare = new AreaCalculator<Square>();
        Console.WriteLine(calcSquare.CalculateArea(new Square { Side = 4 }));
    }
}
```

## Output console

```shell
dotnet run
Circle area: 78.54
16
```

## Important notes

- Only one base class is allowed (no multiple inheritance).
- The base class constraint can be an abstract class.

## Real-world usage example

**`Comparer<T>`** – Requires that `T` implements `IComparable<T>` (which is an interface, but the principle is similar).  
See [.NET docs on base class constraint](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/where-generic-type-constraint#base-class-constraint).

## Related sections

- [11.4 Constraints](/en/chapter-11-generics-and-constraints/11-4-constraints)
- [11.4.5 where T : IMyInterface](/en/chapter-11-generics-and-constraints/11-4-5-where-t-imyinterface-interface-constraint)
