---
title: Membres requis (C# 11)
sidebar:
  order: 703
  label: 14.2 Membres requis C# 11
---

**Contexte** : Le mot‑clé `required` (C# 11) force l'appelant à initialiser une propriété ou un champ lors de la construction de l'objet. Le compilateur émet une erreur si un membre requis n'est pas défini. Cela est particulièrement utile avec les propriétés init, garantissant que les objets immuables sont complètement initialisés sans écrire de constructeurs.

## Exemple d'utilisation

```csharp
using System;

public class Utilisateur
{
    public required string Nom { get; init; }
    public required int Age { get; init; }
    public string? Email { get; init; } // optionnel
}

class Program
{
    static void Main()
    {
        var user = new Utilisateur { Nom = "Alice", Age = 30 }; // valide
        // var invalide = new Utilisateur { Nom = "Bob" }; // erreur compilation : Age requis
        Console.WriteLine($"{user.Nom}, {user.Age}");
    }
}
```

## Sortie console

```shell
dotnet run
Alice, 30
```

## Remarques importantes

- Les membres requis peuvent être des propriétés ou des champs.
- L'attribut `SetsRequiredMembers` peut être utilisé sur des constructeurs pour ignorer la vérification (à utiliser avec précaution).
- Les membres requis fonctionnent également avec les enregistrements positionnels.

## Exemple d'utilisation dans le monde réel

**DTO pour les requêtes API** – Garantit que les champs obligatoires (ex. `UserId`, `Timestamp`) sont toujours fournis lors de la création des objets de requête.  
Voir [documentation .NET sur required](https://docs.microsoft.com/fr-fr/dotnet/csharp/language-reference/keywords/required).

## Sections connexes

- [14.2.1 Mot‑clé required](/fr/chapter-14-modern-csharp-features-for-backend/14-2-1-required-keyword)
- [14.2.2 Constructeur garantissant la définition des propriétés requises](/fr/chapter-14-modern-csharp-features-for-backend/14-2-2-constructor-ensures-required-properties-set)
