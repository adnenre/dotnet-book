---
title: InterpolatedStringHandler struct
sidebar:
  order: 709
  label: 14.4.2 InterpolatedStringHandler struct
---

**Context**: A custom interpolated string handler is a `ref struct` that implements the pattern recognized by the C# compiler. It must have a constructor with parameters `int literalLength, int formattedCount` (and optionally a boolean parameter to control conditional building). The handler provides `AppendLiteral` and `AppendFormatted` methods. The compiler translates the interpolated string into calls to these methods.

## Usage Example

```csharp
using System;
using System.Runtime.CompilerServices;
using System.Text;

[InterpolatedStringHandler]
public ref struct StringBuilderHandler
{
    private StringBuilder _builder;
    public StringBuilderHandler(int literalLength, int formattedCount)
    {
        _builder = new StringBuilder(literalLength + formattedCount * 10);
    }
    public void AppendLiteral(string s) => _builder.Append(s);
    public void AppendFormatted<T>(T t) => _builder.Append(t);
    public string ToString() => _builder.ToString();
}

static class Builder
{
    public static string Build(StringBuilderHandler handler) => handler.ToString();
}

class Program
{
    static void Main()
    {
        string result = Builder.Build($"Number: {42}, Flag: {true}");
        Console.WriteLine(result);
    }
}
```

## Output console

```shell
dotnet run
Number: 42, Flag: True
```

## Important notes

- The handler must be a `ref struct` to avoid heap allocations.
- You can overload the constructor to accept an `out bool` parameter for conditional building.
- The handler can accumulate data in any way (e.g., write directly to a stream).

## Real-world usage example

**Conditional JSON logging** – Build JSON log entries only if logging is enabled, using a custom handler that writes to a pooled buffer.  
See [.NET docs on building a handler](https://docs.microsoft.com/en-us/dotnet/csharp/whats-new/tutorials/interpolated-string-handler#write-a-custom-handler).

## Related sections

- [14.4 Interpolated string handlers](/en/chapter-14-modern-csharp-features-for-backend/14-4-interpolated-string-handlers)
- [14.4.1 Performance optimisation for logging](/en/chapter-14-modern-csharp-features-for-backend/14-4-1-performance-optimisation-for-logging)
