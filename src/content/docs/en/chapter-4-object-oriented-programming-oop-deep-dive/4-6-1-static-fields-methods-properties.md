---
title: Static fields methods properties
sidebar:
  order: 101
  label: 4.6.1 Static fields methods properties
---

**Context**: Static members are shared across all instances of a class. They are accessed using the class name, not an instance.

## Static Field

```csharp
public class Counter
{
    public static int Count = 0;
    public Counter() => Count++;
}
Counter c1 = new Counter();
Counter c2 = new Counter();
Console.WriteLine(Counter.Count); // 2
```

## Static Method

```csharp
public class MathHelper
{
    public static int Square(int x) => x * x;
}
int result = MathHelper.Square(5);
```

## Static Property

```csharp
public class AppConfig
{
    public static string Environment { get; set; } = "Development";
}
```

## Static Constructor

Called once before any static member is accessed.

```csharp
public class Database
{
    static Database() => Console.WriteLine("Initialized");
}
```
