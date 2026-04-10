---
title: ValueTask et ValueTask<T> pour la performance
sidebar:
  order: 209
  label: 9.1.3 ValueTask et ValueTask<T> pour la performance
---

**Contexte** : `ValueTask` et `ValueTask<T>` sont des structures qui peuvent réduire les allocations sur le tas lorsque le résultat est souvent disponible de manière synchrone.

```csharp
using System.Collections.Generic;
using System.Threading.Tasks;

public class CacheExample
{
    private Dictionary<string, int> cache = new Dictionary<string, int>();

    public async ValueTask<int> GetCachedValueAsync(string key)
    {
        if (cache.TryGetValue(key, out int value))
            return value; // chemin synchrone, pas d'allocation

        int result = await FetchFromDatabaseAsync(key);
        cache[key] = result;
        return result;
    }

    private async Task<int> FetchFromDatabaseAsync(string key)
    {
        await Task.Delay(100); // simule un appel base de données
        return 42;
    }
}
```

## Quand utiliser ValueTask

- Quand la méthode se termine souvent de manière synchrone (résultats en cache).
- Dans les bibliothèques haute performance pour éviter des allocations inutiles.
- Pour les chemins chauds où vous mesurez un gain de performance.

## Exemple d'utilisation dans le monde réel

**Cache mémoire** : Une méthode qui lit dans un cache en mémoire (rapide, synchrone) et retombe sur un appel asynchrone à la base de données.

**Exemple** : [Microsoft.Extensions.Caching.Memory](https://docs.microsoft.com/en-us/dotnet/api/microsoft.extensions.caching.memory) utilise `ValueTask` pour les opérations de cache.

## Sections connexes

- [9.1 Task based Asynchronous Pattern TAP](/fr/chapter-9-asynchronous-programming-async-await/9-1-task-based-asynchronous-pattern-tap)
- [9.2 async et await](/fr/chapter-9-asynchronous-programming-async-await/9-2-async-and-await)
