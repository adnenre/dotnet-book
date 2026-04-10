---
title: Transformation par le compilateur en machine à états
sidebar:
  order: 213
  label: 9.2.3 Transformation par le compilateur en machine à états
---

**Contexte** : Le compilateur C# transforme les méthodes `async` en une machine à états. Cela permet à la méthode de suspendre et de reprendre aux points `await` sans bloquer.

```csharp
using System;
using System.Threading.Tasks;

public class Example
{
    public async Task ExampleAsync()
    {
        Console.WriteLine("Début");
        await Task.Delay(1000);
        Console.WriteLine("Reprise");
    }
}
```

Le compilateur génère une structure avec des états (0 = avant le premier await, 1 = après, etc.), conservant les variables locales.

## Pourquoi c’est important

- Pas de magie avec les threads : la méthode s’exécute sur le contexte de synchronisation d’origine après l’await.
- Efficace : aucun thread supplémentaire n’est créé pour attendre.

## Exemple d'utilisation dans le monde réel

**Applications UI** : Dans WPF ou WinForms, `await` revient automatiquement sur le thread UI (sauf si vous utilisez `ConfigureAwait(false)`).

**Exemple** : [Async en profondeur](https://docs.microsoft.com/en-us/dotnet/csharp/async)

## Sections connexes

- [9.2 async et await](/fr/chapter-9-asynchronous-programming-async-await/9-2-async-and-await)
- [9.6 ConfigureAwait false](/fr/chapter-9-asynchronous-programming-async-await/9-6-configureawait-false)
