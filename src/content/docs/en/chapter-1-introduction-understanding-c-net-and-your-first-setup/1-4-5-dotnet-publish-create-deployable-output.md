---
title: dotnet publish create deployable output
sidebar:
  order: 20
  label: 1.4.5 dotnet publish create deployable output
---

**Context**: `dotnet publish` produces a folder ready for deployment. With .NET 10, you can publish as framework-dependent, self-contained, or single-file.

`dotnet publish` compiles the application and produces a folder containing everything needed for deployment.

## Basic Usage

```bash
# Create publish output (Release configuration)
dotnet publish

# Publish to specific directory
dotnet publish -o ./publish

# Publish as self-contained (includes runtime)
dotnet publish --self-contained true
```

## Deployment Modes

| Mode                | Command                                    | Output Size              |
| ------------------- | ------------------------------------------ | ------------------------ |
| Framework-dependent | `dotnet publish`                           | Small (requires runtime) |
| Self-contained      | `dotnet publish --self-contained true`     | Large (includes runtime) |
| Single-file         | `dotnet publish -p:PublishSingleFile=true` | One .exe file            |

```bash
# Single-file executable
dotnet publish -p:PublishSingleFile=true -o ./publish

# Trim unused assemblies
dotnet publish -p:PublishTrimmed=true
```

## Publish Output

- **For Windows**: .exe and .dll files
- **For Linux/macOS**: executable file and .dll files
