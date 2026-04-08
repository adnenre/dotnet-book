---
title: Expressions with
sidebar:
  order: 138
  label: 6.1.4 Expressions with
---

**Contexte** : Les expressions `with` créent une nouvelle instance d’enregistrement en copiant une instance existante et en modifiant certaines propriétés. Cela permet une mutation non destructive.

```csharp
public record Person(string FirstName, string LastName, int Age);

var original = new Person("Alice", "Smith", 30);
var updated = original with { Age = 31 };
Console.WriteLine(original); // Person { FirstName = Alice, LastName = Smith, Age = 30 }
Console.WriteLine(updated);  // Person { FirstName = Alice, LastName = Smith, Age = 31 }
```

## Avec enregistrements imbriqués

```csharp
public record Address(string City, string Street);
public record Person(string Name, Address Address);

var p1 = new Person("John", new Address("Paris", "Rue A"));
var p2 = p1 with { Address = p1.Address with { Street = "Rue B" } };
```

## Exemple d'utilisation dans le monde réel

**Objets de configuration** : Lorsque vous avez un enregistrement de configuration immuable, vous pouvez créer une version modifiée pour un environnement spécifique à l’aide de `with`.

**Exemple** : Dans le [pattern Options d’ASP.NET Core](https://docs.microsoft.com/en-us/aspnet/core/fundamentals/configuration/options), vous pouvez utiliser des enregistrements et `with` pour dériver des configurations de test.

## Sections connexes

- [6.1 Enregistrements](/fr/chapter-6-advanced-type-system/6-1-records)
- [6.1.3 Enregistrements positionnels](/fr/chapter-6-advanced-type-system/6-1-3-positional-records)
