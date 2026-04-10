---
title: Initialiseur d'objet avec init
sidebar:
  order: 702
  label: 14.1.2 Initialiseur d'objet avec init
---

**Contexte** : Les initialiseurs d'objets permettent de définir des propriétés ou champs lors de la création d'un objet, sans appeler de constructeur avec les paramètres correspondants. Avec les setters init, vous pouvez utiliser des initialiseurs d'objets même pour des propriétés immuables. Cela combine la lisibilité des initialiseurs d'objets avec la sécurité de l'immutabilité.

## Exemple d'utilisation

```csharp
using System;

public class Produit
{
    public int Id { get; init; }
    public string Nom { get; init; }
    public decimal Prix { get; init; }
}

class Program
{
    static void Main()
    {
        var produit = new Produit
        {
            Id = 101,
            Nom = "Ordinateur portable",
            Prix = 999.99m
        };
        Console.WriteLine($"{produit.Id}: {produit.Nom} - {produit.Prix:C}");
    }
}
```

## Sortie console

```shell
dotnet run
101: Ordinateur portable - 999,99 €
```

## Remarques importantes

- Les initialiseurs d'objets peuvent être utilisés avec ou sans constructeurs explicites.
- Les propriétés init font des initialiseurs le principal moyen de créer des objets immuables.
- Vous pouvez également définir des propriétés init dans un constructeur.

## Exemple d'utilisation dans le monde réel

**Création de modèles Entity Framework Core** – Utilisez des propriétés init pour les objets de valeur qui ne doivent pas changer après avoir été chargés depuis la base de données.  
Voir [documentation .NET sur les initialiseurs d'objets](https://docs.microsoft.com/fr-fr/dotnet/csharp/programming-guide/classes-and-structs/object-and-collection-initializers).

## Sections connexes

- [14.1 Setters init uniquement](/fr/chapter-14-modern-csharp-features-for-backend/14-1-init-only-setters)
- [14.1.1 Objets immuables après construction](/fr/chapter-14-modern-csharp-features-for-backend/14-1-1-immutable-objects-after-construction)
