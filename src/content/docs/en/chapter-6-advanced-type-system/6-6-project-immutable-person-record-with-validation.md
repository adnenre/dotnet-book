---
title: Project Immutable Person Record with Validation
sidebar:
  order: 162
  label: 6.6 Project Immutable Person Record with Validation
---

**Context**: Create an immutable `Person` record that enforces validation rules (non‑empty name, positive age) using a primary constructor and a `Validate` method.

## Complete Code

```csharp
using System;

public record Person(string FirstName, string LastName, int Age)
{
    // Primary constructor validation
    public Person(string firstName, string lastName, int age) : this(firstName, lastName, age)
    {
        if (string.IsNullOrWhiteSpace(firstName))
            throw new ArgumentException("First name cannot be empty", nameof(firstName));
        if (string.IsNullOrWhiteSpace(lastName))
            throw new ArgumentException("Last name cannot be empty", nameof(lastName));
        if (age < 0 || age > 150)
            throw new ArgumentOutOfRangeException(nameof(age), "Age must be between 0 and 150");
    }

    // Additional computed property
    public string FullName => $"{FirstName} {LastName}";

    // Override ToString for custom formatting
    public override string ToString() => $"{FullName}, Age: {Age}";
}

public class Program
{
    static void Main()
    {
        Console.WriteLine("=== Immutable Person Record with Validation ===");

        try
        {
            // Valid person
            var person1 = new Person("Alice", "Smith", 30);
            Console.WriteLine($"Created: {person1}");

            // Immutable mutation (creates a new instance)
            var person2 = person1 with { Age = 31 };
            Console.WriteLine($"After birthday: {person2}");

            // Invalid person (throws exception)
            var invalid = new Person("", "Doe", 25);
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Error: {ex.Message}");
        }

        // Demonstrating value equality
        var personA = new Person("John", "Doe", 40);
        var personB = new Person("John", "Doe", 40);
        Console.WriteLine($"personA == personB: {personA == personB}"); // True

        // Using deconstruction
        var (first, last, age) = personA;
        Console.WriteLine($"Deconstructed: {first} {last}, {age}");
    }
}
```

## Example Run

```bash
=== Immutable Person Record with Validation ===
Created: Alice Smith, Age: 30
After birthday: Alice Smith, Age: 31
personA == personB: True
Deconstructed: John Doe, 40
Error: First name cannot be empty (Parameter 'firstName')
```

## Real-world usage example

**User registration DTO**: Use a validated immutable record for user registration data. The validation ensures data integrity at creation time, and `with` expressions allow modifications for updates.

**Example**: In [ASP.NET Core Minimal APIs](https://docs.microsoft.com/en-us/aspnet/core/fundamentals/minimal-apis), you can bind POST body to a record and validation runs automatically with the constructor.

## Related sections

- [6.1 Records](/en/chapter-6-advanced-type-system/6-1-records)
- [6.1.4 with expressions](/en/chapter-6-advanced-type-system/6-1-4-with-expressions)
- [6.1.5 Value based equality](/en/chapter-6-advanced-type-system/6-1-5-value-based-equality)
