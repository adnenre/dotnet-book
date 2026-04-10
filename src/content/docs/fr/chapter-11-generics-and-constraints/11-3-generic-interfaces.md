---
title: Interfaces génériques
sidebar:
  order: 406
  label: 11.3 Interfaces génériques
---

**Contexte** : Une interface générique définit des membres dont les types dépendent d'un ou plusieurs paramètres de type. Les classes qui implémentent l'interface spécifient les types réels. Cela permet de créer des contrats flexibles et réutilisables.

## Exemple d'utilisation

```csharp
using System;

public interface IRepositoire<T>
{
    T Obtenir(int id);
    void Ajouter(T item);
}

public class RepositoireProduit : IRepositoire<Produit>
{
    public Produit Obtenir(int id)
    {
        return new Produit { Id = id, Nom = "Produit " + id };
    }

    public void Ajouter(Produit item)
    {
        Console.WriteLine($"Ajout de {item.Nom}");
    }
}

public class Produit
{
    public int Id { get; set; }
    public string Nom { get; set; }
}

class Program
{
    static void Main()
    {
        IRepositoire<Produit> repo = new RepositoireProduit();
        Produit p = repo.Obtenir(1);
        Console.WriteLine(p.Nom);
        repo.Ajouter(p);
    }
}
```

## Sortie console

```shell
dotnet run
Produit 1
Ajout de Produit 1
```

## Remarques importantes

- Une classe peut implémenter la même interface générique avec différents types.
- L'interface peut avoir plusieurs paramètres de type (ex. `IDictionary<TKey, TValue>`).

## Exemple d'utilisation dans le monde réel

**`IEnumerable<T>`** – L'interface fondamentale pour toutes les collections .NET.  
Voir [documentation .NET sur les interfaces génériques](https://docs.microsoft.com/fr-fr/dotnet/csharp/programming-guide/generics/generic-interfaces).

## Sections connexes

- [11.3.1 interface IRepository<T>](/fr/chapter-11-generics-and-constraints/11-3-1-interface-irepository-t)
- [11.3.2 Covariance out T et contravariance in T](/fr/chapter-11-generics-and-constraints/11-3-2-covariance-out-t-and-contravariance-in-t)
