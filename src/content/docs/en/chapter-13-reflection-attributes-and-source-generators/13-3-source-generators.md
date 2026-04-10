---
title: Source generators
sidebar:
  order: 609
  label: 13.3 Source generators
---

**Context**: Source generators are a C# compiler feature (introduced in .NET 5) that allows you to inspect user code and generate additional source files at compile time. They run as part of the compilation pipeline and can add new code that is compiled together with the original code. This enables metaprogramming without runtime reflection overhead.

## Usage Example

```csharp
// Example of a simple source generator (conceptual; actual implementation requires creating a separate generator project)
using Microsoft.CodeAnalysis;

[Generator]
public class HelloWorldGenerator : ISourceGenerator
{
    public void Initialize(GeneratorInitializationContext context) { }
    public void Execute(GeneratorExecutionContext context)
    {
        context.AddSource("GeneratedHello", "public static class Hello { public static void Say() => System.Console.WriteLine(\"Hello from generator!\"); }");
    }
}
```

## Output console (when used in a project)

```shell
// Generated code is compiled automatically.
Hello.Say(); // Outputs: Hello from generator!
```

## Important notes

- Source generators run at compile time, not runtime.
- They can access syntax trees, symbols, and compilation information.
- Generated code is visible in IDEs (like Visual Studio) and can be debugged.

## Real-world usage example

**Auto‑generated ViewModels** – Generate INotifyPropertyChanged implementations for properties marked with `[Observable]`.  
See [.NET docs on source generators](https://docs.microsoft.com/en-us/dotnet/csharp/roslyn-sdk/source-generators-overview).

## Related sections

- [13.3.1 What are source generators](/en/chapter-13-reflection-attributes-and-source-generators/13-3-1-what-are-source-generators)
- [13.3.2 Incremental generators](/en/chapter-13-reflection-attributes-and-source-generators/13-3-2-incremental-generators)
- [13.3.3 Use cases compile time code performance](/en/chapter-13-reflection-attributes-and-source-generators/13-3-3-use-cases-compile-time-code-performance)
- [13.3.4 Difference from reflection no runtime overhead](/en/chapter-13-reflection-attributes-and-source-generators/13-3-4-difference-from-reflection-no-runtime-overhead)
