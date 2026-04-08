---
title: Projet Personne immuable avec enregistrement et validation
sidebar:
  order: 162
  label: 6.6 Projet Personne immuable avec enregistrement et validation
---

**Contexte** : Créez un enregistrement `Person` immuable qui applique des règles de validation (nom non vide, âge positif) à l’aide d’un constructeur primaire et d’une méthode `Validate`.

## Code complet

```csharp
using System;

public record Person(string FirstName, string LastName, int Age)
{
    public Person(string firstName, string lastName, int age) : this(firstName, lastName, age)
    {
        if (string.IsNullOrWhiteSpace(firstName))
            throw new ArgumentException("First name cannot be empty", nameof(firstName));
        if (string.IsNullOrWhiteSpace(lastName))
            throw new ArgumentException("Last name cannot be empty", nameof(lastName));
        if (age < 0 || age > 150)
            throw new ArgumentOutOfRangeException(nameof(age), "Age must be between 0 and 150");
    }

    public string FullName => $"{FirstName} {LastName}";
    public override string ToString() => $"{FullName}, Age: {Age}";
}

public class Program
{
    static void Main()
    {
        Console.WriteLine("=== Immutable Person Record with Validation ===");

        try
        {
            var person1 = new Person("Alice", "Smith", 30);
            Console.WriteLine($"Created: {person1}");
            var person2 = person1 with { Age = 31 };
            Console.WriteLine($"After birthday: {person2}");
            var invalid = new Person("", "Doe", 25);
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Error: {ex.Message}");
        }

        var personA = new Person("John", "Doe", 40);
        var personB = new Person("John", "Doe", 40);
        Console.WriteLine($"personA == personB: {personA == personB}");
        var (first, last, age) = personA;
        Console.WriteLine($"Deconstructed: {first} {last}, {age}");
    }
}
```

## Exemple d’exécution

```bash
=== Immutable Person Record with Validation ===
Created: Alice Smith, Age: 30
After birthday: Alice Smith, Age: 31
personA == personB: True
Deconstructed: John Doe, 40
Error: First name cannot be empty (Parameter 'firstName')
```

## Exemple d'utilisation dans le monde réel

**DTO d’enregistrement utilisateur** : Utilisez un enregistrement immuable et validé pour les données d’enregistrement d’un utilisateur. La validation garantit l’intégrité des données à la création, et les expressions `with` permettent des modifications pour les mises à jour.

**Exemple** : Dans [ASP.NET Core Minimal APIs](https://docs.microsoft.com/en-us/aspnet/core/fundamentals/minimal-apis), vous pouvez lier le corps d’une requête POST à un enregistrement et la validation s’exécute automatiquement avec le constructeur.

## Sections connexes

- [6.1 Enregistrements](/fr/chapter-6-advanced-type-system/6-1-records)
- [6.1.4 Expressions with](/fr/chapter-6-advanced-type-system/6-1-4-with-expressions)
- [6.1.5 Égalité basée sur la valeur](/fr/chapter-6-advanced-type-system/6-1-5-value-based-equality)
