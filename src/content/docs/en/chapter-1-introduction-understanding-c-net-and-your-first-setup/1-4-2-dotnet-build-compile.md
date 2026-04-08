---
title: dotnet build compile
sidebar:
  order: 17
  label: 1.4.2 dotnet build compile
---

**Context**: `dotnet build` compiles the project. By default, it creates a Debug build. Use `-c Release` for optimized build.

`dotnet build` compiles the project and its dependencies into a set of binaries.

## Basic Usage

```bash
# Build the current project
dotnet build

# Build with specific configuration
dotnet build -c Release

# Build a specific project
dotnet build path/to/MyProject.csproj
```

## Build Output

- **Debug build**: `bin/Debug/` (includes debug symbols)
- **Release build**: `bin/Release/` (optimized)

## Common Options

| Option                | Description               |
| --------------------- | ------------------------- |
| `-c, --configuration` | Debug or Release          |
| `-o, --output`        | Output directory          |
| `--no-restore`        | Don't restore packages    |
| `-v, --verbosity`     | Build output detail level |

```bash
# Verbose build output
dotnet build -v detailed
```
