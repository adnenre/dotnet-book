---
title: where T  class (type référence)
sidebar:
  order: 411
  label: 11.4.2 where T  class
---

**Contexte** : La contrainte `where T : class` exige que le paramètre de type soit un type référence (classe, interface, délégué, tableau). Elle autorise `null`. Elle est souvent utilisée pour les conteneurs qui gèrent des objets partagés ou nécessitent des références.

## Exemple d'utilisation

```csharp
using System;
using System.Collections.Generic;

public class Entrepot<T> where T : class
{
    private readonly List<T> _items = new List<T>();

    public void Ajouter(T item)
    {
        if (item == null)
            throw new ArgumentNullException(nameof(item));
        _items.Add(item);
    }

    public T Obtenir(int index) => _items[index];
}

class Program
{
    static void Main()
    {
        var entrepotChaines = new Entrepot<string>();
        entrepotChaines.Ajouter("Bonjour");
        Console.WriteLine(entrepotChaines.Obtenir(0));

        // Ceci ne compile pas : int est un struct
        // var entrepotInt = new Entrepot<int>();
    }
}
```

## Sortie console

```shell
dotnet run
Bonjour
```

## Remarques importantes

- `class` inclut les interfaces, les délégués et les tableaux.
- Permet de vérifier `null` et d'utiliser l'opérateur `as`.

## Exemple d'utilisation dans le monde réel

**`List<T>`** – N'a pas de contrainte `class`, mais beaucoup de collections personnalisées l'utilisent pour garantir que les éléments sont des objets.  
Voir [documentation .NET sur la contrainte class](https://docs.microsoft.com/fr-fr/dotnet/csharp/language-reference/keywords/where-generic-type-constraint#class).

## Sections connexes

- [11.4.1 where T : struct](/fr/chapter-11-generics-and-constraints/11-4-1-where-t-struct-value-type)
- [11.4.3 where T : new()](/fr/chapter-11-generics-and-constraints/11-4-3-where-t-new-parameterless-constructor)
