---
title: Syntaxe des classes génériques
sidebar:
  order: 401
  label: 11.1.1 Syntaxe
---

**Contexte** : La syntaxe des classes génériques utilise un ou plusieurs paramètres de type entre chevrons `<>` après le nom de la classe. Les paramètres de type sont des espaces réservés pour des types réels fournis lors de l'instanciation. On peut également appliquer des contraintes (voir section 11.4) pour restreindre les types autorisés.

## Exemple d'utilisation

```csharp
using System;

// Classe générique avec deux paramètres de type
public class Paire<T1, T2>
{
    public T1 Premier { get; set; }
    public T2 Second { get; set; }

    public void Afficher()
    {
        Console.WriteLine($"({Premier}, {Second})");
    }
}

class Program
{
    static void Main()
    {
        Paire<int, string> paire1 = new Paire<int, string>();
        paire1.Premier = 10;
        paire1.Second = "Dix";
        paire1.Afficher();

        var paire2 = new Paire<double, bool> { Premier = 3.14, Second = true };
        paire2.Afficher();
    }
}
```

## Sortie console

```shell
dotnet run
(10, Dix)
(3.14, True)
```

## Remarques importantes

- Le nom de la classe générique peut être utilisé avec différents types.
- L'inférence de type n'est pas possible pour l'instanciation (il faut spécifier les types).
- Les paramètres de type peuvent être utilisés comme types de champs, propriétés, paramètres de méthodes et types de retour.

## Exemple d'utilisation dans le monde réel

**`KeyValuePair<TKey, TValue>`** – Utilisé dans `Dictionary<TKey, TValue>` pour représenter une paire clé/valeur.  
Voir [documentation .NET sur les génériques](https://docs.microsoft.com/fr-fr/dotnet/csharp/programming-guide/generics/).

## Sections connexes

- [11.1 Classes génériques](/fr/chapter-11-generics-and-constraints/11-1-generic-classes)
- [11.1.2 Nommage des paramètres de type](/fr/chapter-11-generics-and-constraints/11-1-2-type-parameters-naming)
