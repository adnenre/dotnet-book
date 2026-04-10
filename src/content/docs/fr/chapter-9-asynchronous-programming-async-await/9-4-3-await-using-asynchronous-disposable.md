---
title: await foreach
sidebar:
  order: 220
  label: 9.4.2 await foreach
---

**Contexte** : `await foreach` itère sur un `IAsyncEnumerable<T>` de manière asynchrone, attendant chaque élément avant d’exécuter le corps de la boucle.

```csharp
using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;

public class Example
{
    public static async Task Main()
    {
        await foreach (var item in GetDataAsync())
        {
            Console.WriteLine(item);
        }
    }

    private static async IAsyncEnumerable<int> GetDataAsync()
    {
        for (int i = 0; i < 5; i++)
        {
            await Task.Delay(100);
            yield return i;
        }
    }
}
```

## Annulation

Vous pouvez passer un `CancellationToken` à la méthode `GetAsyncEnumerator`.

```csharp
var cts = new CancellationTokenSource();
await foreach (var item in GetDataAsync().WithCancellation(cts.Token))
{
    // ...
}
```

## Exemple d'utilisation dans le monde réel

**Traitement de réponses d’API paginées** : Chaque page est récupérée de manière asynchrone, et vous utilisez `await foreach` pour itérer sur les pages.

**Exemple** : [Documentation sur les flux asynchrones .NET](https://docs.microsoft.com/en-us/dotnet/csharp/whats-new/tutorials/generate-consume-asynchronous-stream)

## Sections connexes

- [9.4 Flux asynchrones](/fr/chapter-9-asynchronous-programming-async-await/9-4-asynchronous-streams)
- [9.4.1 IAsyncEnumerable<T>](/fr/chapter-9-asynchronous-programming-async-await/9-4-1-iasyncenumerable-t)
