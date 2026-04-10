---
title: Workstation GC vs Server GC
sidebar:
  order: 302
  label: 10.1.2 Workstation GC vs Server GC
---

**Contexte** : .NET propose deux modes de GC adaptés à différents types d'applications. **Workstation GC** est conçu pour les applications client (WPF, WinForms, Console) où la réactivité de l'UI est critique ; il utilise un seul thread de GC et privilégie une faible latence. **Server GC** est destiné aux applications serveur (ASP.NET, services) qui ont besoin d'un débit élevé et d'une bonne évolutivité ; il crée un thread de GC par cœur CPU et collecte les tas en parallèle.

| Mode               | Utilisation          | Caractéristiques                                   |
| ------------------ | -------------------- | -------------------------------------------------- |
| **Workstation GC** | Applications client  | Un seul thread GC, optimisé pour la faible latence |
| **Server GC**      | Applications serveur | Plusieurs threads GC, optimisé pour le débit       |

## Exemple d'utilisation

```xml
<!-- Configuration dans .csproj ou runtimeconfig.json -->
<PropertyGroup>
  <ServerGarbageCollection>true</ServerGarbageCollection>
</PropertyGroup>
```

```csharp
// Vérifier le mode actuel
using System;
using System.Runtime;

Console.WriteLine($"Mode GC : {(GCSettings.IsServerGC ? "Server" : "Workstation")}");
```

## Sortie console

```shell
dotnet run
Mode GC : Workstation
```

## Remarques importantes

- **Workstation** est le mode par défaut pour les applications client.
- **Server** est recommandé pour les applications backend avec de nombreux threads et une forte allocation mémoire.

## Exemple d'utilisation dans le monde réel

**API web ASP.NET Core** – Par défaut, elle s'exécute en mode Server GC pour gérer efficacement de nombreuses requêtes concurrentes. Vous pouvez le modifier dans le fichier projet.  
Voir [documentation .NET sur les modes GC](https://docs.microsoft.com/fr-fr/dotnet/standard/garbage-collection/workstation-server-gc).

## Sections connexes

- [10.1.1 Générations 0, 1, 2](/fr/chapter-10-memory-management-and-performance/10-1-1-generations-0-1-2)
- [10.1.3 Background GC](/fr/chapter-10-memory-management-and-performance/10-1-3-background-gc)
