---
title: where T  IMyInterface (contrainte d'interface)
sidebar:
  order: 414
  label: 11.4.5 where T  IMyInterface
---

**Contexte** : La contrainte `where T : IMyInterface` exige que le paramètre de type implémente l'interface spécifiée. Cela permet d'appeler les membres de l'interface sur les instances de `T`. Plusieurs interfaces peuvent être combinées.

## Exemple d'utilisation

```csharp
using System;
using System.Collections.Generic;

public interface IIdentifiable
{
    int Id { get; }
    string Nom { get; }
}

public class Produit : IIdentifiable
{
    public int Id { get; set; }
    public string Nom { get; set; }
}

public class Client : IIdentifiable
{
    public int Id { get; set; }
    public string Nom { get; set; }
}

public class Afficheur<T> where T : IIdentifiable
{
    public void AfficherIdentite(T item)
    {
        Console.WriteLine($"ID: {item.Id}, Nom: {item.Nom}");
    }
}

class Program
{
    static void Main()
    {
        var produit = new Produit { Id = 1, Nom = "Laptop" };
        var client = new Client { Id = 100, Nom = "Alice" };

        var afficheur = new Afficheur<IIdentifiable>();
        afficheur.AfficherIdentite(produit);
        afficheur.AfficherIdentite(client);
    }
}
```

## Sortie console

```shell
dotnet run
ID: 1, Nom: Laptop
ID: 100, Nom: Alice
```

## Remarques importantes

- On peut imposer plusieurs interfaces : `where T : IInterface1, IInterface2`.
- L'interface peut être générique elle‑même.

## Exemple d'utilisation dans le monde réel

**`List<T>`** – N'impose pas d'interface, mais `Dictionary<TKey, TValue>` utilise `IEquatable<TKey>` indirectement.  
Voir [documentation .NET sur les contraintes d'interface](https://docs.microsoft.com/fr-fr/dotnet/csharp/language-reference/keywords/where-generic-type-constraint#interface-constraint).

## Sections connexes

- [11.4.4 where T : BaseClass](/fr/chapter-11-generics-and-constraints/11-4-4-where-t-baseclass-base-class-constraint)
- [11.4.7 Contraintes multiples](/fr/chapter-11-generics-and-constraints/11-4-7-multiple-constraints)
