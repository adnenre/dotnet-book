---
title: await using et IAsyncDisposable
sidebar:
  order: 310
  label: 10.2.4 await using et IAsyncDisposable
---

**Contexte** : `IAsyncDisposable` est l'équivalent asynchrone de `IDisposable`. Il définit `DisposeAsync()` qui retourne `ValueTask`. L'instruction `await using` (C# 8.0+) vous permet de libérer des ressources de manière asynchrone, utile pour les classes qui effectuent un nettoyage asynchrone (ex. fermeture de flux réseau, vidage de tampons fichier).

## Exemple d'utilisation

```csharp
using System;
using System.IO;
using System.Threading.Tasks;

public class AsyncResource : IAsyncDisposable
{
    private FileStream _stream;

    public AsyncResource(string path)
    {
        _stream = new FileStream(path, FileMode.OpenOrCreate);
    }

    public async ValueTask DisposeAsync()
    {
        if (_stream != null)
        {
            await _stream.FlushAsync();
            await _stream.DisposeAsync();
        }
        GC.SuppressFinalize(this);
    }

    // Finaliseur optionnel si nécessaire
    ~AsyncResource() { }
}

public class AsyncUsingDemo
{
    public static async Task UseAsyncResourceAsync()
    {
        await using (var resource = new AsyncResource("test.txt"))
        {
            // Utiliser la ressource
        } // DisposeAsync() est attendu ici
    }
}
```

## Sortie console

```shell
// Pas de sortie ; la libération asynchrone se fait en arrière‑plan.
```

## Remarques importantes

- `await using` nécessite que la ressource implémente `IAsyncDisposable`.
- Si `IDisposable` et `IAsyncDisposable` sont tous deux implémentés, le compilateur préfère `await using` pour la libération asynchrone.

## Exemple d'utilisation dans le monde réel

**Lecteur de flux réseau** – `HttpResponseMessage` implémente `IAsyncDisposable`. Utiliser `await using` garantit que le flux de réponse est libéré de manière asynchrone, rendant la connexion au pool.  
Voir [documentation .NET sur IAsyncDisposable](https://docs.microsoft.com/fr-fr/dotnet/standard/garbage-collection/implementing-disposeasync).

## Sections connexes

- [10.2.3 using statement](/fr/chapter-10-memory-management-and-performance/10-2-3-using-statement)
- [10.2 IDisposable](/fr/chapter-10-memory-management-and-performance/10-2-idisposable)
