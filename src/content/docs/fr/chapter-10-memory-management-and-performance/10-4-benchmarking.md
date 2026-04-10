---
title: Benchmarking
sidebar:
  order: 315
  label: 10.4 Benchmarking
---

**Contexte** : Le benchmarking mesure les performances (temps d'exécution, allocations mémoire) du code pour identifier les goulots d'étranglement et comparer les implémentations. Le chronométrage manuel avec `Stopwatch` est sujet à erreurs à cause de l'échauffement JIT, des threads d'arrière‑plan et d'autres facteurs. **BenchmarkDotNet** est la bibliothèque standard de l'industrie pour le benchmarking .NET qui gère toutes ces complexités.

## Exemple d'utilisation

```csharp
using System;
using System.Diagnostics;

// Benchmarking manuel (non recommandé)
public class ManualBenchmark
{
    public static void Measure(Action action)
    {
        Stopwatch sw = Stopwatch.StartNew();
        action();
        sw.Stop();
        Console.WriteLine($"Temps écoulé : {sw.ElapsedMilliseconds} ms");
    }
}
```

## Sortie console

```shell
dotnet run
Temps écoulé : 123 ms
```

## Remarques importantes

- Utilisez toujours une bibliothèque de benchmarking dédiée.
- Exécutez les benchmarks en mode **Release** sans débogueur attaché.

## Exemple d'utilisation dans le monde réel

**Choisir un type de collection** – Comparez si `List<T>` ou `HashSet<T>` est plus rapide pour votre motif de recherche spécifique.  
Voir [documentation BenchmarkDotNet](https://benchmarkdotnet.org/).

## Sections connexes

- [10.4.1 BenchmarkDotNet](/fr/chapter-10-memory-management-and-performance/10-4-1-benchmarkdotnet)
- [10.4.2 Attributs Benchmark et MemoryDiagnoser](/fr/chapter-10-memory-management-and-performance/10-4-2-benchmark-and-memorydiagnoser-attributes)
