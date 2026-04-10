---
title: Incremental generators
sidebar:
  order: 611
  label: 13.3.2 Incremental generators
---

**Context**: Incremental generators are an advanced form of source generators (introduced in .NET 6) that are more efficient. Instead of reprocessing everything on each compilation, they cache intermediate results and only re‑run when inputs change. This significantly improves build performance for generators that analyze many types.

## Usage Example (conceptual)

```csharp
using Microsoft.CodeAnalysis;

[Generator]
public class MyIncrementalGenerator : IIncrementalGenerator
{
    public void Initialize(IncrementalGeneratorInitializationContext context)
    {
        var provider = context.SyntaxProvider
            .CreateSyntaxProvider(predicate: (node, _) => node is ClassDeclarationSyntax,
                                   transform: (ctx, _) => (ClassDeclarationSyntax)ctx.Node);
        context.RegisterSourceOutput(provider, (ctx, classDecl) =>
        {
            ctx.AddSource($"{classDecl.Identifier}.g.cs", SourceText.From($"// Generated code for {classDecl.Identifier}", Encoding.UTF8));
        });
    }
}
```

## Output console

```shell
// Compilation output includes generated files.
```

## Important notes

- Use `IIncrementalGenerator` instead of `ISourceGenerator`.
- Syntax providers filter and cache nodes.
- Combine `Combine` and `WithComparer` for advanced caching.

## Real-world usage example

**Auto‑implementation of `IEquatable<T>`** – Only generate equality members for types that change, not the entire assembly.  
See [.NET docs on incremental generators](https://docs.microsoft.com/en-us/dotnet/csharp/roslyn-sdk/source-generators-overview#incremental-generators).

## Related sections

- [13.3.1 What are source generators](/en/chapter-13-reflection-attributes-and-source-generators/13-3-1-what-are-source-generators)
- [13.3.3 Use cases compile time code performance](/en/chapter-13-reflection-attributes-and-source-generators/13-3-3-use-cases-compile-time-code-performance)
