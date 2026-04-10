---
title: Annulation coopérative
sidebar:
  order: 232
  label: 9.7.4 Annulation coopérative
---

**Contexte** : L’annulation dans .NET est coopérative : le code appelé doit vérifier périodiquement le jeton et réagir. Elle n’est ni forcée ni immédiate.

```csharp
using System.Threading;
using System.Threading.Tasks;

public class LongRunningTask
{
    public async Task RunAsync(CancellationToken token)
    {
        for (int i = 0; i < 1000000; i++)
        {
            if (token.IsCancellationRequested)
            {
                // Effectuer un nettoyage
                return;
            }
            await Task.Delay(1);
        }
    }
}
```

## Bonnes pratiques

- Vérifiez le jeton à des points logiques (début de boucle, après des opérations longues).
- Utilisez `ThrowIfCancellationRequested` pour une annulation simple.
- N’ignorez pas les demandes d’annulation.

## Exemple d'utilisation dans le monde réel

**Traitement de fichiers** : Annulez la lecture d’un gros fichier lorsque l’utilisateur abandonne l’opération.

**Exemple** : [Exemple d’annulation coopérative](https://docs.microsoft.com/en-us/dotnet/standard/parallel-programming/task-cancellation)

## Sections connexes

- [9.7 Jetons d’annulation](/fr/chapter-9-asynchronous-programming-async-await/9-7-cancellation-tokens)
- [9.7.3 ThrowIfCancellationRequested](/fr/chapter-9-asynchronous-programming-async-await/9-7-3-throwifcancellationrequested)
