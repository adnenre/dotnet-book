---
title: Enregistrements positionnels
sidebar:
  order: 137
  label: 6.1.3 Enregistrements positionnels
---

**Contexte** : Les enregistrements positionnels utilisent une syntaxe concise avec des paramètres de constructeur. Le compilateur génère les propriétés `init` et un déconstructeur.

```csharp
public record Product(string Name, decimal Price, int Stock);
```

## Membres générés

- Propriétés : `public string Name { get; init; }`, etc.
- Constructeur : `Product(string Name, decimal Price, int Stock)`
- Déconstructeur : `public void Deconstruct(out string Name, out decimal Price, out int Stock)`

## Utilisation

```csharp
var product = new Product("Laptop", 999.99m, 10);
var (name, price, stock) = product; // déconstruction
Console.WriteLine(name); // Laptop
```

## Exemple d'utilisation dans le monde réel

**Contrats de réponse API** : Définissez un enregistrement positionnel pour une réponse d’API REST (ex. `public record ApiResponse<T>(bool Success, T Data, string ErrorMessage)`). La déconstruction facilite l’extraction des valeurs.

**Exemple** : Dans [Minimal APIs](https://docs.microsoft.com/en-us/aspnet/core/fundamentals/minimal-apis) avec .NET 6+, vous pouvez retourner directement des enregistrements.

## Sections connexes

- [6.1 Enregistrements](/fr/chapter-6-advanced-type-system/6-1-records)
- [6.1.4 Expressions with](/fr/chapter-6-advanced-type-system/6-1-4-with-expressions)
