---
title: Éviter de capturer le SynchronizationContext d’origine
sidebar:
  order: 226
  label: 9.6.1 Éviter de capturer le SynchronizationContext d’origine
---

**Contexte** : Par défaut, `await` capture le `SynchronizationContext` actuel et y reprend l’exécution. `ConfigureAwait(false)` évite cela, ce qui peut prévenir les interblocages et améliorer les performances.

```csharp
using System.Threading.Tasks;

public class LibraryCode
{
    public async Task<string> GetDataAsync()
    {
        // Dans le code de bibliothèque, nous n’avons pas besoin de revenir au contexte d’origine
        string result = await FetchAsync().ConfigureAwait(false);
        return result;
    }

    private async Task<string> FetchAsync()
    {
        await Task.Delay(100);
        return "données";
    }
}
```

## Quand l’utiliser

- Dans le code de bibliothèque qui n’a pas besoin de revenir au contexte d’origine.
- Pour éviter les interblocages lorsque `.Result` ou `.Wait()` sont utilisés (bien que ceux‑ci devraient être évités).

## Exemple d'utilisation dans le monde réel

**ASP.NET Core** : Dans ASP.NET Core, il n’y a pas de `SynchronizationContext`, donc `ConfigureAwait(false)` n’est pas nécessaire mais ne fait pas de mal.

**Exemple** : [FAQ ConfigureAwait](https://devblogs.microsoft.com/dotnet/configureawait-faq/)

## Sections connexes

- [9.6 ConfigureAwait false](/fr/chapter-9-asynchronous-programming-async-await/9-6-configureawait-false)
- [9.6.2 Utilisation dans le code de bibliothèque](/fr/chapter-9-asynchronous-programming-async-await/9-6-2-use-in-library-code)
