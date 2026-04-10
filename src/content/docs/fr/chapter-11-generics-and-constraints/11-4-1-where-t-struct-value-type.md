---
title: where T  struct (type valeur)
sidebar:
  order: 410
  label: 11.4.1 where T  struct
---

**Contexte** : La contrainte `where T : struct` exige que le paramètre de type soit un type valeur non nullable (`int`, `double`, `bool`, `DateTime`, `enum`, etc.). Elle exclut les types référence (classes, interfaces, délégués). Cette contrainte permet d'utiliser des types valeur en toute sécurité.

## Exemple d'utilisation

```csharp
using System;

public class CalculateurNumerique<T> where T : struct
{
    public T Zero => default(T); // default(T) = 0 pour int, false pour bool, etc.

    public T Additionner(T a, T b)
    {
        // Pour simplifier, on convertit dynamiquement (pas idéal, mais démonstration)
        dynamic da = a;
        dynamic db = b;
        return da + db;
    }
}

class Program
{
    static void Main()
    {
        var calcInt = new CalculateurNumerique<int>();
        Console.WriteLine(calcInt.Additionner(5, 3)); // 8

        var calcDouble = new CalculateurNumerique<double>();
        Console.WriteLine(calcDouble.Additionner(2.5, 1.2)); // 3.7

        // Ceci ne compile pas : string est un type référence
        // var calcString = new CalculateurNumerique<string>();
    }
}
```

## Sortie console

```shell
dotnet run
8
3.7
```

## Remarques importantes

- `struct` implique `System.ValueType`.
- Les types valeur nullables (`int?`) ne sont pas autorisés (car `Nullable<T>` est un struct mais avec une contrainte spéciale).
- Utile pour les types mathématiques ou les buffers de bas niveau.

## Exemple d'utilisation dans le monde réel

**`System.Nullable<T>`** – `where T : struct` garantit que `T` est un type valeur.  
Voir [documentation .NET sur la contrainte struct](https://docs.microsoft.com/fr-fr/dotnet/csharp/language-reference/keywords/where-generic-type-constraint#struct).

## Sections connexes

- [11.4 Contraintes](/fr/chapter-11-generics-and-constraints/11-4-constraints)
- [11.4.2 where T : class](/fr/chapter-11-generics-and-constraints/11-4-2-where-t-class-reference-type)
