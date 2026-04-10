---
title: Réflexion
sidebar:
  order: 600
  label: 13.1 Réflexion
---

**Contexte** : La réflexion est la capacité d'un programme en cours d'exécution à inspecter et interagir avec ses propres métadonnées (types, méthodes, propriétés, attributs) à l'exécution. Elle permet de charger dynamiquement des assemblys, découvrir des types, créer des instances, invoquer des méthodes et accéder à des champs même privés. La réflexion est puissante mais a un coût en performance et contourne la sécurité de compilation.

## Exemple d'utilisation

```csharp
using System;
using System.Reflection;

class Program
{
    static void Main()
    {
        Type type = typeof(string);
        Console.WriteLine($"Nom du type : {type.Name}");
        Console.WriteLine($"Nom complet : {type.FullName}");
        Console.WriteLine($"Est une classe : {type.IsClass}");
    }
}
```

## Sortie console

```shell
dotnet run
Nom du type : String
Nom complet : System.String
Est une classe : True
```

## Remarques importantes

- La réflexion peut briser l'encapsulation (accéder aux membres privés).
- Elle est plus lente que le code direct (à utiliser avec parcimonie).
- Utile pour les plugins, la sérialisation et les ORM.

## Exemple d'utilisation dans le monde réel

**Conteneurs d'injection de dépendances** – Utilisent la réflexion pour scanner les assemblys à la recherche de types décorés d'attributs personnalisés et les enregistrer automatiquement.  
Voir [documentation .NET sur la réflexion](https://docs.microsoft.com/fr-fr/dotnet/framework/reflection-and-codedom/reflection).

## Sections connexes

- [13.1.1 Classe Type](/fr/chapter-13-reflection-attributes-and-source-generators/13-1-1-type-class)
- [13.1.2 Chargement et analyse d'assembly](/fr/chapter-13-reflection-attributes-and-source-generators/13-1-2-assembly-loading-and-scanning)
- [13.1.3 MemberInfo MethodInfo PropertyInfo](/fr/chapter-13-reflection-attributes-and-source-generators/13-1-3-memberinfo-methodinfo-propertyinfo)
- [13.1.4 Invocation dynamique de méthodes](/fr/chapter-13-reflection-attributes-and-source-generators/13-1-4-invoking-methods-dynamically)
