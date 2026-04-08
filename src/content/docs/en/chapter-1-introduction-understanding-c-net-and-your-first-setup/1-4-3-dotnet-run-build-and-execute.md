---
title: dotnet run build and execute
sidebar:
  order: 18
  label: 1.4.3 dotnet run build and execute
---

**Context**: `dotnet run` builds and executes the project. It is convenient for development but not for production (use `dotnet publish`).

`dotnet run` builds the project and immediately executes the resulting application.

## Basic Usage

```bash
# Build and run the current project
dotnet run

# Run with command-line arguments
dotnet run -- Hello World

# Run with specific configuration
dotnet run -c Release
```

## How It Works

1. Restores NuGet packages (if needed)
2. Builds the project
3. Executes the output assembly

## Important Notes

- **Not for production**: Use `dotnet publish` for deployment
- **First run slower**: Due to package restore and compilation
- **Watch mode**: `dotnet watch run` for auto-reload

```bash
# Run with watch mode (auto-rebuild on changes)
dotnet watch run

# Run a specific project
dotnet run --project ./MyApp/MyApp.csproj
```
