---
title: Les exceptions ne peuvent pas être capturées
sidebar:
  order: 223
  label: 9.5.1 Les exceptions ne peuvent pas être capturées
---

**Contexte** : Les exceptions levées par une méthode `async void` ne peuvent pas être capturées par l’appelant ; elles font planter le processus ou terminer l’application.

```csharp
using System;
using System.Threading.Tasks;

public class BadExample
{
    public static void Main()
    {
        try
        {
            BadAsyncVoid();
        }
        catch (Exception)
        {
            Console.WriteLine("Ceci ne sera jamais exécuté");
        }
        Console.ReadLine(); // le processus peut planter avant
    }

    static async void BadAsyncVoid()
    {
        throw new InvalidOperationException("Crash");
    }
}
```

## Solution

Retournez `Task` au lieu de `void`.

```csharp
async Task GoodAsync()
{
    throw new InvalidOperationException("Sera capturée");
}
```

## Exemple d'utilisation dans le monde réel

**À éviter dans le code de bibliothèque** : N’exposez jamais `async void` dans une API publique. Utilisez `async void` uniquement pour les gestionnaires d’événements UI où le framework gère les exceptions.

**Exemple** : [Recommandations async – éviter async void](https://docs.microsoft.com/en-us/archive/msdn-magazine/2013/march/async-await-best-practices-in-asynchronous-programming#avoid-async-void)

## Sections connexes

- [9.5 Éviter async void](/fr/chapter-9-asynchronous-programming-async-await/9-5-avoiding-async-void)
- [9.5.2 Difficile à tester](/fr/chapter-9-asynchronous-programming-async-await/9-5-2-hard-to-test)
