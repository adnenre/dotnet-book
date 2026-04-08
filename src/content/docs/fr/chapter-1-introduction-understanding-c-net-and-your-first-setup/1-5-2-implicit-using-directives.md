---
title: Directives using implicites
sidebar:
  order: 23
  label: 1.5.2 Directives using implicites
---

**Contexte** : Les directives using implicites importent automatiquement les espaces de noms courants. Elles sont activées par défaut dans les projets .NET 10.

Avec les instructions de niveau supérieur (ou en définissant `ImplicitUsings` dans .csproj), les espaces de noms courants sont automatiquement importés.

## Configuration

Dans `.csproj` :

```xml
<PropertyGroup>
  <ImplicitUsings>enable</ImplicitUsings>
</PropertyGroup>
```

## Désactiver

```xml
<PropertyGroup>
  <ImplicitUsings>disable</ImplicitUsings>
</PropertyGroup>
```
