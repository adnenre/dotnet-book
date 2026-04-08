---
title: Project structure
sidebar:
  order: 10
  label: 1.3 Project structure
---

A typical .NET project has a well-defined structure with specific files and folders.

## Core Components

- **.csproj**: XML project file with package references
- **Program.cs**: Application entry point
- **appsettings.json**: Configuration file
- **/bin**: Compiled binaries
- **/obj**: Intermediate build objects

## Related Topics

- 1.3.1 csproj file XML format package references
- 1.3.2 Program.cs entry point
- 1.3.3 appsettings.json configuration
- 1.3.4 obj and bin folders

```bash
# Create a new project to see structure
dotnet new console -n DemoProject
cd DemoProject
tree /F
```
