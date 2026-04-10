---
title: Différence avec la réflexion : pas de surcharge à l'exécution
sidebar:
  order: 613
  label: 13.3.4 Différence avec la réflexion : pas de surcharge à l'exécution
---

**Contexte** : Contrairement à la réflexion, qui inspecte les métadonnées à l'exécution et est souvent lente, les générateurs source produisent du code à la compilation. Le code généré est du C# ordinaire qui s'exécute sans surcharge de réflexion. Cela est essentiel pour les scénarios haute performance, la compilation anticipée (AOT), et les plateformes où la réflexion est restreinte (ex. iOS, WebAssembly).

## Exemple d'utilisation (comparaison)

```csharp
// Approche par réflexion (surcharge à l'exécution)
var props = typeof(Personne).GetProperties();
foreach (var p in props) Console.WriteLine(p.GetValue(personne));

// Approche par générateur source (à la compilation) – le générateur produit une méthode fortement typée
personne.AfficherProprietes(); // Pas de réflexion à l'intérieur
```

## Sortie console

```shell
// Les deux produisent la même sortie, mais le générateur est beaucoup plus rapide.
```

## Remarques importantes

- Les générateurs source augmentent le temps de build mais suppriment les coûts à l'exécution.
- Ils sont compatibles avec Native AOT (la réflexion peut ne pas l'être).
- Ils peuvent accéder à des internes du compilateur non disponibles à l'exécution.

## Exemple d'utilisation dans le monde réel

**Générateur source System.Text.Json** – Génère `JsonSerializerContext` avec le code de sérialisation, éliminant la réflexion de `JsonSerializerOptions`.  
Voir [documentation .NET sur la génération source JSON](https://docs.microsoft.com/fr-fr/dotnet/standard/serialization/system-text-json/source-generation).

## Sections connexes

- [13.3.3 Cas d'utilisation : code à la compilation, performance](/fr/chapter-13-reflection-attributes-and-source-generators/13-3-3-use-cases-compile-time-code-performance)
- [13.1 Réflexion](/fr/chapter-13-reflection-attributes-and-source-generators/13-1-reflection)
