---
title: "Projet : Moteur de validation basé sur les attributs"
sidebar:
  order: 614
  label: 13.4 Projet  Moteur de validation basé sur les attributs
---

**Contexte** : Ce projet construit un moteur de validation qui utilise des attributs personnalisés pour définir des règles de validation (ex. `[Requis]`, `[LongueurMin(5)]`). À l'exécution, la réflexion lit ces attributs et valide les propriétés des objets. Le moteur retourne une collection d'erreurs. Cela démontre les attributs personnalisés, `AttributeUsage` et la lecture des attributs par réflexion.

## Exemple d'utilisation

```csharp
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;

[AttributeUsage(AttributeTargets.Property)]
public class RequisAttribute : Attribute { }

[AttributeUsage(AttributeTargets.Property)]
public class LongueurMinAttribute : Attribute
{
    public int Longueur { get; }
    public LongueurMinAttribute(int longueur) => Longueur = longueur;
}

[AttributeUsage(AttributeTargets.Property)]
public class PlageAttribute : Attribute
{
    public double Min { get; }
    public double Max { get; }
    public PlageAttribute(double min, double max) => (Min, Max) = (min, max);
}

public class ResultatValidation
{
    public string NomPropriete { get; set; }
    public string MessageErreur { get; set; }
}

public static class Validateur
{
    public static IReadOnlyList<ResultatValidation> Valider(object obj)
    {
        var resultats = new List<ResultatValidation>();
        Type type = obj.GetType();
        PropertyInfo[] proprietes = type.GetProperties();

        foreach (var prop in proprietes)
        {
            object valeur = prop.GetValue(obj);

            // Requis
            if (prop.GetCustomAttribute<RequisAttribute>() != null)
            {
                if (valeur == null || (valeur is string s && string.IsNullOrWhiteSpace(s)))
                    resultats.Add(new ResultatValidation { NomPropriete = prop.Name, MessageErreur = $"{prop.Name} est requis." });
            }

            // Longueur minimale
            var longueurMinAttr = prop.GetCustomAttribute<LongueurMinAttribute>();
            if (longueurMinAttr != null && valeur is string str && str.Length < longueurMinAttr.Longueur)
                resultats.Add(new ResultatValidation { NomPropriete = prop.Name, MessageErreur = $"{prop.Name} doit comporter au moins {longueurMinAttr.Longueur} caractères." });

            // Plage
            var plageAttr = prop.GetCustomAttribute<PlageAttribute>();
            if (plageAttr != null && valeur is IComparable comparable)
            {
                if (comparable.CompareTo(plageAttr.Min) < 0 || comparable.CompareTo(plageAttr.Max) > 0)
                    resultats.Add(new ResultatValidation { NomPropriete = prop.Name, MessageErreur = $"{prop.Name} doit être compris entre {plageAttr.Min} et {plageAttr.Max}." });
            }
        }
        return resultats;
    }
}

public class Utilisateur
{
    [Requis]
    public string Nom { get; set; }

    [LongueurMin(6)]
    public string MotDePasse { get; set; }

    [Plage(18, 99)]
    public int Age { get; set; }
}

class Program
{
    static void Main()
    {
        var user = new Utilisateur { Nom = "", MotDePasse = "123", Age = 15 };
        var erreurs = Validateur.Valider(user);
        foreach (var err in erreurs)
            Console.WriteLine($"{err.NomPropriete}: {err.MessageErreur}");
    }
}
```

## Sortie console

```shell
dotnet run
Nom: Nom est requis.
MotDePasse: MotDePasse doit comporter au moins 6 caractères.
Age: Age doit être compris entre 18 et 99.
```

## Comment exécuter

1. Créez un nouveau projet console : `dotnet new console -n MoteurValidation`
2. Remplacez `Program.cs` par le code ci-dessus.
3. Exécutez `dotnet run`

## Remarques importantes

- Le moteur utilise la réflexion pour lire les attributs.
- Il prend en charge plusieurs attributs de validation par propriété.
- Facilement extensible avec de nouveaux attributs personnalisés.

## Exemple d'utilisation dans le monde réel

**Validation de modèles ASP.NET Core** – La validation intégrée utilise des attributs comme `[Required]`, `[StringLength]`, `[Range]` et la réflexion pour valider automatiquement les modèles.  
Voir [documentation .NET sur la validation de modèles](https://docs.microsoft.com/fr-fr/aspnet/core/mvc/models/validation).

## Sections connexes

- [13.2 Attributs personnalisés](/fr/chapter-13-reflection-attributes-and-source-generators/13-2-custom-attributes)
- [13.2.3 Lecture des attributs par réflexion](/fr/chapter-13-reflection-attributes-and-source-generators/13-2-3-reading-attributes-with-reflection)
