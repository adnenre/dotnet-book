---
title: Générateurs source
sidebar:
  order: 609
  label: 13.3 Générateurs source
---

**Contexte** : Les générateurs source sont une fonctionnalité du compilateur C# (introduite dans .NET 5) qui permet d'inspecter le code utilisateur et de générer des fichiers source supplémentaires à la compilation. Ils s'exécutent dans le cadre du pipeline de compilation et peuvent ajouter du nouveau code qui est compilé avec le code original. Cela permet la métaprogrammation sans surcharge de réflexion à l'exécution.

## Exemple d'utilisation

```csharp
// Exemple de générateur source simple (conceptuel ; l'implémentation réelle nécessite un projet de générateur séparé)
using Microsoft.CodeAnalysis;

[Generator]
public class GenerateurBonjour : ISourceGenerator
{
    public void Initialize(GeneratorInitializationContext context) { }
    public void Execute(GeneratorExecutionContext context)
    {
        context.AddSource("BonjourGenere", "public static class Bonjour { public static void Dire() => System.Console.WriteLine(\"Bonjour du générateur !\"); }");
    }
}
```

## Sortie console (lorsqu'il est utilisé dans un projet)

```shell
// Le code généré est compilé automatiquement.
Bonjour.Dire(); // Affiche : Bonjour du générateur !
```

## Remarques importantes

- Les générateurs source s'exécutent à la compilation, pas à l'exécution.
- Ils peuvent accéder aux arbres syntaxiques, aux symboles et aux informations de compilation.
- Le code généré est visible dans les IDE (comme Visual Studio) et peut être débogué.

## Exemple d'utilisation dans le monde réel

**ViewModel générés automatiquement** – Génèrent des implémentations INotifyPropertyChanged pour les propriétés marquées avec `[Observable]`.  
Voir [documentation .NET sur les générateurs source](https://docs.microsoft.com/fr-fr/dotnet/csharp/roslyn-sdk/source-generators-overview).

## Sections connexes

- [13.3.1 Que sont les générateurs source](/fr/chapter-13-reflection-attributes-and-source-generators/13-3-1-what-are-source-generators)
- [13.3.2 Générateurs incrémentaux](/fr/chapter-13-reflection-attributes-and-source-generators/13-3-2-incremental-generators)
- [13.3.3 Cas d'utilisation : code à la compilation, performance](/fr/chapter-13-reflection-attributes-and-source-generators/13-3-3-use-cases-compile-time-code-performance)
- [13.3.4 Différence avec la réflexion : pas de surcharge à l'exécution](/fr/chapter-13-reflection-attributes-and-source-generators/13-3-4-difference-from-reflection-no-runtime-overhead)
