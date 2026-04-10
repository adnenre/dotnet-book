---
title: CancellationToken
sidebar:
  order: 230
  label: 9.7.2 CancellationToken
---

**Contexte** : `CancellationToken` est passé aux méthodes asynchrones pour permettre l’annulation. La méthode peut vérifier `IsCancellationRequested` ou appeler `ThrowIfCancellationRequested()`.

```csharp
using System.Threading;
using System.Threading.Tasks;

public class Processor
{
    public async Task ProcessAsync(CancellationToken token)
    {
        for (int i = 0; i < 100; i++)
        {
            token.ThrowIfCancellationRequested();
            await Task.Delay(100, token);
        }
    }
}
```

## Jeton par défaut

Utilisez `CancellationToken.None` lorsque vous n’avez pas de jeton à passer.

```csharp
await processor.ProcessAsync(CancellationToken.None);
```

## Exemple d'utilisation dans le monde réel

**Requêtes EF Core** : `ToListAsync(cancellationToken)` accepte un jeton pour annuler la requête de base de données.

**Exemple** : [Annulation dans EF Core](https://docs.microsoft.com/en-us/ef/core/querying/async#cancellation)

## Sections connexes

- [9.7 Jetons d’annulation](/fr/chapter-9-asynchronous-programming-async-await/9-7-cancellation-tokens)
- [9.7.3 ThrowIfCancellationRequested](/fr/chapter-9-asynchronous-programming-async-await/9-7-3-throwifcancellationrequested)
