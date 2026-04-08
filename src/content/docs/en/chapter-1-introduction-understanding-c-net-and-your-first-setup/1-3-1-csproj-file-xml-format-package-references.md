---
title: csproj file XML format package references
sidebar:
  order: 11
  label: 1.3.1 csproj file XML format package references
---

The `.csproj` file (C# Project) is an XML file that defines how your project is built and what dependencies it has.

## Key Elements

```xml
<Project Sdk="Microsoft.NET.Sdk">
  <PropertyGroup>
    <TargetFramework>net8.0</TargetFramework>
    <Nullable>enable</Nullable>
    <ImplicitUsings>enable</ImplicitUsings>
  </PropertyGroup>

  <ItemGroup>
    <PackageReference Include="Newtonsoft.Json" Version="13.0.3" />
    <PackageReference Include="Microsoft.EntityFrameworkCore" Version="8.0.0" />
  </ItemGroup>
</Project>
```
