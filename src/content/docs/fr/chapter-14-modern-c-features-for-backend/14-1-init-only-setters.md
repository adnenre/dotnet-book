---
title: Setters init uniquement
sidebar:
  order: 700
  label: 14.1 Setters init uniquement
---

**Contexte** : Les setters init uniquement (introduits en C# 9) permettent de définir des propriétés lors de l'initialisation de l'objet, mais elles deviennent immuables par la suite. Contrairement aux propriétés en lecture seule (qui ne peuvent être définies que dans le constructeur), les accesseurs init peuvent être utilisés dans les initialiseurs d'objets, ce qui les rend idéaux pour construire des objets de transfert de données (DTO) immuables sans écrire de constructeurs verbeux.

## Exemple d'utilisation

```csharp
using System;

public class Personne
{
    public string Nom { get; init; }
    public int Age { get; init; }
}

class Program
{
    static void Main()
    {
        var personne = new Personne { Nom = "Alice", Age = 30 };
        Console.WriteLine($"{personne.Nom}, {personne.Age}");
        // personne.Nom = "Bob"; // Erreur de compilation : propriété init uniquement
    }
}
```

## Sortie console

```shell
dotnet run
Alice, 30
```

## Remarques importantes

- Les setters init ne peuvent être appelés que lors de l'initialisation ou dans le constructeur.
- Ils permettent une véritable immutabilité pour les objets créés avec des initialiseurs d'objets.
- Combinez avec `required` (C# 11) pour forcer la définition de certaines propriétés.

## Exemple d'utilisation dans le monde réel

**DTO de réponse d'API** – Utilisez des propriétés init pour retourner des données immuables depuis les contrôleurs d'API Web, garantissant que les réponses ne sont pas modifiées après création.  
Voir [documentation .NET sur init](https://docs.microsoft.com/fr-fr/dotnet/csharp/language-reference/keywords/init).

## Sections connexes

- [14.1.1 Objets immuables après construction](/fr/chapter-14-modern-csharp-features-for-backend/14-1-1-immutable-objects-after-construction)
- [14.1.2 Initialiseur d'objet avec init](/fr/chapter-14-modern-csharp-features-for-backend/14-1-2-object-initialiser-with-init)
- [14.2 Membres requis C# 11](/fr/chapter-14-modern-csharp-features-for-backend/14-2-required-members-csharp-11)
