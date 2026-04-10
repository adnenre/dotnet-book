---
title: Classes génériques
sidebar:
  order: 400
  label: 11.1 Classes génériques
---

**Contexte** : Les classes génériques permettent de définir un modèle de classe avec des paramètres de type. Cela évite de dupliquer du code pour différents types de données. Le type réel est spécifié lors de l'instanciation. Les classes génériques offrent la sécurité de type au moment de la compilation et améliorent les performances en évitant le boxing/unboxing pour les types valeur.

## Exemple d'utilisation

```csharp
using System;

public class Boite<T>
{
    private T _contenu;

    public void Ajouter(T contenu)
    {
        _contenu = contenu;
    }

    public T Obtenir()
    {
        return _contenu;
    }
}

class Program
{
    static void Main()
    {
        Boite<int> boiteInt = new Boite<int>();
        boiteInt.Ajouter(42);
        int valeur = boiteInt.Obtenir();
        Console.WriteLine(valeur);

        Boite<string> boiteString = new Boite<string>();
        boiteString.Ajouter("Bonjour");
        Console.WriteLine(boiteString.Obtenir());
    }
}
```

## Sortie console

```shell
dotnet run
42
Bonjour
```

## Remarques importantes

- Les paramètres de type sont placés entre chevrons `<>` après le nom de la classe.
- Les types valeur ne sont pas boxés lorsqu'ils sont utilisés avec des génériques.
- La classe générique peut contenir plusieurs paramètres de type.

## Exemple d'utilisation dans le monde réel

**Collections .NET** – `List<T>`, `Dictionary<TKey, TValue>` et `Queue<T>` sont des classes génériques utilisées quotidiennement pour stocker des données typées.  
Voir [documentation .NET sur les classes génériques](https://docs.microsoft.com/fr-fr/dotnet/csharp/programming-guide/generics/generic-classes).

## Sections connexes

- [11.1.1 Syntaxe](/fr/chapter-11-generics-and-constraints/11-1-1-syntax)
- [11.1.2 Nommage des paramètres de type T, TKey, TValue](/fr/chapter-11-generics-and-constraints/11-1-2-type-parameters-naming)
- [11.2 Méthodes génériques](/fr/chapter-11-generics-and-constraints/11-2-generic-methods)
