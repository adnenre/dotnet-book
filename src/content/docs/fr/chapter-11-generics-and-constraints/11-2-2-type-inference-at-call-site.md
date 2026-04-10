---
title: Inférence de type à l'appel
sidebar:
  order: 405
  label: 11.2.2 Inférence de type à l'appel
---

**Contexte** : Le compilateur C# peut déduire automatiquement les paramètres de type d'une méthode générique en fonction des arguments passés. Cela évite de spécifier explicitement les types entre chevrons, rendant le code plus propre et plus lisible.

## Exemple d'utilisation

```csharp
using System;

public class Utils
{
    public static T Max<T>(T a, T b) where T : IComparable<T>
    {
        return a.CompareTo(b) > 0 ? a : b;
    }
}

class Program
{
    static void Main()
    {
        // Inférence de type : le compilateur déduit T = int
        int maxInt = Utils.Max(5, 10);
        Console.WriteLine(maxInt);

        // Inférence : T = string
        string maxString = Utils.Max("abc", "def");
        Console.WriteLine(maxString);

        // Explicit (rarement nécessaire) :
        double maxDouble = Utils.Max<double>(1.5, 2.5);
        Console.WriteLine(maxDouble);
    }
}
```

## Sortie console

```shell
dotnet run
10
def
2.5
```

## Remarques importantes

- L'inférence fonctionne avec les arguments, pas avec les valeurs de retour.
- Si l'inférence échoue, il faut spécifier explicitement le type.
- Les méthodes avec plusieurs paramètres de type peuvent parfois ne pas inférer tous les types.

## Exemple d'utilisation dans le monde réel

**LINQ** – `var result = list.Select(x => x.ToString());` infère `T` et `TResult` automatiquement.  
Voir [documentation .NET sur l'inférence de type](https://docs.microsoft.com/fr-fr/dotnet/csharp/programming-guide/generics/generic-methods#type-inference).

## Sections connexes

- [11.2.1 T MyMethod<T>(T param)](/fr/chapter-11-generics-and-constraints/11-2-1-t-mymethod-t-param)
- [11.4 Contraintes](/fr/chapter-11-generics-and-constraints/11-4-constraints)
