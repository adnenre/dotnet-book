---
title: Application des attributs aux cibles
sidebar:
  order: 607
  label: 13.2.2 Application des attributs aux cibles
---

**Contexte** : Les attributs peuvent être appliqués à diverses cibles de code : assemblys, modules, classes, interfaces, structures, énumérations, méthodes, constructeurs, champs, propriétés, paramètres, valeurs de retour et paramètres génériques. La syntaxe utilise des crochets `[...]` placés au-dessus de l'élément cible. Pour les assemblys et modules, l'attribut apparaît dans la portée globale.

## Exemple d'utilisation

```csharp
using System;

[assembly: AssemblyTitle("MonApp")] // Attribut au niveau assembly

[Serializable] // Attribut au niveau classe
public class Personne
{
    [Obsolete("Utilisez NouvelleMethode à la place")] // Attribut au niveau méthode
    public void AncienneMethode() { }

    [JsonProperty("nom")] // Attribut au niveau propriété
    public string Nom { get; set; }

    public void Traiter([Required] string input) { } // Attribut au niveau paramètre
}
```

## Sortie console

```shell
// Compilation réussie ; pas de sortie à l'exécution.
```

## Remarques importantes

- Certains attributs sont reconnus par le compilateur (`[Obsolete]`, `[Serializable]`).
- Vous pouvez appliquer plusieurs attributs à la même cible, séparés par des virgules ou des crochets multiples.
- Les attributs au niveau assembly sont placés dans `AssemblyInfo.cs` ou directement dans `Program.cs`.

## Exemple d'utilisation dans le monde réel

**Routage ASP.NET Core** – `[Route("api/[controller]")]` sur une classe de contrôleur, `[HttpGet("{id}")]` sur une méthode.  
Voir [documentation .NET sur l'application des attributs](https://docs.microsoft.com/fr-fr/dotnet/standard/attributes/applying-attributes).

## Sections connexes

- [13.2.1 Classe Attribute et AttributeUsage](/fr/chapter-13-reflection-attributes-and-source-generators/13-2-1-attribute-class-attributeusage)
- [13.2.3 Lecture des attributs par réflexion](/fr/chapter-13-reflection-attributes-and-source-generators/13-2-3-reading-attributes-with-reflection)
