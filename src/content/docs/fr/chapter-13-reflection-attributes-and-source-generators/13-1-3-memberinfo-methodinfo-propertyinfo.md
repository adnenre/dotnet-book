---
title: MemberInfo MethodInfo PropertyInfo
sidebar:
  order: 603
  label: 13.1.3 MemberInfo MethodInfo PropertyInfo
---

**Contexte** : `MemberInfo` est la classe de base abstraite pour les objets de réflexion représentant des membres d'un type (méthodes, propriétés, champs, événements, constructeurs). `MethodInfo` représente une méthode, `PropertyInfo` une propriété, `FieldInfo` un champ. Ces objets fournissent un accès aux métadonnées et permettent l'invocation dynamique.

## Exemple d'utilisation

```csharp
using System;
using System.Reflection;

public class Calculatrice
{
    public int Ajouter(int a, int b) => a + b;
    public string Nom { get; set; }
}

class Program
{
    static void Main()
    {
        Type t = typeof(Calculatrice);
        MethodInfo[] methods = t.GetMethods();
        PropertyInfo[] properties = t.GetProperties();

        foreach (var m in methods)
            Console.WriteLine($"Méthode : {m.Name}");
        foreach (var p in properties)
            Console.WriteLine($"Propriété : {p.Name}");
    }
}
```

## Sortie console

```shell
dotnet run
Méthode : Ajouter
Méthode : GetType
Méthode : ToString
Méthode : Equals
Méthode : GetHashCode
Propriété : Nom
```

## Remarques importantes

- Utilisez `GetMethod`, `GetProperty`, `GetField` pour obtenir des membres spécifiques.
- `BindingFlags` permet de filtrer (static, instance, public, non public).
- `MethodInfo.Invoke` appelle la méthode dynamiquement.

## Exemple d'utilisation dans le monde réel

**Frameworks de tests unitaires** – Utilisent `MethodInfo` pour découvrir les méthodes de test (décorées avec `[Test]`) et les invoquer par réflexion.  
Voir [documentation .NET sur MethodInfo](https://docs.microsoft.com/fr-fr/dotnet/api/system.reflection.methodinfo).

## Sections connexes

- [13.1.4 Invocation dynamique de méthodes](/fr/chapter-13-reflection-attributes-and-source-generators/13-1-4-invoking-methods-dynamically)
- [13.2 Attributs personnalisés](/fr/chapter-13-reflection-attributes-and-source-generators/13-2-custom-attributes)
