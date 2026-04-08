---
title: Enum Parse and Enum GetValues
sidebar:
  order: 149
  label: 6.3.4 Enum Parse and Enum GetValues
---

**Context**: `Enum.Parse` converts a string to an enum value. `Enum.GetValues` retrieves all values of an enum. `Enum.GetNames` retrieves the names.

## Parse

```csharp
string input = "Tuesday";
DaysOfWeek day = (DaysOfWeek)Enum.Parse(typeof(DaysOfWeek), input);
// With generics (C# 5+)
DaysOfWeek day2 = Enum.Parse<DaysOfWeek>(input);
```

## TryParse

```csharp
if (Enum.TryParse<DaysOfWeek>("Monday", out DaysOfWeek result))
{
    Console.WriteLine(result);
}
```

## GetValues and GetNames

```csharp
foreach (DaysOfWeek d in Enum.GetValues(typeof(DaysOfWeek)))
{
    Console.WriteLine($"{d} = {(int)d}");
}

foreach (string name in Enum.GetNames(typeof(DaysOfWeek)))
{
    Console.WriteLine(name);
}
```

## Real-world usage example

**Dynamic UI generation**: Use `Enum.GetValues` to populate a dropdown list with enum values (e.g., `OrderStatus`). Use `Enum.Parse` to convert user selection back to enum.

**Example**: In [Blazor](https://dotnet.microsoft.com/en-us/apps/aspnet/web-apps/blazor), you can bind `<select>` to an enum using these methods.

## Related sections

- [6.3 Enums](/en/chapter-6-advanced-type-system/6-3-enums)
- [6.3.1 enum definition](/en/chapter-6-advanced-type-system/6-3-1-enum-definition)
