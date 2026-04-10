---
title: "Projet : Benchmark Concaténation de chaînes vs StringBuilder"
sidebar:
  order: 319
  label: 10.5 Projet  Benchmark Concaténation de chaînes vs StringBuilder
---

**Contexte** : Ce projet compare deux manières courantes de concaténer de nombreuses chaînes : l'opérateur `+` (qui crée de nombreuses chaînes intermédiaires) et `StringBuilder` (qui utilise un tampon mutable). Vous utiliserez BenchmarkDotNet avec `[MemoryDiagnoser]` pour mesurer à la fois le temps d'exécution et les allocations mémoire. Cela démontre pourquoi `StringBuilder` est préféré pour les boucles avec de nombreuses concaténations.

## Exemple d'utilisation

```csharp
using BenchmarkDotNet.Attributes;
using BenchmarkDotNet.Running;
using System.Text;

[MemoryDiagnoser]
public class StringConcatBenchmark
{
    private const int Iterations = 1000;

    [Benchmark]
    public string ConcatWithPlus()
    {
        string result = "";
        for (int i = 0; i < Iterations; i++)
        {
            result += i.ToString();
        }
        return result;
    }

    [Benchmark]
    public string ConcatWithStringBuilder()
    {
        var sb = new StringBuilder();
        for (int i = 0; i < Iterations; i++)
        {
            sb.Append(i);
        }
        return sb.ToString();
    }
}

class Program
{
    static void Main(string[] args)
    {
        var summary = BenchmarkRunner.Run<StringConcatBenchmark>();
    }
}
```

## Sortie console

```shell
dotnet run -c Release
| Method                | Mean     | Gen0     | Allocated |
|---------------------- |---------:|---------:|----------:|
| ConcatWithPlus        | 845.2 us | 123.4567 | 512.34 KB |
| ConcatWithStringBuilder | 12.3 us |   0.1234 |   4.56 KB |
```

## Comment exécuter

1. Créez un nouveau projet console.
2. Ajoutez le paquet NuGet BenchmarkDotNet : `dotnet add package BenchmarkDotNet`
3. Remplacez `Program.cs` par le code ci-dessus.
4. Exécutez en mode Release : `dotnet run -c Release`

## Remarques importantes

- L'opérateur `+` crée une nouvelle chaîne à chaque itération (les chaînes sont immuables).
- `StringBuilder` utilise un tampon interne qui grossit selon les besoins, réduisant les allocations.

## Exemple d'utilisation dans le monde réel

**Construction de grandes chaînes HTML/JSON** – Dans une API web, utiliser `StringBuilder` (ou `String.Create` moderne) est crucial pour les performances lors de la construction de grandes réponses.  
Voir [documentation .NET sur StringBuilder](https://docs.microsoft.com/fr-fr/dotnet/api/system.text.stringbuilder).

## Sections connexes

- [10.4.2 Attributs Benchmark et MemoryDiagnoser](/fr/chapter-10-memory-management-and-performance/10-4-2-benchmark-and-memorydiagnoser-attributes)
- [10.4.3 Exécuter des benchmarks en évitant les pièges courants](/fr/chapter-10-memory-management-and-performance/10-4-3-running-benchmarks-avoiding-common-pitfalls)
