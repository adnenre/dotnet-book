---
title: Use cases compile time code performance
sidebar:
  order: 612
  label: 13.3.3 Use cases compile time code performance
---

**Context**: Source generators are used for compile‑time code generation to improve runtime performance. Common use cases include: generating serialization logic (JSON, protobuf), implementing INotifyPropertyChanged, generating logging proxies, creating mocks for testing, and building dependency injection containers. They eliminate runtime reflection and IL generation.

## Usage Example (use case: INotifyPropertyChanged)

```csharp
// With a source generator, you write:
public partial class ViewModel : INotifyPropertyChanged
{
    [ObservableProperty]
    private string _userName;
}

// The generator produces the property with change notification:
public partial class ViewModel
{
    public string UserName { get => _userName; set { if (_userName != value) { _userName = value; OnPropertyChanged(); } } }
    private void OnPropertyChanged([CallerMemberName] string name = null) => PropertyChanged?.Invoke(this, new PropertyChangedEventArgs(name));
}
```

## Output console

```shell
// No runtime overhead; code is already there at compile time.
```

## Important notes

- Generated code can be seen and debugged.
- No reflection, no performance penalty.
- Works with AOT compilation (Native AOT, iOS, etc.).

## Real-world usage example

**CommunityToolkit.MVVM** – Uses source generators to produce observable properties and commands.  
See [MVVM Toolkit docs](https://learn.microsoft.com/en-us/dotnet/communitytoolkit/mvvm/).

## Related sections

- [13.3.2 Incremental generators](/en/chapter-13-reflection-attributes-and-source-generators/13-3-2-incremental-generators)
- [13.3.4 Difference from reflection no runtime overhead](/en/chapter-13-reflection-attributes-and-source-generators/13-3-4-difference-from-reflection-no-runtime-overhead)
