---
title: Lecture des attributs par réflexion
sidebar:
  order: 608
  label: 13.2.3 Lecture des attributs par réflexion
---

**Contexte** : Les attributs sont des métadonnées ; pour y accéder à l'exécution, on utilise la réflexion. La méthode `GetCustomAttributes` (ou `GetCustomAttribute`) récupère les attributs appliqués à un type, une méthode, une propriété, etc. Cela permet d'implémenter des comportements basés sur des métadonnées déclaratives (validation, sérialisation, injection de dépendances).

## Exemple d'utilisation

```csharp
using System;
using System.Linq;
using System.Reflection;

[AttributeUsage(AttributeTargets.Property)]
public class RequisAttribute : Attribute { }

public class Utilisateur
{
    [Requis]
    public string Nom { get; set; }
    public int Age { get; set; }
}

class Program
{
    static void Main()
    {
        PropertyInfo[] props = typeof(Utilisateur).GetProperties();
        foreach (var prop in props)
        {
            bool estRequis = prop.GetCustomAttribute<RequisAttribute>() != null;
            Console.WriteLine($"{prop.Name}: Requis = {estRequis}");
        }
    }
}
```

## Sortie console

```shell
dotnet run
Nom: Requis = True
Age: Requis = False
```

## Remarques importantes

- Utilisez `GetCustomAttribute<T>()` pour un seul attribut, `GetCustomAttributes<T>()` pour plusieurs.
- Spécifiez `inherit: true` pour inclure les attributs hérités.
- La réflexion est nécessaire car les attributs ne sont pas directement accessibles à l'exécution.

## Exemple d'utilisation dans le monde réel

**Moteur de validation** – Lit les attributs `[Requis]`, `[LongueurMax]`, `[Plage]` sur les propriétés d'un modèle et valide les valeurs.  
Voir [documentation .NET sur la récupération des attributs](https://docs.microsoft.com/fr-fr/dotnet/standard/attributes/retrieving-attributes-stored-in-the-custom-attribute-store).

## Sections connexes

- [13.2.1 Classe Attribute et AttributeUsage](/fr/chapter-13-reflection-attributes-and-source-generators/13-2-1-attribute-class-attributeusage)
- [13.4 Projet : Moteur de validation basé sur les attributs](/fr/chapter-13-reflection-attributes-and-source-generators/13-4-project-attribute-based-validation-engine)
