---
title: Contrat de compatibilité API .Net Standard
sidebar:
  order: 5
  label: 1.1.4 Contrat de compatibilité API .Net Standard
---

**Contexte** : .NET Standard est une spécification formelle des API disponibles sur toutes les implémentations .NET. Avec .NET 10, on cible directement `net10.0`.

.NET Standard est une spécification formelle des API .NET disponibles sur toutes les implémentations .NET. Il permet le partage de code entre différentes plateformes .NET.

## Comment ça fonctionne

Différentes implémentations .NET (Framework, Core, Xamarin, Unity) implémentent des versions spécifiques de .NET Standard. Le code compilé contre une version .NET Standard peut s'exécuter sur toute implémentation supportant cette version.

## Versions .NET Standard

| Version   | Implémentation supportante la plus récente   |
| --------- | -------------------------------------------- |
| 1.0 - 1.6 | .NET Framework 4.6+                          |
| 2.0       | .NET Framework 4.6.1+, .NET Core 2.0+        |
| 2.1       | .NET Core 3.0+, .NET 5+ (pas .NET Framework) |

> **Note** : .NET moderne (5+) n'a plus besoin de .NET Standard. Utilisez directement la cible `net10.0`.

```csharp
// Exemple : Créer une bibliothèque .NET Standard
// Dans le fichier .csproj :
// <TargetFramework>netstandard2.0</TargetFramework>
```
