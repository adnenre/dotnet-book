---
title: Attributs personnalisés
sidebar:
  order: 605
  label: 13.2 Attributs personnalisés
---

**Contexte** : Les attributs personnalisés permettent d'ajouter des métadonnées aux éléments de code (classes, méthodes, propriétés, etc.). Vous définissez un attribut en créant une classe qui hérite de `System.Attribute`. Les attributs peuvent être lus à l'exécution via la réflexion, ce qui permet la programmation déclarative. Ils sont largement utilisés dans ASP.NET Core (ex. `[Route]`, `[Authorize]`), la sérialisation (`[JsonIgnore]`) et la validation (`[Required]`).

## Exemple d'utilisation

```csharp
using System;

[AttributeUsage(AttributeTargets.Class | AttributeTargets.Method)]
public class AuteurAttribute : Attribute
{
    public string Nom { get; }
    public AuteurAttribute(string nom) => Nom = nom;
}

[Auteur("Jean Dupont")]
public class ExempleClasse { }

class Program
{
    static void Main()
    {
        var attr = (AuteurAttribute)Attribute.GetCustomAttribute(typeof(ExempleClasse), typeof(AuteurAttribute));
        Console.WriteLine(attr?.Nom);
    }
}
```

## Sortie console

```shell
dotnet run
Jean Dupont
```

## Remarques importantes

- Les noms d'attributs se terminent par "Attribute" par convention (vous pouvez omettre le suffixe lors de l'application).
- `AttributeUsage` restreint où l'attribut peut être appliqué.
- Les constructeurs définissent les paramètres obligatoires ; les propriétés définissent les paramètres facultatifs.

## Exemple d'utilisation dans le monde réel

**Noms d'affichage pour les énumérations** – Utilisez `[Display(Name = "Une valeur")]` pour fournir des noms lisibles pour les valeurs d'énumération.  
Voir [documentation .NET sur les attributs personnalisés](https://docs.microsoft.com/fr-fr/dotnet/standard/attributes/writing-custom-attributes).

## Sections connexes

- [13.2.1 Classe Attribute et AttributeUsage](/fr/chapter-13-reflection-attributes-and-source-generators/13-2-1-attribute-class-attributeusage)
- [13.2.2 Application des attributs aux cibles](/fr/chapter-13-reflection-attributes-and-source-generators/13-2-2-applying-attributes-to-targets)
- [13.2.3 Lecture des attributs par réflexion](/fr/chapter-13-reflection-attributes-and-source-generators/13-2-3-reading-attributes-with-reflection)
