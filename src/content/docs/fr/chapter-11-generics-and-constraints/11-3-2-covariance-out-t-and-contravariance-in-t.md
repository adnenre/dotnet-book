---
title: Covariance out T et contravariance in T
sidebar:
  order: 408
  label: 11.3.2 Covariance out T et contravariance in T
---

**Contexte** : La covariance (`out T`) permet d'utiliser un type plus dérivé que celui spécifié (pour les valeurs de retour). La contravariance (`in T`) permet d'utiliser un type moins dérivé (pour les paramètres d'entrée). Cela permet l'assignation polymorphique des interfaces génériques.

## Exemple d'utilisation

```csharp
using System;
using System.Collections.Generic;

// Covariance : T est en position de retour (out)
public interface IProducteur<out T>
{
    T Produire();
}

// Contravariance : T est en position d'entrée (in)
public interface IConsommateur<in T>
{
    void Consommer(T item);
}

public class Animal { }
public class Chien : Animal { }

public class ProducteurChien : IProducteur<Chien>
{
    public Chien Produire() => new Chien();
}

public class ConsommateurAnimal : IConsommateur<Animal>
{
    public void Consommer(Animal animal)
    {
        Console.WriteLine($"Consomme {animal.GetType().Name}");
    }
}

class Program
{
    static void Main()
    {
        // Covariance : IProducteur<Chien> peut être assigné à IProducteur<Animal>
        IProducteur<Animal> producteur = new ProducteurChien();
        Animal animal = producteur.Produire();
        Console.WriteLine($"Produit: {animal.GetType().Name}");

        // Contravariance : IConsommateur<Animal> peut être assigné à IConsommateur<Chien>
        IConsommateur<Chien> consommateur = new ConsommateurAnimal();
        consommateur.Consommer(new Chien());
    }
}
```

## Sortie console

```shell
dotnet run
Produit: Chien
Consomme Chien
```

## Remarques importantes

- `out T` signifie que `T` ne peut être utilisé qu'en sortie (retour de méthode, propriété get).
- `in T` signifie que `T` ne peut être utilisé qu'en entrée (paramètres de méthode, propriété set).
- Les types valeur ne supportent pas la variance.

## Exemple d'utilisation dans le monde réel

**`IEnumerable<out T>`** – Covariant, donc on peut passer `List<Chien>` à une méthode qui attend `IEnumerable<Animal>`.  
**`Action<in T>`** – Contravariant.  
Voir [documentation .NET sur la covariance/contravariance](https://docs.microsoft.com/fr-fr/dotnet/csharp/programming-guide/concepts/covariance-contravariance/).

## Sections connexes

- [11.3 Interfaces génériques](/fr/chapter-11-generics-and-constraints/11-3-generic-interfaces)
- [11.4 Contraintes](/fr/chapter-11-generics-and-constraints/11-4-constraints)
