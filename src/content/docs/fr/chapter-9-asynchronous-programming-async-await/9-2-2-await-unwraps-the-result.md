---
title: await extrait le résultat
sidebar:
  order: 212
  label: 9.2.2 await extrait le résultat
---

**Contexte** : `await` extrait le résultat d’une `Task<T>` ou `ValueTask<T>`, retournant la valeur sous‑jacente. Pour `Task`, il attend la fin sans retourner de valeur.

```csharp
using System.Threading.Tasks;

public class Example
{
    public async Task<int> GetNumberAsync() => 42;

    public async Task UseAsync()
    {
        Task<int> task = GetNumberAsync();
        int result = await task; // extrait l'entier
        // result == 42
    }
}
```

## Sans `await`

Vous devriez vérifier `IsCompleted`, utiliser des continuations, ou bloquer avec `.Result`.

```csharp
Task<int> task = GetNumberAsync();
int result = task.Result; // bloque, dangereux
```

## Exemple d'utilisation dans le monde réel

**Enchaînement d’appels asynchrones** : `await` rend naturel l’enchaînement séquentiel.

```csharp
var user = await GetUserAsync();
var orders = await GetOrdersAsync(user.Id);
```

## Sections connexes

- [9.2 async et await](/fr/chapter-9-asynchronous-programming-async-await/9-2-async-and-await)
- [9.2.3 Transformation par le compilateur en machine à états](/fr/chapter-9-asynchronous-programming-async-await/9-2-3-compiler-transformation-into-state-machine)
