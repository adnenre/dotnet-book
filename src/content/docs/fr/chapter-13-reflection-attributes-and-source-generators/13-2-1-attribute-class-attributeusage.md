---
title: Classe Attribute et AttributeUsage
sidebar:
  order: 606
  label: 13.2.1 Classe Attribute et AttributeUsage
---

**Contexte** : L'attribut `AttributeUsage` est appliqué aux classes d'attributs personnalisés pour spécifier où ils peuvent être utilisés (classes, méthodes, propriétés, assemblys, etc.), s'ils peuvent être appliqués plusieurs fois et s'ils sont hérités par les classes dérivées. Par défaut, un attribut peut être appliqué à n'importe quelle cible et une seule fois.

## Exemple d'utilisation

```csharp
using System;

[AttributeUsage(AttributeTargets.Method | AttributeTargets.Property, AllowMultiple = true, Inherited = false)]
public class MonAttribut : Attribute
{
    public string Donnees { get; }
    public MonAttribut(string donnees) => Donnees = donnees;
}

class Program
{
    static void Main()
    {
        bool hasUsage = typeof(MonAttribut).GetCustomAttributes(typeof(AttributeUsageAttribute), false).Length > 0;
        Console.WriteLine(hasUsage);
    }
}
```

## Sortie console

```shell
dotnet run
True
```

## Remarques importantes

- `AttributeTargets` peut être combiné avec l'opérateur OR (`|`).
- `AllowMultiple = true` permet d'appliquer le même attribut plusieurs fois.
- `Inherited` contrôle si les classes dérivées héritent de l'attribut.

## Exemple d'utilisation dans le monde réel

**Attributs de validation** – `[Required]` utilise `AllowMultiple = false`, `AttributeTargets.Field | AttributeTargets.Property`.  
Voir [documentation .NET sur AttributeUsage](https://docs.microsoft.com/fr-fr/dotnet/api/system.attributeusageattribute).

## Sections connexes

- [13.2 Attributs personnalisés](/fr/chapter-13-reflection-attributes-and-source-generators/13-2-custom-attributes)
- [13.2.2 Application des attributs aux cibles](/fr/chapter-13-reflection-attributes-and-source-generators/13-2-2-applying-attributes-to-targets)
