---
title: Attributs Benchmark et MemoryDiagnoser
sidebar:
  order: 317
  label: 10.4.2 Attributs Benchmark et MemoryDiagnoser
---

**Contexte** : BenchmarkDotNet fournit des attributs pour contrôler le comportement des benchmarks. `[Benchmark]` marque une méthode comme benchmark. `[MemoryDiagnoser]` active la mesure des collectes du garbage collector (Gen0, Gen1, Gen2) et de la mémoire allouée. D'autres attributs utiles incluent `[IterationCount]`, `[WarmupCount]` et `[Params]` pour les benchmarks paramétrés.

## Exemple d'utilisation

```csharp
using BenchmarkDotNet.Attributes;
using System;
using System.Text;

[MemoryDiagnoser] // Montre les allocations GC
public class StringBenchmarks
{
    [Benchmark]
    public string ConcatStrings()
    {
        string result = "";
        for (int i = 0; i < 100; i++)
        {
            result += i.ToString();
        }
        return result;
    }

    [Benchmark]
    public string StringBuilderStrings()
    {
        var sb = new StringBuilder();
        for (int i = 0; i < 100; i++)
        {
            sb.Append(i);
        }
        return sb.ToString();
    }
}
```

## Sortie console

```shell
dotnet run -c Release
| Method           | Mean     | Gen0   | Allocated |
|----------------- |---------:|-------:|----------:|
| ConcatStrings    | 15.24 us | 12.345 | 45.23 KB  |
| StringBuilderStrings | 1.23 us | 0.123 | 1.45 KB   |
```

## Remarques importantes

- `[MemoryDiagnoser]` doit être appliqué à la classe.
- `[Params(10, 100, 1000)]` peut faire varier les tailles d'entrée.
- Des attributs comme `[ShortRunJob]` réduisent le nombre d'itérations pour des tests rapides.

## Exemple d'utilisation dans le monde réel

**Benchmark de concaténation de chaînes** – Utilisez `[MemoryDiagnoser]` pour voir que `StringBuilder` alloue bien moins de mémoire que la concaténation avec `+`.  
Voir [documentation sur les attributs BenchmarkDotNet](https://benchmarkdotnet.org/articles/features/attributes.html).

## Sections connexes

- [10.4.1 BenchmarkDotNet](/fr/chapter-10-memory-management-and-performance/10-4-1-benchmarkdotnet)
- [10.5 Projet : Benchmark Concaténation de chaînes vs StringBuilder](/fr/chapter-10-memory-management-and-performance/10-5-project-benchmark-string-concatenation-vs-stringbuilder)
