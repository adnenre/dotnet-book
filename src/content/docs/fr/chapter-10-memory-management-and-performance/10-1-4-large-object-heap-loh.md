---
title: Large Object Heap LOH
sidebar:
  order: 304
  label: 10.1.4 Large Object Heap LOH
---

**Contexte** : Dans .NET, les objets de plus de 85 000 octets (85 Ko) sont alloués sur un tas spécial appelé Large Object Heap (LOH). Le LOH n'est pas compacté par défaut car déplacer de gros objets serait coûteux. Au lieu de cela, le GC utilise un algorithme de liste libre pour gérer la mémoire du LOH. Cela peut conduire à une fragmentation au fil du temps. Depuis .NET 5, vous pouvez compacter manuellement le LOH, mais cela reste généralement évité pour des raisons de performance.

## Exemple d'utilisation

```csharp
using System;

public class LOHDemo
{
    public static void AllocateLargeObject()
    {
        // Ce tableau ira dans le LOH car il fait > 85 Ko
        // 85 000 octets / 8 octets par double ≈ 10 625 doubles
        double[] largeArray = new double[11000];
        Console.WriteLine($"Est sur LOH ? {GC.GetGeneration(largeArray) == 2}"); // Généralement true
    }
}
```

## Sortie console

```shell
dotnet run
Est sur LOH ? True
```

## Remarques importantes

- Les objets LOH sont toujours en génération 2.
- Les allocations fréquentes sur LOH peuvent causer de la fragmentation.
- Utilisez `ArrayPool<T>` ou le pooling d'objets pour réutiliser les gros tampons.

## Exemple d'utilisation dans le monde réel

**Traitement d'images** – Charger de grandes images bitmap (ex. 4K) alloue de grands tableaux d'octets sur le LOH. Réutiliser les tampons via `ArrayPool<byte>` évite la fragmentation et réduit la pression sur le GC.  
Voir [documentation .NET sur LOH](https://docs.microsoft.com/fr-fr/dotnet/standard/garbage-collection/large-object-heap).

## Sections connexes

- [10.1.5 Objets épinglés](/fr/chapter-10-memory-management-and-performance/10-1-5-pinned-objects)
- [10.3.3 ArrayPool<T> pour louer des tampons](/fr/chapter-10-memory-management-and-performance/10-3-3-arraypool-t-for-renting-buffers)
