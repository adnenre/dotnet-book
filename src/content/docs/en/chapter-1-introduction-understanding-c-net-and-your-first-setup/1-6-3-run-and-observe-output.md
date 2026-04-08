---
title: Run and observe output
sidebar:
  order: 28
  label: 1.6.3 Run and observe output
---

**Context**: Run the Hello World app using `dotnet run` and observe the output. This verifies your .NET 10 setup.

Run your Hello World application using `dotnet run` and observe the output.

## Run the Application

```bash
cd HelloWorld
dotnet run
```

## Expected Output

```bash
Hello World
```

## With Different Messages

```csharp
// Modify Program.cs
Console.WriteLine("Welcome to .NET 10!");
Console.WriteLine($"Current time: {DateTime.Now}");
```

## Run Output Example

```shell
Welcome to .NET 10!
Current time: 4/8/2026 10:30:45 AM
```

## Troubleshooting

- **Command not found**: .NET SDK not installed or not in PATH
- **Build errors**: Check syntax in Program.cs
- **Wrong directory**: Ensure you're in the project folder with .csproj

```bash
# Rebuild and run
dotnet clean
dotnet build
dotnet run
```
