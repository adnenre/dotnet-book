---
title: BenchmarkDotNet
sidebar:
  order: 316
  label: 10.4.1 BenchmarkDotNet
---

**Contexte** : BenchmarkDotNet est une puissante bibliothèque open source qui transforme vos méthodes en benchmarks, les exécute plusieurs fois et fournit des résultats statistiques (moyenne, erreur, écart type, allocations). Elle gère automatiquement l'échauffement, les itérations et les diagnostics mémoire. Pour l'utiliser, ajoutez le paquet NuGet `BenchmarkDotNet` et marquez les méthodes avec `[Benchmark]`.

## Exemple d'utilisation

```bash
dotnet add package BenchmarkDotNet
```

```csharp
using BenchmarkDotNet.Attributes;
using BenchmarkDotNet.Running;
using System;

public class MyBenchmarks
{
    [Benchmark]
    public int CalculateSum()
    {
        int sum = 0;
        for (int i = 0; i < 1000; i++) sum += i;
        return sum;
    }
}

class Program
{
    static void Main(string[] args)
    {
        var summary = BenchmarkRunner.Run<MyBenchmarks>();
    }
}
```

## Sortie console

```shell
dotnet run -c Release
| Method        | Mean     | Error    | StdDev   |
|-------------- |---------:|---------:|---------:|
| CalculateSum  | 0.524 us | 0.012 us | 0.011 us |
```

## Remarques importantes

- Compilez et exécutez en mode **Release** : `dotnet run -c Release`
- N'attachez pas de débogueur (Ctrl+F5 dans VS).
- BenchmarkDotNet exécutera chaque benchmark plusieurs fois pour des statistiques fiables.

## Exemple d'utilisation dans le monde réel

**Comparaison de sérialiseurs** – Comparez `System.Text.Json` avec `Newtonsoft.Json` pour voir lequel est le plus rapide pour vos données.  
Voir [Guide de démarrage BenchmarkDotNet](https://benchmarkdotnet.org/articles/guides/getting-started.html).

## Sections connexes

- [10.4.2 Attributs Benchmark et MemoryDiagnoser](/fr/chapter-10-memory-management-and-performance/10-4-2-benchmark-and-memorydiagnoser-attributes)
- [10.4.3 Exécuter des benchmarks en évitant les pièges courants](/fr/chapter-10-memory-management-and-performance/10-4-3-running-benchmarks-avoiding-common-pitfalls)
