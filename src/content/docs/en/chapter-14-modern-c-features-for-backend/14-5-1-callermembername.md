---
title: CallerMemberName
sidebar:
  order: 711
  label: 14.5.1 CallerMemberName
---

**Context**: `[CallerMemberName]` provides the name of the method or property that called the current method. It is commonly used in `INotifyPropertyChanged` implementations to avoid hard‑coding property names, and in logging to capture which method triggered an event.

## Usage Example

```csharp
using System;
using System.ComponentModel;
using System.Runtime.CompilerServices;

public class ViewModel : INotifyPropertyChanged
{
    public event PropertyChangedEventHandler PropertyChanged;

    private string _name;
    public string Name
    {
        get => _name;
        set => SetField(ref _name, value);
    }

    protected void SetField<T>(ref T field, T value, [CallerMemberName] string propertyName = null)
    {
        if (!EqualityComparer<T>.Default.Equals(field, value))
        {
            field = value;
            PropertyChanged?.Invoke(this, new PropertyChangedEventArgs(propertyName));
        }
    }
}

class Program
{
    static void Main()
    {
        var vm = new ViewModel();
        vm.Name = "Alice";
    }
}
```

## Output console

```shell
// PropertyChanged event fires with propertyName = "Name"
```

## Important notes

- The compiler automatically substitutes the caller’s member name.
- Works with methods, properties, events, constructors, and finalizers.
- Avoid using in performance‑critical loops (the string is allocated).

## Real-world usage example

**Dependency property callbacks** – Use `CallerMemberName` to automatically associate validation callbacks with the property being changed.  
See [.NET docs on CallerMemberName](https://docs.microsoft.com/en-us/dotnet/api/system.runtime.compilerservices.callermembernameattribute).

## Related sections

- [14.5 Caller info attributes](/en/chapter-14-modern-csharp-features-for-backend/14-5-caller-info-attributes)
- [14.5.2 CallerArgumentExpression](/en/chapter-14-modern-csharp-features-for-backend/14-5-2-callerargumentexpression)
