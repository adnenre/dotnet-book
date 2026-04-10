---
title: Types record (accentuation)
sidebar:
  order: 706
  label: 14.3 Types record
---

**Contexte** : Les enregistrements (records) (C# 9) sont des types référence qui fournissent par défaut l'égalité basée sur les valeurs et l'immutabilité. Ils sont idéaux pour les types centrés sur les données où vous souhaitez que l'égalité soit basée sur le contenu, pas sur les références. Les enregistrements peuvent être positionnels (avec un constructeur principal) ou nominaux (avec des propriétés init). Ils supportent également les expressions `with` pour une mutation non destructive.

## Exemple d'utilisation

```csharp
using System;

public record Personne(string Nom, int Age);

public record Produit
{
    public int Id { get; init; }
    public string Nom { get; init; }
}

class Program
{
    static void Main()
    {
        var personne1 = new Personne("Alice", 30);
        var personne2 = new Personne("Alice", 30);
        Console.WriteLine(personne1 == personne2); // True (égalité de valeur)

        var produit = new Produit { Id = 1, Nom = "Ordinateur" };
        var modifie = produit with { Nom = "Ordinateur gamer" };
        Console.WriteLine($"{modifie.Nom}");
    }
}
```

## Sortie console

```shell
dotnet run
True
Ordinateur gamer
```

## Remarques importantes

- Les enregistrements implémentent automatiquement `IEquatable<T>` et surchargent `Equals`, `GetHashCode` et `ToString`.
- Les enregistrements positionnels créent un constructeur principal et des propriétés `init`.
- Utilisez `with` pour créer une copie avec des propriétés modifiées.

## Exemple d'utilisation dans le monde réel

**Event sourcing** – Stockez des événements immuables (ex. `UtilisateurCree`, `CommandeExpediee`) qui peuvent être comparés par valeur.  
Voir [documentation .NET sur les records](https://docs.microsoft.com/fr-fr/dotnet/csharp/language-reference/builtin-types/record).

## Sections connexes

- [14.1 Setters init uniquement](/fr/chapter-14-modern-csharp-features-for-backend/14-1-init-only-setters)
- [14.2 Membres requis C# 11](/fr/chapter-14-modern-csharp-features-for-backend/14-2-required-members-csharp-11)
