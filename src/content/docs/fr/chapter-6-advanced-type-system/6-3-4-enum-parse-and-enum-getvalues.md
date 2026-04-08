---
title: Enum Parse et Enum GetValues
sidebar:
  order: 149
  label: 6.3.4 Enum Parse et Enum GetValues
---

**Contexte** : `Enum.Parse` convertit une chaîne en valeur d’énumération. `Enum.GetValues` récupère toutes les valeurs d’une énumération. `Enum.GetNames` récupère les noms.

## Parse

```csharp
string input = "Tuesday";
DaysOfWeek day = (DaysOfWeek)Enum.Parse(typeof(DaysOfWeek), input);
// Avec génériques (C# 5+)
DaysOfWeek day2 = Enum.Parse<DaysOfWeek>(input);
```

## TryParse

```csharp
if (Enum.TryParse<DaysOfWeek>("Monday", out DaysOfWeek result))
{
    Console.WriteLine(result);
}
```

## GetValues et GetNames

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

## Exemple d'utilisation dans le monde réel

**Génération d’interface utilisateur dynamique** : Utilisez `Enum.GetValues` pour remplir une liste déroulante avec les valeurs d’une énumération (ex. `OrderStatus`). Utilisez `Enum.Parse` pour convertir la sélection de l’utilisateur en énumération.

**Exemple** : Dans [Blazor](https://dotnet.microsoft.com/en-us/apps/aspnet/web-apps/blazor), vous pouvez lier `<select>` à une énumération à l’aide de ces méthodes.

## Sections connexes

- [6.3 Énumérations](/fr/chapter-6-advanced-type-system/6-3-enums)
- [6.3.1 Définition d’enum](/fr/chapter-6-advanced-type-system/6-3-1-enum-definition)
