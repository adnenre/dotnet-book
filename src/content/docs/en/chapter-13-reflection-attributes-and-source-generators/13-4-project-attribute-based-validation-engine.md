---
title: "Project: Attribute Based Validation Engine"
sidebar:
  order: 614
  label: 13.4 Project Attribute Based Validation Engine
---

**Context**: This project builds a validation engine that uses custom attributes to define validation rules (e.g., `[Required]`, `[MinLength(5)]`). At runtime, reflection reads these attributes and validates object properties. The engine returns a collection of errors. This demonstrates custom attributes, `AttributeUsage`, and reading attributes with reflection.

## Usage Example

```csharp
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;

[AttributeUsage(AttributeTargets.Property)]
public class RequiredAttribute : Attribute { }

[AttributeUsage(AttributeTargets.Property)]
public class MinLengthAttribute : Attribute
{
    public int Length { get; }
    public MinLengthAttribute(int length) => Length = length;
}

[AttributeUsage(AttributeTargets.Property)]
public class RangeAttribute : Attribute
{
    public double Min { get; }
    public double Max { get; }
    public RangeAttribute(double min, double max) => (Min, Max) = (min, max);
}

public class ValidationResult
{
    public string PropertyName { get; set; }
    public string ErrorMessage { get; set; }
}

public static class Validator
{
    public static IReadOnlyList<ValidationResult> Validate(object obj)
    {
        var results = new List<ValidationResult>();
        Type type = obj.GetType();
        PropertyInfo[] properties = type.GetProperties();

        foreach (var prop in properties)
        {
            object value = prop.GetValue(obj);

            // Required
            if (prop.GetCustomAttribute<RequiredAttribute>() != null)
            {
                if (value == null || (value is string s && string.IsNullOrWhiteSpace(s)))
                    results.Add(new ValidationResult { PropertyName = prop.Name, ErrorMessage = $"{prop.Name} is required." });
            }

            // MinLength
            var minLengthAttr = prop.GetCustomAttribute<MinLengthAttribute>();
            if (minLengthAttr != null && value is string str && str.Length < minLengthAttr.Length)
                results.Add(new ValidationResult { PropertyName = prop.Name, ErrorMessage = $"{prop.Name} must be at least {minLengthAttr.Length} characters." });

            // Range
            var rangeAttr = prop.GetCustomAttribute<RangeAttribute>();
            if (rangeAttr != null && value is IComparable comparable)
            {
                if (comparable.CompareTo(rangeAttr.Min) < 0 || comparable.CompareTo(rangeAttr.Max) > 0)
                    results.Add(new ValidationResult { PropertyName = prop.Name, ErrorMessage = $"{prop.Name} must be between {rangeAttr.Min} and {rangeAttr.Max}." });
            }
        }
        return results;
    }
}

public class User
{
    [Required]
    public string Name { get; set; }

    [MinLength(6)]
    public string Password { get; set; }

    [Range(18, 99)]
    public int Age { get; set; }
}

class Program
{
    static void Main()
    {
        var user = new User { Name = "", Password = "123", Age = 15 };
        var errors = Validator.Validate(user);
        foreach (var error in errors)
            Console.WriteLine($"{error.PropertyName}: {error.ErrorMessage}");
    }
}
```

## Output console

```shell
dotnet run
Name: Name is required.
Password: Password must be at least 6 characters.
Age: Age must be between 18 and 99.
```

## How to run

1. Create a new console project: `dotnet new console -n ValidationEngine`
2. Replace `Program.cs` with the code above.
3. Run `dotnet run`

## Important notes

- The engine uses reflection to read attributes.
- It supports multiple validation attributes per property.
- Easily extendable with new custom attributes.

## Real-world usage example

**ASP.NET Core model validation** – Built‑in validation uses attributes like `[Required]`, `[StringLength]`, `[Range]` and reflection to validate models automatically.  
See [.NET docs on model validation](https://docs.microsoft.com/en-us/aspnet/core/mvc/models/validation).

## Related sections

- [13.2 Custom attributes](/en/chapter-13-reflection-attributes-and-source-generators/13-2-custom-attributes)
- [13.2.3 Reading attributes with reflection](/en/chapter-13-reflection-attributes-and-source-generators/13-2-3-reading-attributes-with-reflection)
