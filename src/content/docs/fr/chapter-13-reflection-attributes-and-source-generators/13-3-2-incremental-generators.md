---
title: Générateurs incrémentaux
sidebar:
  order: 611
  label: 13.3.2 Générateurs incrémentaux
---

**Contexte** : Les générateurs incrémentaux sont une forme avancée de générateurs source (introduite dans .NET 6) qui sont plus efficaces. Au lieu de retraiter tout à chaque compilation, ils mettent en cache les résultats intermédiaires et ne se réexécutent que lorsque les entrées changent. Cela améliore considérablement les performances de build pour les générateurs qui analysent de nombreux types.

## Exemple d'utilisation (conceptuel)

```csharp
using Microsoft.CodeAnalysis;

[Generator]
public class MonGenerateurIncremental : IIncrementalGenerator
{
    public void Initialize(IncrementalGeneratorInitializationContext context)
    {
        var provider = context.SyntaxProvider
            .CreateSyntaxProvider(predicate: (node, _) => node is ClassDeclarationSyntax,
                                   transform: (ctx, _) => (ClassDeclarationSyntax)ctx.Node);
        context.RegisterSourceOutput(provider, (ctx, classDecl) =>
        {
            ctx.AddSource($"{classDecl.Identifier}.g.cs", SourceText.From($"// Code généré pour {classDecl.Identifier}", Encoding.UTF8));
        });
    }
}
```

## Sortie console

```shell
// La compilation inclut les fichiers générés.
```

## Remarques importantes

- Utilisez `IIncrementalGenerator` au lieu de `ISourceGenerator`.
- Les fournisseurs de syntaxe filtrent et mettent en cache les nœuds.
- Combinez `Combine` et `WithComparer` pour une mise en cache avancée.

## Exemple d'utilisation dans le monde réel

**Implémentation automatique de IEquatable<T>** – Ne génère les membres d'égalité que pour les types qui changent, pas pour tout l'assembly.  
Voir [documentation .NET sur les générateurs incrémentaux](https://docs.microsoft.com/fr-fr/dotnet/csharp/roslyn-sdk/source-generators-overview#incremental-generators).

## Sections connexes

- [13.3.1 Que sont les générateurs source](/fr/chapter-13-reflection-attributes-and-source-generators/13-3-1-what-are-source-generators)
- [13.3.3 Cas d'utilisation : code à la compilation, performance](/fr/chapter-13-reflection-attributes-and-source-generators/13-3-3-use-cases-compile-time-code-performance)
