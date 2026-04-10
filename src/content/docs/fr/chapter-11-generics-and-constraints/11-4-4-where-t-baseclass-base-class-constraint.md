---
title: where T  BaseClass (contrainte de classe de base)
sidebar:
  order: 413
  label: 11.4.4 where T  BaseClass
---

**Contexte** : La contrainte `where T : BaseClass` exige que le paramètre de type hérite de la classe de base spécifiée (ou soit cette classe elle‑même). Cela permet d'utiliser les membres de la classe de base sur les instances de `T`.

## Exemple d'utilisation

```csharp
using System;

public abstract class Forme
{
    public abstract double Aire();
}

public class Cercle : Forme
{
    public double Rayon { get; set; }
    public override double Aire() => Math.PI * Rayon * Rayon;
}

public class Carre : Forme
{
    public double Cote { get; set; }
    public override double Aire() => Cote * Cote;
}

public class CalculateurAire<T> where T : Forme
{
    public double CalculerAire(T forme)
    {
        return forme.Aire(); // possible car T hérite de Forme
    }
}

class Program
{
    static void Main()
    {
        var calc = new CalculateurAire<Cercle>();
        double aire = calc.CalculerAire(new Cercle { Rayon = 5 });
        Console.WriteLine($"Aire du cercle : {aire:F2}");

        var calcCarre = new CalculateurAire<Carre>();
        Console.WriteLine(calcCarre.CalculerAire(new Carre { Cote = 4 }));
    }
}
```

## Sortie console

```shell
dotnet run
Aire du cercle : 78.54
16
```

## Remarques importantes

- Un seul type de classe de base est autorisé (pas d'héritage multiple).
- La contrainte de classe de base peut être une classe abstraite.

## Exemple d'utilisation dans le monde réel

**`Comparer<T>`** – Nécessite que `T` implémente `IComparable<T>` (ce qui est une interface, mais le principe est similaire).  
Voir [documentation .NET sur les contraintes de classe de base](https://docs.microsoft.com/fr-fr/dotnet/csharp/language-reference/keywords/where-generic-type-constraint#base-class-constraint).

## Sections connexes

- [11.4 Contraintes](/fr/chapter-11-generics-and-constraints/11-4-constraints)
- [11.4.5 where T : IMyInterface](/fr/chapter-11-generics-and-constraints/11-4-5-where-t-imyinterface-interface-constraint)
