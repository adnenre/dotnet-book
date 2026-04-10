---
title: Constructeur garantissant la définition des propriétés requises
sidebar:
  order: 705
  label: 14.2.2 Constructeur garantissant la définition des propriétés requises
---

**Contexte** : Les constructeurs peuvent définir des propriétés requises. Pour éviter les vérifications répétées des membres requis, vous pouvez décorer un constructeur avec l'attribut `[SetsRequiredMembers]`. Cela indique au compilateur que le constructeur initialise tous les membres requis, de sorte que les appelants n'ont pas besoin de les définir à nouveau dans les initialiseurs d'objets.

## Exemple d'utilisation

```csharp
using System;
using System.Diagnostics.CodeAnalysis;

public class Produit
{
    public required int Id { get; init; }
    public required string Nom { get; init; }

    [SetsRequiredMembers]
    public Produit(int id, string nom)
    {
        Id = id;
        Nom = nom;
    }
}

class Program
{
    static void Main()
    {
        var produit = new Produit(1, "Clavier");
        Console.WriteLine($"{produit.Id}: {produit.Nom}");
    }
}
```

## Sortie console

```shell
dotnet run
1: Clavier
```

## Remarques importantes

- Utilisez `[SetsRequiredMembers]` uniquement lorsque le constructeur définit véritablement tous les membres requis.
- Une mauvaise utilisation de cet attribut peut entraîner des membres non initialisés à l'exécution.
- L'attribut se trouve dans l'espace de noms `System.Diagnostics.CodeAnalysis`.

## Exemple d'utilisation dans le monde réel

**Méthodes de fabrique** – Une méthode statique `Create` peut utiliser `[SetsRequiredMembers]` pour encapsuler la logique d'initialisation requise.  
Voir [documentation .NET sur SetsRequiredMembers](https://docs.microsoft.com/fr-fr/dotnet/api/system.diagnostics.codeanalysis.setsrequiredmembersattribute).

## Sections connexes

- [14.2.1 Mot‑clé required](/fr/chapter-14-modern-csharp-features-for-backend/14-2-1-required-keyword)
- [14.2 Membres requis C# 11](/fr/chapter-14-modern-csharp-features-for-backend/14-2-required-members-csharp-11)
