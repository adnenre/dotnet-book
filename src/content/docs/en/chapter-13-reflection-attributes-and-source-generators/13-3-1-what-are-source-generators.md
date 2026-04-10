---
title: What are source generators
sidebar:
  order: 610
  label: 13.3.1 What are source generators
---

**Context**: Source generators are components that run during compilation to inspect your code and produce additional C# source files. They have access to the syntax trees and semantic models of your project. The generated code is compiled together with the original code, allowing you to add boilerplate, implement interfaces automatically, or optimize patterns that would otherwise require runtime reflection.

## Usage Example (generator output)

```csharp
// A source generator might take this:
public partial class Person { public string Name { get; set; } }

// And generate this:
public partial class Person : INotifyPropertyChanged
{
    public event PropertyChangedEventHandler PropertyChanged;
    private string _name;
    public string Name { get => _name; set { if (_name != value) { _name = value; PropertyChanged?.Invoke(this, new PropertyChangedEventArgs(nameof(Name))); } } }
}
```

## Output console

```shell
// No runtime output; the generated code is compiled and works seamlessly.
```

## Important notes

- Generators cannot modify existing code; they only add new files.
- They are ideal for code that is repetitive and based on patterns.
- Source generators are deterministic and can be cached.

## Real-world usage example

**`System.Text.Json` source generator** – Generates serialization code at compile time, eliminating runtime reflection.  
See [.NET docs on source generators](https://docs.microsoft.com/en-us/dotnet/csharp/roslyn-sdk/source-generators-overview).

## Related sections

- [13.3 Source generators](/en/chapter-13-reflection-attributes-and-source-generators/13-3-source-generators)
- [13.3.2 Incremental generators](/en/chapter-13-reflection-attributes-and-source-generators/13-3-2-incremental-generators)
