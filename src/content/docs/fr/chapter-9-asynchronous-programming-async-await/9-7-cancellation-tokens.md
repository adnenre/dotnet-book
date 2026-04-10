---
title: Jetons d’annulation
sidebar:
  order: 228
  label: 9.7 Jetons d’annulation
---

**Contexte** : Les jetons d’annulation fournissent un moyen standard d’annuler des opérations asynchrones. Ils sont coopératifs : l’opération doit vérifier périodiquement le jeton et réagir.

## Exemple complet

```csharp
using System;
using System.Threading;
using System.Threading.Tasks;

public class Program
{
    public static async Task Main()
    {
        using var cts = new CancellationTokenSource();

        // Délai d’expiration de 3 secondes
        cts.CancelAfter(3000);

        Console.WriteLine("Démarrage d’une longue opération. Appuyez sur 'c' pour annuler, ou attendez le délai.");

        // Démarrer une tâche pour écouter une touche
        _ = Task.Run(() =>
        {
            if (Console.ReadKey(true).KeyChar == 'c')
            {
                Console.WriteLine("\nAnnulation manuelle demandée.");
                cts.Cancel();
            }
        });

        try
        {
            await LongRunningOperationAsync(cts.Token);
            Console.WriteLine("Opération terminée avec succès.");
        }
        catch (OperationCanceledException)
        {
            Console.WriteLine("Opération annulée.");
        }
    }

    static async Task LongRunningOperationAsync(CancellationToken token)
    {
        for (int i = 0; i < 100; i++)
        {
            // Vérifier l’annulation à chaque itération
            token.ThrowIfCancellationRequested();

            Console.WriteLine($"Étape {i + 1}/100");
            await Task.Delay(200, token); // Passer le jeton à Delay également
        }
    }
}
```

## Explication

- `CancellationTokenSource` crée un jeton et peut demander l’annulation.
- `CancelAfter(3000)` annule automatiquement après 3 secondes.
- La boucle vérifie `token.ThrowIfCancellationRequested()` ; si annulé, une `OperationCanceledException` est levée.
- `Task.Delay` accepte aussi un jeton, permettant de l’annuler pendant l’attente.
- L’annulation manuelle est déclenchée en appuyant sur 'c'.

## Sections connexes

- [9.7.1 CancellationTokenSource](/fr/chapter-9-asynchronous-programming-async-await/9-7-1-cancellationtokensource)
- [9.7.2 CancellationToken](/fr/chapter-9-asynchronous-programming-async-await/9-7-2-cancellationtoken)
- [9.7.3 ThrowIfCancellationRequested](/fr/chapter-9-asynchronous-programming-async-await/9-7-3-throwifcancellationrequested)
- [9.7.4 Annulation coopérative](/fr/chapter-9-asynchronous-programming-async-await/9-7-4-cooperative-cancellation)
