---
title: Contraintes multiples
sidebar:
  order: 416
  label: 11.4.7 Contraintes multiples
---

**Contexte** : On peut appliquer plusieurs contraintes à un même paramètre de type. L'ordre doit respecter : classe de base (ou `class`/`struct`), interfaces, `new()`. Les contraintes multiples augmentent les capacités du type générique.

## Exemple d'utilisation

```csharp
using System;
using System.Collections.Generic;

public interface IComparableWithDisplay<T> : IComparable<T>
{
    void Display();
}

public class Personne : IComparableWithDisplay<Personne>
{
    public string Nom { get; set; }
    public int Age { get; set; }

    public int CompareTo(Personne other)
    {
        return Age.CompareTo(other.Age);
    }

    public void Display() => Console.WriteLine($"{Nom} ({Age} ans)");
}

public class Utilitaire<T> where T : class, IComparableWithDisplay<T>, new()
{
    public T CreerEtAfficher()
    {
        T obj = new T();
        obj.Display();
        return obj;
    }

    public T Max(T a, T b)
    {
        return a.CompareTo(b) > 0 ? a : b;
    }
}

class Program
{
    static void Main()
    {
        var util = new Utilitaire<Personne>();
        var p1 = new Personne { Nom = "Alice", Age = 30 };
        var p2 = new Personne { Nom = "Bob", Age = 25 };

        Personne plusAge = util.Max(p1, p2);
        Console.WriteLine($"Le plus âgé : {plusAge.Nom}");
    }
}
```

## Sortie console

```shell
dotnet run
Le plus âgé : Alice
```

## Remarques importantes

- L'ordre : classe de base (ou `class`/`struct`) en premier, puis interfaces, puis `new()`.
- On ne peut pas combiner `class` et `struct`.
- Les contraintes augmentent la lisibilité mais aussi la rigidité.

## Exemple d'utilisation dans le monde réel

**`Dictionary<TKey, TValue>`** – `TKey` doit implémenter `IEquatable<TKey>` ou `object.Equals` (contrainte implicite).  
Voir [documentation .NET sur les contraintes multiples](https://docs.microsoft.com/fr-fr/dotnet/csharp/programming-guide/generics/constraints-on-type-parameters#multiple-constraints).

## Sections connexes

- [11.4 Contraintes](/fr/chapter-11-generics-and-constraints/11-4-constraints)
- [11.5 Projet : Simulateur de Repository générique](/fr/chapter-11-generics-and-constraints/11-5-project-generic-repository-simulator)
