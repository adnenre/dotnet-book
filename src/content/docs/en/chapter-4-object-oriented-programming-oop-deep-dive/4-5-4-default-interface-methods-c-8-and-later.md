---
title: Default interface methods C# 8 and later
sidebar:
  order: 99
  label: 4.5.4 Default interface methods C# 8 and later
---

**Context**: C# 8 introduced default implementations for interface methods. This allows adding new members to interfaces without breaking existing implementations.

## Example

```csharp
public interface ILogger
{
    void Log(string message);
    // Default implementation
    void LogError(string error) => Log($"ERROR: {error}");
}

public class ConsoleLogger : ILogger
{
    public void Log(string message) => Console.WriteLine(message);
    // LogError is optional; uses default if not overridden
}
```

## Overriding Default Method

```csharp
public class FileLogger : ILogger
{
    public void Log(string message) => File.WriteAllText("log.txt", message);
    public void LogError(string error) => Log($"Custom error: {error}");
}
```

## Access via Interface

Default methods are only accessible through the interface type.

```csharp
ILogger logger = new ConsoleLogger();
logger.LogError("Oops"); // calls default or overridden
```

## Use Cases

- Adding methods to widely used interfaces (e.g., `IEnumerable<T>`).
- Providing backward compatibility.
