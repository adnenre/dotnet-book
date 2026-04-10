---
title: where T  new() (constructeur sans paramètre)
sidebar:
  order: 412
  label: 11.4.3 where T  new()
---

**Contexte** : La contrainte `new()` exige que le type générique possède un constructeur public sans paramètre. Elle permet de créer des instances du type à l'intérieur de la classe générique. Cette contrainte doit être la dernière si elle est combinée avec d'autres.

## Exemple d'utilisation

```csharp
using System;

public class Fabrique<T> where T : new()
{
    public T Creer()
    {
        return new T(); // possible grâce à new()
    }
}

public class Personne
{
    public string Nom { get; set; }
    public Personne() => Nom = "Inconnu";
}

public class SansConstructeurParDefaut
{
    public SansConstructeurParDefaut(string nom) { }
}

class Program
{
    static void Main()
    {
        var fabriquePersonne = new Fabrique<Personne>();
        Personne p = fabriquePersonne.Creer();
        Console.WriteLine(p.Nom); // Inconnu

        // Ceci ne compile pas : SansConstructeurParDefaut n'a pas de constructeur par défaut
        // var fabriqueErreur = new Fabrique<SansConstructeurParDefaut>();
    }
}
```

## Sortie console

```shell
dotnet run
Inconnu
```

## Remarques importantes

- `new()` ne peut pas être utilisé avec `struct` (les structs ont toujours un constructeur par défaut implicite, mais la syntaxe est autorisée).
- Si plusieurs contraintes, `new()` doit être en dernier.

## Exemple d'utilisation dans le monde réel

**`Activator.CreateInstance<T>()`** – Utilise la même exigence de constructeur par défaut.  
Voir [documentation .NET sur new()](https://docs.microsoft.com/fr-fr/dotnet/csharp/language-reference/keywords/where-generic-type-constraint#new).

## Sections connexes

- [11.4.2 where T : class](/fr/chapter-11-generics-and-constraints/11-4-2-where-t-class-reference-type)
- [11.4.7 Contraintes multiples](/fr/chapter-11-generics-and-constraints/11-4-7-multiple-constraints)
