---
title: Marquer une méthode async
sidebar:
  order: 211
  label: 9.2.1 Marquer une méthode async
---

**Contexte** : Ajoutez le modificateur `async` à toute méthode qui utilise `await`. La méthode doit retourner `Task`, `Task<T>`, `ValueTask`, `ValueTask<T>` ou `void`.

```csharp
using System.Threading.Tasks;

public class Example
{
    public async Task DoWorkAsync()
    {
        await Task.Delay(100);
    }

    public async Task<int> GetNumberAsync()
    {
        await Task.Delay(100);
        return 42;
    }
}
```

## Règles

- Les méthodes `async` peuvent contenir `await` à l’intérieur.
- Le compilateur transforme la méthode en machine à états.
- Les noms de paramètres ne peuvent pas être `await` (sauf échappement avec `@await`).

## Exemple d'utilisation dans le monde réel

**Application console** : Marquez `Main` comme `async Task` (C# 7.1+).

```csharp
using System.Threading.Tasks;

class Program
{
    static async Task Main(string[] args)
    {
        await DownloadAsync();
    }

    static async Task DownloadAsync() => await Task.Delay(100);
}
```

**Exemple** : [async Main en C#](https://docs.microsoft.com/en-us/dotnet/csharp/fundamentals/program-structure/main-command-line#async-main-return-types)

## Sections connexes

- [9.2 async et await](/fr/chapter-9-asynchronous-programming-async-await/9-2-async-and-await)
- [9.2.2 await extrait le résultat](/fr/chapter-9-asynchronous-programming-async-await/9-2-2-await-unwraps-the-result)
