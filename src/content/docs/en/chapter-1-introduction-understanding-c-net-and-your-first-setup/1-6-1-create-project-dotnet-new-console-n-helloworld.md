---
title: Create project dotnet
sidebar:
  order: 26
  label: 1.6.1 Create project dotnet
---

**Context**: Use `dotnet new console` with the -n parameter to create a new console app. The project targets .NET 10 by default.

Use `dotnet new console` with the `-n` parameter to create a new console application.

## Command

```bash
dotnet new console -n HelloWorld
```

## What Gets Created

```bash
HelloWorld/
├── HelloWorld.csproj
├── Program.cs
└── obj/
```

## Navigate and Explore

```bash
cd HelloWorld
ls -la

# View the project file

cat HelloWorld.csproj

# View the initial Program.cs

cat Program.cs
```

## Initial Program.cs (with top-level statements)

```csharp
// See https://aka.ms/new-console-template for more information
Console.WriteLine("Hello, World!");
```
