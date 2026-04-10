---
title: ConfigureAwait false
sidebar:
  order: 225
  label: 9.6 ConfigureAwait false
---

**Contexte** : `ConfigureAwait(false)` indique à l’attente de ne pas capturer le contexte de synchronisation actuel. Cela améliore les performances et évite les interblocages dans le code de bibliothèque.

## Pourquoi utiliser ConfigureAwait(false) ?

Par défaut, quand vous `await` une tâche, le compilateur capture le `SynchronizationContext` courant (par exemple, le thread UI dans WPF/WinForms). Une fois la tâche terminée, il tente de reprendre l’exécution sur ce contexte d’origine. Cela peut causer des interblocages si le contexte est bloqué (par exemple en appelant `.Result` sur une tâche). Cela ajoute également une surcharge inutile.

`ConfigureAwait(false)` désactive ce comportement. La continuation s’exécute sur un thread du pool, ce qui est plus rapide et plus sûr pour le code de bibliothèque.

## Exemple complet

```csharp
using System;
using System.Threading;
using System.Threading.Tasks;

public class Program
{
    public static async Task Main()
    {
        Console.WriteLine($"Thread principal : {Thread.CurrentThread.ManagedThreadId}");

        // Sans ConfigureAwait(false) – capture le contexte
        await WithoutConfigureAwait();

        // Avec ConfigureAwait(false) – ne capture pas le contexte
        await WithConfigureAwait();

        Console.WriteLine("Terminé. Appuyez sur une touche pour quitter.");
        Console.ReadKey();
    }

    static async Task WithoutConfigureAwait()
    {
        Console.WriteLine($"Avant await (sans) : {Thread.CurrentThread.ManagedThreadId}");
        await Task.Delay(100);
        Console.WriteLine($"Après await (sans) : {Thread.CurrentThread.ManagedThreadId}");
    }

    static async Task WithConfigureAwait()
    {
        Console.WriteLine($"Avant await (avec) : {Thread.CurrentThread.ManagedThreadId}");
        await Task.Delay(100).ConfigureAwait(false);
        Console.WriteLine($"Après await (avec) : {Thread.CurrentThread.ManagedThreadId}");
    }
}
```

## Quand l’utiliser

- **Code de bibliothèque** : Utilisez toujours `ConfigureAwait(false)` sauf si vous avez explicitement besoin de reprendre sur le contexte d’origine.
- **Code d’application** (UI, ASP.NET Core) : Dans ASP.NET Core, il n’y a pas de `SynchronizationContext`, donc c’est inutile mais sans danger. Dans les applications UI, évitez‑le si vous devez mettre à jour l’interface après l’await ; sinon, utilisez‑le pour la performance.

## Sections connexes

- [9.6.1 Éviter de capturer le SynchronizationContext d’origine](/fr/chapter-9-asynchronous-programming-async-await/9-6-1-avoid-capturing-original-synchronizationcontext)
- [9.6.2 Utilisation dans le code de bibliothèque](/fr/chapter-9-asynchronous-programming-async-await/9-6-2-use-in-library-code)
