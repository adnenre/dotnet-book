---
title: Nommage des paramètres de type (T, TKey, TValue)
sidebar:
  order: 402
  label: 11.1.2 Nommage des paramètres de type
---

**Contexte** : Par convention, les paramètres de type sont nommés avec un préfixe `T` (pour Type). Pour un seul paramètre, on utilise `T`. Pour plusieurs, on utilise des noms descriptifs comme `TKey`, `TValue`, `TInput`, `TOutput`. Cela améliore la lisibilité du code.

## Exemple d'utilisation

```csharp
using System;
using System.Collections.Generic;

// Convention : T pour un seul type
public class Transformateur<T>
{
    public T Transformer(T entree)
    {
        return entree;
    }
}

// Convention : TKey et TValue pour dictionnaire
public class DictionnaireSimple<TKey, TValue>
{
    private Dictionary<TKey, TValue> _dictionnaire = new Dictionary<TKey, TValue>();

    public void Ajouter(TKey cle, TValue valeur)
    {
        _dictionnaire.Add(cle, valeur);
    }

    public TValue Obtenir(TKey cle)
    {
        return _dictionnaire[cle];
    }
}

class Program
{
    static void Main()
    {
        var dict = new DictionnaireSimple<string, int>();
        dict.Ajouter("âge", 30);
        Console.WriteLine(dict.Obtenir("âge"));
    }
}
```

## Sortie console

```shell
dotnet run
30
```

## Remarques importantes

- `T` est le nom le plus courant pour un paramètre de type unique.
- `TKey` et `TValue` sont utilisés pour les collections clé‑valeur.
- Évitez les noms comme `T1`, `T2` sauf pour des cas triviaux.

## Exemple d'utilisation dans le monde réel

**`Dictionary<TKey, TValue>`** – Utilise exactement cette convention. `List<T>` utilise `T`.  
Voir [documentation .NET sur les conventions de nommage](https://docs.microsoft.com/fr-fr/dotnet/standard/design-guidelines/names-of-type-members).

## Sections connexes

- [11.1.1 Syntaxe](/fr/chapter-11-generics-and-constraints/11-1-1-syntax)
- [11.2 Méthodes génériques](/fr/chapter-11-generics-and-constraints/11-2-generic-methods)
