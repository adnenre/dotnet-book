---
title: When to use vs traditional Main
sidebar:
  order: 24
  label: 1.5.3 When to use vs traditional Main
---

**Context**: Choose top-level statements for simple console apps and learning; use traditional Main for complex applications. This guidance applies to .NET 10.

Choose between top-level statements and traditional `Main` based on your application's complexity and purpose.

## Use Top-Level Statements When

- **Simple console apps**: Quick scripts, utilities, demos
- **Learning C#**: Less confusing for beginners
- **Small tools**: One-file programs
- **Prototyping**: Rapid iteration

## Use Traditional Main When

- **Multiple entry points**: Need several `Main` methods
- **Complex initialization**: Lots of setup code before app logic
- **Team conventions**: Existing codebase uses traditional style
- **Advanced scenarios**: Customizing the entry point signature

## Example Comparison

**Top-level (good for simple apps)**:

```csharp
var config = LoadConfig();
var app = new MyApp(config);
await app.RunAsync();
```

**Traditional (better for complex apps)**:

```csharp
public class Program
{
    public static async Task Main(string[] args)
    {
        try
        {
            var config = LoadConfig(args);
            await InitializeLogging(config);
            var app = new MyApp(config);
            await app.RunAsync();
        }
        catch (Exception ex)
        {
            Log.Error(ex);
            Environment.Exit(1);
        }
    }
}
```
