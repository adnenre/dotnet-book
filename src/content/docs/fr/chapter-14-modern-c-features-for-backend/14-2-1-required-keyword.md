---
title: Mot‑clé required
sidebar:
  order: 704
  label: 14.2.1 Mot‑clé required
---

**Contexte** : Le modificateur `required` indique qu'une propriété ou un champ doit être initialisé lors de la création de l'objet contenant. Le compilateur l'impose au point d'appel. Il peut être combiné avec les accesseurs `init` ou `set`. Cette fonctionnalité élimine le besoin d'écrire de nombreux constructeurs juste pour garantir que les propriétés obligatoires sont définies.

## Exemple d'utilisation

```csharp
using System;

public class LigneCommande
{
    public required string ProduitId { get; init; }
    public required int Quantite { get; init; }
    public decimal PrixUnitaire { get; init; }
}

class Program
{
    static void Main()
    {
        var item = new LigneCommande { ProduitId = "P100", Quantite = 2, PrixUnitaire = 10.0m };
        Console.WriteLine($"{item.ProduitId} x{item.Quantite} = {item.Quantite * item.PrixUnitaire:C}");
    }
}
```

## Sortie console

```shell
dotnet run
P100 x2 = 20,00 €
```

## Remarques importantes

- Les membres requis ne peuvent pas être laissés non initialisés après la construction.
- Le compilateur vérifie les initialiseurs d'objets et les constructeurs.
- Utilisez l'attribut `[SetsRequiredMembers]` pour marquer les constructeurs qui définissent tous les membres requis.

## Exemple d'utilisation dans le monde réel

**Objets de commande dans MediatR** – Utilisez `required` pour garantir que tous les paramètres de commande sont fournis, réduisant ainsi le code de validation.  
Voir [documentation .NET sur required](https://docs.microsoft.com/fr-fr/dotnet/csharp/language-reference/keywords/required).

## Sections connexes

- [14.2 Membres requis C# 11](/fr/chapter-14-modern-csharp-features-for-backend/14-2-required-members-csharp-11)
- [14.2.2 Constructeur garantissant la définition des propriétés requises](/fr/chapter-14-modern-csharp-features-for-backend/14-2-2-constructor-ensures-required-properties-set)
