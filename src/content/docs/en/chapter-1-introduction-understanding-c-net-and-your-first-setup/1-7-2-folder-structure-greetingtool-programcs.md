---
title: Folder structure GreetingTool Program.cs
sidebar:
  order: 31
  label: 1.7.2 Folder structure GreetingTool Program.cs
---

**Context**: The Greeting Tool follows the standard .NET 10 console project structure.

The Greeting Tool follows the standard .NET console project structure.

## Create the Project

```bash
dotnet new console -n GreetingTool
cd GreetingTool
```

## Folder Structure

```bash
GreetingTool/
├── GreetingTool.csproj
├── Program.cs
├── obj/
│ ├── Debug/
│ │ └── net10.0/
│ └── GreetingTool.csproj.nuget.*
└── bin/
└── Debug/
└── net10.0/
├── GreetingTool.dll
└── GreetingTool.exe (Windows)
```

## Program.cs (Initial)

```csharp
// Initial template code
Console.WriteLine("Hello, World!");
```

## Modified Program.cs

We'll replace the template with our greeting logic.
