---
title: Fichier csproj format XML références de paquets
sidebar:
  order: 11
  label: 1.3.1 Fichier csproj format XML références de paquets
---

**Contexte** : Le fichier .csproj définit les paramètres du projet et ses dépendances. Pour .NET 10, la cible est `net10.0`.

Le fichier `.csproj` (projet C#) est un fichier XML qui définit comment votre projet est compilé et quelles sont ses dépendances.

## Éléments clés

```xml
<Project Sdk="Microsoft.NET.Sdk">
  <PropertyGroup>
    <TargetFramework>net10.0</TargetFramework>
    <Nullable>enable</Nullable>
    <ImplicitUsings>enable</ImplicitUsings>
  </PropertyGroup>

  <ItemGroup>
    <PackageReference Include="Newtonsoft.Json" Version="13.0.3" />
  </ItemGroup>
</Project>
```

## Propriétés courantes

| Élément            | Objectif                                     |
| ------------------ | -------------------------------------------- |
| `TargetFramework`  | Version .NET cible (net10.0, net8.0)         |
| `Nullable`         | Activer les types référence nullables        |
| `ImplicitUsings`   | Importer automatiquement les espaces de noms |
| `PackageReference` | Dépendances de paquets NuGet                 |

```bash
# Ajouter un paquet via CLI
dotnet add package Newtonsoft.Json
```
