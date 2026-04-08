---
title: Implicit using directives
sidebar:
  order: 23
  label: 1.5.2 Implicit using directives
---

**Context**: Implicit using directives automatically import common namespaces. They are enabled by default in .NET 10 projects.

When using top-level statements (or setting `ImplicitUsings` in .csproj), common namespaces are automatically imported.

## Default Implicit Usings

| SDK Type                 | Implicit Usings                                                                                                       |
| ------------------------ | --------------------------------------------------------------------------------------------------------------------- |
| Microsoft.NET.Sdk        | System, System.Collections.Generic, System.IO, System.Linq, System.Net.Http, System.Threading, System.Threading.Tasks |
| Microsoft.NET.Sdk.Web    | Plus ASP.NET Core namespaces                                                                                          |
| Microsoft.NET.Sdk.Worker | Plus background service namespaces                                                                                    |

## Configuration

In `.csproj`:

```xml
<PropertyGroup>
  <ImplicitUsings>enable</ImplicitUsings>
</PropertyGroup>
```

## Disable Implicit Usings

```xml
<PropertyGroup>
  <ImplicitUsings>disable</ImplicitUsings>
</PropertyGroup>
```

## Global Usings

Create `GlobalUsings.cs`:

```csharp
global using System.Text.Json;
global using MyApp.Common;
```
