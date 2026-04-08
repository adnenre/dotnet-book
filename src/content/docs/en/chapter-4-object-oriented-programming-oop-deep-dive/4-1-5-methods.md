---
title: Methods
sidebar:
  order: 79
  label: 4.1.5 Methods
---

**Context**: Methods define the behavior of a class. They can have parameters and return a value (or `void`).

## Syntax

```csharp
[access modifier] returnType MethodName(parameters)
{
    // body
}
```

## Example

```csharp
public class Calculator
{
    public int Add(int a, int b) => a + b;
    public void PrintSum(int a, int b)
    {
        Console.WriteLine($"{a} + {b} = {Add(a, b)}");
    }
}
```

## Parameters

- **Value parameters** (default) – copy passed.
- **Reference parameters** (`ref`) – modify original.
- **Output parameters** (`out`) – return multiple values.
- **Parameter arrays** (`params`) – variable number of arguments.

```csharp
public void Modify(ref int x) => x *= 2;
public bool TryParse(string input, out int result) => int.TryParse(input, out result);
public int Sum(params int[] numbers) => numbers.Sum();
```

## Method Overloading

Same name, different parameters.

```csharp
public int Multiply(int a, int b) => a * b;
public double Multiply(double a, double b) => a * b;
```
