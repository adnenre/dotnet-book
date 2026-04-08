---
title: Compile time overloading
sidebar:
  order: 92
  label: 4.4.1 Compile time overloading
---

**Context**: Method overloading defines multiple methods with the same name but different parameters. The compiler chooses the correct one at compile time.

## Example

```csharp
public class Calculator
{
    public int Add(int a, int b) => a + b;
    public double Add(double a, double b) => a + b;
    public int Add(int a, int b, int c) => a + b + c;
}
```

## Overloading Criteria

Different by:

- Number of parameters
- Type of parameters
- Order of parameters (if types differ)

```csharp
void Process(int x) { }
void Process(string s) { }
void Process(int x, double y) { }
void Process(double x, int y) { } // different order
```

## Not Allowed

- Only different return type.
- Only different parameter name.
- Only different ref/out (same underlying type).

```csharp
// void M(int x) { } and int M(int x) { } // error
```
