---
title: Méthodes génériques
sidebar:
  order: 403
  label: 11.2 Méthodes génériques
---

**Contexte** : Une méthode générique déclare ses propres paramètres de type, indépendamment de la classe (qui peut elle‑même être générique ou non). Cela permet de créer une méthode qui fonctionne avec n'importe quel type, avec la sécurité de type à la compilation.

## Exemple d'utilisation

```csharp
using System;

public class Utilitaire
{
    // Méthode générique
    public T Max<T>(T a, T b) where T : IComparable<T>
    {
        return a.CompareTo(b) > 0 ? a : b;
    }
}

class Program
{
    static void Main()
    {
        Utilitaire util = new Utilitaire();
        int maxInt = util.Max(5, 10);
        Console.WriteLine(maxInt);

        string maxString = util.Max("pomme", "banane");
        Console.WriteLine(maxString);
    }
}
```

## Sortie console

```shell
dotnet run
10
pomme
```

## Remarques importantes

- Le paramètre de type est déclaré après le nom de la méthode et avant la liste des paramètres.
- Les méthodes génériques peuvent être surchargées.
- Les contraintes s'appliquent aux paramètres de type de la méthode.

## Exemple d'utilisation dans le monde réel

**LINQ** – Les méthodes `Select`, `Where`, `OrderBy` sont des méthodes génériques qui travaillent avec des `IEnumerable<T>`.  
Voir [documentation .NET sur les méthodes génériques](https://docs.microsoft.com/fr-fr/dotnet/csharp/programming-guide/generics/generic-methods).

## Sections connexes

- [11.2.1 T MyMethod<T>(T param)](/fr/chapter-11-generics-and-constraints/11-2-1-t-mymethod-t-param)
- [11.2.2 Inférence de type à l'appel](/fr/chapter-11-generics-and-constraints/11-2-2-type-inference-at-call-site)
