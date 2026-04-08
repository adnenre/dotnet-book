---
title: Enregistrements (records)
sidebar:
  order: 134
  label: 6.1 Enregistrements (records)
---

**Contexte** : Les enregistrements sont des types référence (C# 9+) qui fournissent par défaut l’égalité basée sur la valeur et l’immuabilité. Ils sont idéaux pour les types centrés sur les données.

```csharp
public record Person(string FirstName, string LastName);
var p1 = new Person("Alice", "Smith");
var p2 = new Person("Alice", "Smith");
Console.WriteLine(p1 == p2); // True (égalité de valeur)
```

## Exemple d'utilisation dans le monde réel

**Objets de transfert de données (DTO)** : Les enregistrements sont parfaits pour les DTO dans les API car ils sont immuables et offrent l’égalité de valeur.

**Exemple** : Dans ASP.NET Core, [`JsonSerializer`](https://docs.microsoft.com/en-us/dotnet/api/system.text.json.jsonserializer) fonctionne parfaitement avec les enregistrements.

## Sections connexes

- [6.1.1 record class](/fr/chapter-6-advanced-type-system/6-1-1-record-class)
- [6.1.2 record struct](/fr/chapter-6-advanced-type-system/6-1-2-record-struct)
- [6.1.3 Enregistrements positionnels](/fr/chapter-6-advanced-type-system/6-1-3-positional-records)
