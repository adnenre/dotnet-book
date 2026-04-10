---
title: Classe Type
sidebar:
  order: 601
  label: 13.1.1 Classe Type
---

**Contexte** : La classe `Type` (dans `System`) est le point d'entrée central pour la réflexion. Elle représente une déclaration de type (classe, structure, interface, énumération, etc.). Vous pouvez obtenir un objet `Type` en utilisant `typeof(MaClasse)`, `monObjet.GetType()`, ou `Type.GetType("MonNamespace.MaClasse")`. À partir de là, vous pouvez inspecter les membres, attributs, types de base, interfaces implémentées, etc.

## Exemple d'utilisation

```csharp
using System;
using System.Reflection;

public class Exemple { public int Valeur { get; set; } }

class Program
{
    static void Main()
    {
        Type t = typeof(Exemple);
        Console.WriteLine($"Nom : {t.Name}");
        Console.WriteLine($"Espace de noms : {t.Namespace}");
        Console.WriteLine($"Est public : {t.IsPublic}");

        PropertyInfo[] props = t.GetProperties();
        foreach (var prop in props)
            Console.WriteLine($"Propriété : {prop.Name}");
    }
}
```

## Sortie console

```shell
dotnet run
Nom : Exemple
Espace de noms :
Est public : True
Propriété : Valeur
```

## Remarques importantes

- `GetType()` s'utilise sur des instances, `typeof()` sur des noms de types à la compilation.
- Utilisez `Type.GetType(string)` pour le chargement dynamique de types.
- `Type` inclut des méthodes comme `GetMethods()`, `GetFields()`, `GetConstructors()`.

## Exemple d'utilisation dans le monde réel

**Bibliothèques de sérialisation** – Utilisent `Type` pour découvrir toutes les propriétés publiques d'un objet et les sérialiser en JSON/XML.  
Voir [documentation .NET sur la classe Type](https://docs.microsoft.com/fr-fr/dotnet/api/system.type).

## Sections connexes

- [13.1 Réflexion](/fr/chapter-13-reflection-attributes-and-source-generators/13-1-reflection)
- [13.1.2 Chargement et analyse d'assembly](/fr/chapter-13-reflection-attributes-and-source-generators/13-1-2-assembly-loading-and-scanning)
