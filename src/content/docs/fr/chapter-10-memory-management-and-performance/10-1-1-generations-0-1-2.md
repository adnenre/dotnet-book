---
title: Générations 0, 1, 2
sidebar:
  order: 301
  label: 10.1.1 Générations 0, 1, 2
---

**Contexte** : Pour améliorer l'efficacité, le GC divise le tas managé en trois générations : 0, 1 et 2. Les objets nouvellement alloués commencent dans la génération 0. Lors d'une collecte, les objets qui survivent sont promus à la génération suivante. Comme la plupart des objets meurent jeunes (variables temporaires), collecter uniquement la génération 0 est rapide et fréquent. Les objets qui survivent à plusieurs collectes (données statiques, caches) finissent en génération 2, qui est rarement collectée.

| Génération | Durée de vie typique                        | Fréquence de collecte |
| ---------- | ------------------------------------------- | --------------------- |
| **0**      | Très courte (variables locales)             | Très fréquente        |
| **1**      | Tampon (objets ayant survécu à Gen0)        | Moins fréquente       |
| **2**      | Longue durée (objets statiques, singletons) | Rare                  |

## Exemple d'utilisation

```csharp
using System;

class Program
{
    static void Main()
    {
        var obj = new object();
        Console.WriteLine($"Génération initiale : {GC.GetGeneration(obj)}"); // 0

        GC.Collect(); // Collecte Gen0
        Console.WriteLine($"Après première collecte : {GC.GetGeneration(obj)}"); // 1

        GC.Collect(); // Collecte Gen1 (promotion)
        Console.WriteLine($"Après deuxième collecte : {GC.GetGeneration(obj)}"); // 2

        GC.Collect();
        Console.WriteLine($"Toujours en Gen2 : {GC.GetGeneration(obj)}"); // 2
    }
}
```

## Sortie console

```shell
dotnet run
Génération initiale : 0
Après première collecte : 1
Après deuxième collecte : 2
Toujours en Gen2 : 2
```

## Remarques importantes

- Évitez d'appeler `GC.Collect()` manuellement – cela perturbe les heuristiques du GC.
- Les objets Gen2 sont rarement collectés, évitez donc les allocations inutiles à longue durée de vie.

## Exemple d'utilisation dans le monde réel

**Service de cache** – Les entrées de cache doivent être stockées avec des références faibles ou conçues soigneusement pour éviter de promouvoir trop d'objets en Gen2, ce qui augmenterait l'empreinte mémoire.  
Voir [documentation .NET sur les générations](https://docs.microsoft.com/fr-fr/dotnet/standard/garbage-collection/fundamentals#generations).

## Sections connexes

- [10.1 Garbage Collection](/fr/chapter-10-memory-management-and-performance/10-1-garbage-collection)
- [10.1.2 Workstation GC vs Server GC](/fr/chapter-10-memory-management-and-performance/10-1-2-workstation-gc-vs-server-gc)
