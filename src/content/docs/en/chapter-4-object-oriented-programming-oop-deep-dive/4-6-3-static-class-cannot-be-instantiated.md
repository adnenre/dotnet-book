---
title: Static class cannot be instantiated
sidebar:
  order: 103
  label: 4.6.3 Static class cannot be instantiated
---

**Context**: A `static` class can only contain static members and cannot be instantiated or inherited.

## Declaration

```csharp
public static class Utility
{
    public static int Add(int a, int b) => a + b;
    public static double Pi = 3.14159;
}
```

## Usage

```csharp
int sum = Utility.Add(5, 3);
Console.WriteLine(Utility.Pi);
```

## Rules

- No instance constructors.
- Cannot use `new` to create objects.
- Cannot be used as a base class.
- All members must be static.

## Common Examples

- `Math` (Sin, Cos, Sqrt)
- `Console` (WriteLine, ReadLine)
- `Convert` (ToInt32, ToDouble)

## Static vs Non‑Static Class

| Feature          | Static Class | Non‑Static Class  |
| ---------------- | ------------ | ----------------- |
| Instantiation    | No           | Yes               |
| Instance members | No           | Yes               |
| Inheritance      | No           | Yes               |
| Constructor      | Static only  | Instance + static |
