---
title: Exécuter des benchmarks en évitant les pièges courants
sidebar:
  order: 318
  label: 10.4.3 Exécuter des benchmarks en évitant les pièges courants
---

**Contexte** : Pour obtenir des résultats de benchmark précis, évitez ces erreurs courantes : exécuter en mode Debug, attacher un débogueur, avoir d'autres applications en cours d'exécution, ne pas faire d'échauffement, et utiliser la même variable à travers les benchmarks. BenchmarkDotNet évite automatiquement la plupart de ces problèmes, mais vous devez vous assurer que votre projet est compilé en configuration **Release** et que vous exécutez le processus de benchmark sans débogueur.

## Exemple d'utilisation

```bash
# Manière correcte d'exécuter des benchmarks
dotnet run -c Release --filter *MyBenchmark*
```

```csharp
// Piège : élimination de code mort
[Benchmark]
public void Pitfall()
{
    int x = 42; // Le compilateur peut supprimer ceci si non utilisé
}

// Correction : consommer la valeur
[Benchmark]
public int Fixed()
{
    int x = 42;
    return x;
}
```

## Sortie console

```shell
dotnet run -c Release --filter *Fixed*
// BenchmarkDotNet affiche les résultats sans avertissements.
```

## Remarques importantes

- Utilisez `dotnet run -c Release` (pas Debug).
- N'exécutez pas de benchmarks dans une machine virtuelle ou en mode économie d'énergie.
- Laissez le benchmark s'exécuter sans être dérangé (fermez les navigateurs, etc.).

## Exemple d'utilisation dans le monde réel

**Benchmark d'un nouvel algorithme** – Exécutez les benchmarks sur une machine dédiée avec un plan d'alimentation haute performance, et comparez toujours avec une référence de base.  
Voir [bonnes pratiques BenchmarkDotNet](https://benchmarkdotnet.org/articles/guides/good-practices.html).

## Sections connexes

- [10.4.1 BenchmarkDotNet](/fr/chapter-10-memory-management-and-performance/10-4-1-benchmarkdotnet)
- [10.4.2 Attributs Benchmark et MemoryDiagnoser](/fr/chapter-10-memory-management-and-performance/10-4-2-benchmark-and-memorydiagnoser-attributes)
