---
title: Flux asynchrones
sidebar:
  order: 218
  label: 9.4 Flux asynchrones
---

**Contexte** : Les flux asynchrones (C# 8.0) permettent de produire et de consommer des séquences de données de manière asynchrone en utilisant `IAsyncEnumerable<T>` et `await foreach`.

```csharp
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

public class DataProducer
{
    public async IAsyncEnumerable<int> GetDataAsync()
    {
        for (int i = 0; i < 10; i++)
        {
            await Task.Delay(100);
            yield return i;
        }
    }
}

// Consommateur
public class Program
{
    public static async Task Main()
    {
        var producer = new DataProducer();
        await foreach (var item in producer.GetDataAsync())
        {
            Console.WriteLine(item);
        }
    }
}
```

## Exemple d'utilisation dans le monde réel

**Lecture de gros fichiers ligne par ligne** : Traitez chaque ligne de manière asynchrone sans charger tout le fichier en mémoire.

**Exemple** : [System.IO.Stream](https://docs.microsoft.com/en-us/dotnet/standard/io/async-file-io) peut être encapsulé dans un flux asynchrone.

## Sections connexes

- [9.4.1 IAsyncEnumerable<T>](/fr/chapter-9-asynchronous-programming-async-await/9-4-1-iasyncenumerable-t)
- [9.4.2 await foreach](/fr/chapter-9-asynchronous-programming-async-await/9-4-2-await-foreach)
- [9.4.3 await using pour disposables asynchrones](/fr/chapter-9-asynchronous-programming-async-await/9-4-3-await-using-asynchronous-disposable)
