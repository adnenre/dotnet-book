---
title: Task<T> (avec résultat)
sidebar:
  order: 208
  label: 9.1.2 Task<T> (avec résultat)
---

**Contexte** : `Task<TResult>` représente une opération asynchrone qui retourne une valeur de type `TResult`.

```csharp
using System;
using System.Net.Http;
using System.Threading.Tasks;

public class Example
{
    public async Task<string> FetchDataAsync(string url)
    {
        using HttpClient client = new HttpClient();
        return await client.GetStringAsync(url);
    }
}

// Utilisation
// string data = await new Example().FetchDataAsync("https://api.example.com/data");
// Console.WriteLine(data);
```

## Accès au résultat

- Utilisez `await` pour obtenir le résultat de manière asynchrone.
- L’utilisation de `.Result` ou `.Wait()` bloque le thread et peut provoquer des interblocages.

## Exemple d'utilisation dans le monde réel

**Requêtes de base de données avec EF Core** : `FirstOrDefaultAsync()` retourne `Task<T>`, et `ToListAsync()` retourne `Task<List<T>>`.

**Exemple** : [Méthodes asynchrones d’EF Core](https://docs.microsoft.com/en-us/ef/core/querying/async)

## Sections connexes

- [9.1 Task based Asynchronous Pattern TAP](/fr/chapter-9-asynchronous-programming-async-await/9-1-task-based-asynchronous-pattern-tap)
- [9.1.1 Task (sans résultat)](/fr/chapter-9-asynchronous-programming-async-await/9-1-1-task-no-result)
