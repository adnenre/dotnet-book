---
title: IAsyncEnumerable<T>
sidebar:
  order: 219
  label: 9.4.1 IAsyncEnumerable<T>
---

**Contexte** : `IAsyncEnumerable<T>` est la version asynchrone de `IEnumerable<T>`. Elle permet l’itération asynchrone avec `await foreach`.

```csharp
using System;
using System.Collections.Generic;
using System.IO;
using System.Threading.Tasks;

public class FileReader
{
    public async IAsyncEnumerable<string> ReadLinesAsync(string filePath)
    {
        using var reader = new StreamReader(filePath);
        string line;
        while ((line = await reader.ReadLineAsync()) != null)
        {
            yield return line;
        }
    }
}
```

## Avantages

- Pas besoin de mettre toutes les données en mémoire tampon.
- Chaque élément peut être produit de manière asynchrone.
- Fonctionne avec `await foreach`.

## Exemple d'utilisation dans le monde réel

**Flux de base de données** : Dans EF Core, `AsAsyncEnumerable()` retourne `IAsyncEnumerable<T>` pour le flux des résultats de requête.

**Exemple** : [Flux asynchrones EF Core](https://docs.microsoft.com/en-us/ef/core/querying/async#async-streaming)

## Sections connexes

- [9.4 Flux asynchrones](/fr/chapter-9-asynchronous-programming-async-await/9-4-asynchronous-streams)
- [9.4.2 await foreach](/fr/chapter-9-asynchronous-programming-async-await/9-4-2-await-foreach)
