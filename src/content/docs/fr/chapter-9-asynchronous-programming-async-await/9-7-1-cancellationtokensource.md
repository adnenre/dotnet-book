---
title: CancellationTokenSource
sidebar:
  order: 229
  label: 9.7.1 CancellationTokenSource
---

**Contexte** : `CancellationTokenSource` est utilisé pour créer un `CancellationToken` et pour demander l’annulation en appelant `Cancel()`.

```csharp
using System;
using System.Threading;
using System.Threading.Tasks;

public class TimeoutExample
{
    public static async Task Main()
    {
        using var cts = new CancellationTokenSource();
        cts.CancelAfter(5000); // annulation automatique après 5 secondes

        // Demande d’annulation manuelle (par exemple, appui utilisateur)
        // cts.Cancel();

        try
        {
            await LongRunningOperationAsync(cts.Token);
        }
        catch (OperationCanceledException)
        {
            Console.WriteLine("Opération annulée");
        }
    }

    static async Task LongRunningOperationAsync(CancellationToken token)
    {
        for (int i = 0; i < 100; i++)
        {
            token.ThrowIfCancellationRequested();
            await Task.Delay(100);
        }
    }
}
```

## Obtention d’un jeton

```csharp
CancellationToken token = cts.Token;
```

## Exemple d'utilisation dans le monde réel

**Délai d’expiration pour les requêtes HTTP** : Utilisez `CancellationTokenSource` avec `CancelAfter` pour définir un délai.

**Exemple** : [HttpClient avec annulation](<https://docs.microsoft.com/en-us/dotnet/api/system.net.http.httpclient.sendasync#system-net-http-httpclient-sendasync(system-net-http-httprequestmessage-system-threading-cancellationtoken)>)

## Sections connexes

- [9.7 Jetons d’annulation](/fr/chapter-9-asynchronous-programming-async-await/9-7-cancellation-tokens)
- [9.7.2 CancellationToken](/fr/chapter-9-asynchronous-programming-async-await/9-7-2-cancellationtoken)
