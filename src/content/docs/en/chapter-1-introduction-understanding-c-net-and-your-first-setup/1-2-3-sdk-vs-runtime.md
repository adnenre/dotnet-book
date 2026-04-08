---
title: SDK vs Runtime
sidebar:
  order: 9
  label: 1.2.3 SDK vs Runtime
---

Understanding the difference between SDK and Runtime is crucial for .NET development and deployment.

## .NET SDK

- **Purpose**: Development
- **Includes**: Compilers, CLI tools, templates, build engines, and the runtime
- **Size**: ~500-700 MB
- **When to install**: On development machines

## .NET Runtime

- **Purpose**: Running existing .NET applications
- **Includes**: Just the runtime environment (no compilers or tools)
- **Size**: ~50-100 MB
- **When to install**: On production servers or end-user machines

## ASP.NET Core Runtime

- **Purpose**: Running web applications
- **Includes**: .NET Runtime + ASP.NET Core libraries

```bash
# Check installed SDKs
dotnet --list-sdks

# Check installed runtimes
dotnet --list-runtimes
```
