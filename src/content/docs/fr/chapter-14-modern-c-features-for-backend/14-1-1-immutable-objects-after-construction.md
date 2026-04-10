---
title: Objets immuables après construction
sidebar:
  order: 701
  label: 14.1.1 Objets immuables après construction
---

**Contexte** : L'immutabilité signifie que l'état d'un objet ne peut pas changer après sa construction complète. Avec les setters init uniquement, vous pouvez créer des objets immuables en utilisant des initialiseurs d'objets simples au lieu d'écrire des constructeurs pour chaque combinaison de propriétés. Cela améliore la lisibilité du code et évite les mutations accidentelles, en particulier dans les scénarios concurrents.

## Exemple d'utilisation

```csharp
using System;

public class Configuration
{
    public string PointTerminaison { get; init; }
    public int DelaiSecondes { get; init; }
    public bool ReessaiActive { get; init; }
}

class Program
{
    static void Main()
    {
        var config = new Configuration
        {
            PointTerminaison = "https://api.exemple.com",
            DelaiSecondes = 30,
            ReessaiActive = true
        };
        Console.WriteLine($"{config.PointTerminaison}, délai : {config.DelaiSecondes}");
    }
}
```

## Sortie console

```shell
dotnet run
https://api.exemple.com, délai : 30
```

## Remarques importantes

- Après l'initialisation, les propriétés init ne peuvent pas être modifiées.
- Pour une immutabilité profonde, assurez-vous que les objets référencés sont également immuables.
- Les enregistrements (C# 9) offrent un autre moyen puissant de créer des types immuables.

## Exemple d'utilisation dans le monde réel

**Clés de cache** – Les objets de clé de cache immuables peuvent être utilisés en toute sécurité dans des dictionnaires concurrents sans risque de modification.  
Voir [documentation .NET sur l'immutabilité](https://docs.microsoft.com/fr-fr/dotnet/csharp/programming-guide/classes-and-structs/using-properties#init-only-properties).

## Sections connexes

- [14.1 Setters init uniquement](/fr/chapter-14-modern-csharp-features-for-backend/14-1-init-only-setters)
- [14.1.2 Initialiseur d'objet avec init](/fr/chapter-14-modern-csharp-features-for-backend/14-1-2-object-initialiser-with-init)
