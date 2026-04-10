---
title: Background GC
sidebar:
  order: 303
  label: 10.1.3 Background GC
---

**Contexte** : Le Background GC (GC d'arrière-plan) permet au garbage collector de collecter les générations 0 et 1 pendant qu'une collecte complète de la génération 2 est en cours. Cela réduit les pauses car le GC peut effectuer la majeure partie de son travail sur un thread d'arrière‑plan. Avant .NET 4.5, les collectes complètes bloquaient tous les threads de l'application. Avec le Background GC, seules de courtes pauses se produisent, améliorant la réactivité, en particulier pour les charges serveur.

## Exemple d'utilisation

```csharp
using System;
using System.Runtime;

public class BackgroundGCDemo
{
    public static void ShowStatus()
    {
        // Vérifier si le Background GC est activé (il l'est par défaut)
        GCSettings.LatencyMode mode = GCSettings.LatencyMode;
        Console.WriteLine($"Mode latence : {mode}");
        // Pour Background GC, le mode est généralement "Interactive" ou "Batch"
    }
}
```

## Sortie console

```shell
dotnet run
Mode latence : Interactive
```

## Remarques importantes

- Activé par défaut dans .NET moderne (Core 3.0+).
- Réduit les pauses visibles dans les applications interactives.
- Peut être désactivé via configuration (non recommandé).

## Exemple d'utilisation dans le monde réel

**Tableau de bord en temps réel** – Un tableau de bord financier qui se met à jour chaque seconde bénéficie du Background GC car il évite les blocages de l'interface lors des collectes complètes.  
Voir [documentation .NET sur le Background GC](https://docs.microsoft.com/fr-fr/dotnet/standard/garbage-collection/background-gc).

## Sections connexes

- [10.1.2 Workstation GC vs Server GC](/fr/chapter-10-memory-management-and-performance/10-1-2-workstation-gc-vs-server-gc)
- [10.1.4 Large Object Heap LOH](/fr/chapter-10-memory-management-and-performance/10-1-4-large-object-heap-loh)
