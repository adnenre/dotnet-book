---
title: async et await
sidebar:
  order: 210
  label: 9.2 async et await
---

**Contexte** : Les mots‑clés `async` et `await` sont au cœur de la programmation asynchrone en C#. Ils permettent d’écrire du code non bloquant qui ressemble à du code synchrone.

## Comment cela fonctionne

- `async` marque une méthode comme asynchrone, permettant l’utilisation de `await`.
- `await` suspend la méthode jusqu’à ce que la tâche attendue se termine, sans bloquer le thread.

```csharp
using System;
using System.Threading.Tasks;

public class Example
{
    public async Task ProcessDataAsync()
    {
        Console.WriteLine("Début");
        await Task.Delay(1000); // attente non bloquante
        Console.WriteLine("Après le délai");
    }
}
```

## Exemple d'utilisation dans le monde réel

**Actions de contrôleur Web API** : Marquez les actions comme `async` et utilisez `await` pour les appels de base de données, les appels HTTP ou les E/S fichier.

**Exemple** : [Actions asynchrones dans ASP.NET Core](https://docs.microsoft.com/en-us/aspnet/core/performance/async-best-practices)

## Sections connexes

- [9.2.1 Marquer une méthode async](/fr/chapter-9-asynchronous-programming-async-await/9-2-1-marking-method-async)
- [9.2.2 await extrait le résultat](/fr/chapter-9-asynchronous-programming-async-await/9-2-2-await-unwraps-the-result)
- [9.2.3 Transformation par le compilateur en machine à états](/fr/chapter-9-asynchronous-programming-async-await/9-2-3-compiler-transformation-into-state-machine)
