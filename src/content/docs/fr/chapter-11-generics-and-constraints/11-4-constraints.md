---
title: Contraintes
sidebar:
  order: 409
  label: 11.4 Contraintes
---

**Contexte** : Les contraintes restreignent les types qui peuvent être utilisés comme arguments de type générique. Elles permettent d'accéder à des membres spécifiques (constructeurs, méthodes, propriétés) du paramètre de type. La clause `where` est utilisée pour déclarer des contraintes.

## Exemple d'utilisation

```csharp
using System;

// Plusieurs contraintes illustrées dans une classe
public class ContrainteDemo<T> where T : class, new()
{
    public T CreerInstance()
    {
        return new T(); // new() permet d'utiliser le constructeur par défaut
    }
}

class Program
{
    static void Main()
    {
        var demo = new ContrainteDemo<ContrainteDemo<object>>();
        var instance = demo.CreerInstance();
        Console.WriteLine(instance != null);
    }
}
```

## Sortie console

```shell
dotnet run
True
```

## Remarques importantes

- Les contraintes sont optionnelles mais puissantes.
- On peut appliquer des contraintes à la classe ou à la méthode.
- Plusieurs contraintes sont séparées par des virgules.

## Exemple d'utilisation dans le monde réel

**`Dictionary<TKey, TValue>`** – `TKey` ne peut pas être `null` (contrainte implicite).  
Voir [documentation .NET sur les contraintes](https://docs.microsoft.com/fr-fr/dotnet/csharp/programming-guide/generics/constraints-on-type-parameters).

## Sections connexes

- [11.4.1 where T : struct](/fr/chapter-11-generics-and-constraints/11-4-1-where-t-struct-value-type)
- [11.4.2 where T : class](/fr/chapter-11-generics-and-constraints/11-4-2-where-t-class-reference-type)
- [11.4.3 where T : new()](/fr/chapter-11-generics-and-constraints/11-4-3-where-t-new-parameterless-constructor)
- [11.4.4 where T : BaseClass](/fr/chapter-11-generics-and-constraints/11-4-4-where-t-baseclass-base-class-constraint)
- [11.4.5 where T : IMyInterface](/fr/chapter-11-generics-and-constraints/11-4-5-where-t-imyinterface-interface-constraint)
- [11.4.6 where T : unmanaged](/fr/chapter-11-generics-and-constraints/11-4-6-where-t-unmanaged-no-references)
- [11.4.7 Contraintes multiples](/fr/chapter-11-generics-and-constraints/11-4-7-multiple-constraints)
