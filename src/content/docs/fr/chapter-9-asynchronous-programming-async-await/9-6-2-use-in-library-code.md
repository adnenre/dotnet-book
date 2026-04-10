---
title: Utilisation dans le code de bibliothèque
sidebar:
  order: 227
  label: 9.6.2 Utilisation dans le code de bibliothèque
---

**Contexte** : Le code de bibliothèque doit utiliser `ConfigureAwait(false)` pour toutes les instructions `await` sauf s’il a explicitement besoin de reprendre sur le contexte d’origine.

```csharp
using System.Net.Http;
using System.Threading.Tasks;

public class ApiClient
{
    private readonly HttpClient _httpClient = new HttpClient();

    public async Task<string> ReadDataAsync(string url)
    {
        // ConfigureAwait(false) pour tous les awaits dans le code de bibliothèque
        string content = await _httpClient.GetStringAsync(url).ConfigureAwait(false);
        return await ProcessAsync(content).ConfigureAwait(false);
    }

    private async Task<string> ProcessAsync(string data)
    {
        await Task.Delay(10).ConfigureAwait(false);
        return data.ToUpper();
    }
}
```

## Avantages dans les bibliothèques

- Évite les interblocages lorsque la bibliothèque est utilisée depuis des applications UI.
- Améliore les performances en réduisant les changements de contexte inutiles.

## Exemple d'utilisation dans le monde réel

**Paquets NuGet** : Les bibliothèques bien écrites comme `Newtonsoft.Json` utilisent `ConfigureAwait(false)` en interne.

**Exemple** : [Recommandations pour le runtime .NET](https://docs.microsoft.com/en-us/dotnet/standard/async-guidelines#configureawait-false)

## Sections connexes

- [9.6 ConfigureAwait false](/fr/chapter-9-asynchronous-programming-async-await/9-6-configureawait-false)
- [9.6.1 Éviter de capturer le SynchronizationContext d’origine](/fr/chapter-9-asynchronous-programming-async-await/9-6-1-avoid-capturing-original-synchronizationcontext)
