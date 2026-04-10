---
title: ThrowIfCancellationRequested
sidebar:
  order: 231
  label: 9.7.3 ThrowIfCancellationRequested
---

**Contexte** : `ThrowIfCancellationRequested` vérifie si le jeton a été annulé et, le cas échéant, lève une `OperationCanceledException`.

```csharp
using System.Threading;

public class Example
{
    public void Work(CancellationToken token)
    {
        token.ThrowIfCancellationRequested(); // lève si annulé
        // Plus de travail...
    }
}
```

## Vérification manuelle

```csharp
if (token.IsCancellationRequested)
{
    // nettoyage avant de lever
    token.ThrowIfCancellationRequested();
}
```

## Exemple d'utilisation dans le monde réel

**UI réactive** : Annulez une opération longue lorsque l’utilisateur clique sur un bouton "Annuler".

**Exemple** : [Annulation dans les threads managés](https://docs.microsoft.com/en-us/dotnet/standard/threading/cancellation-in-managed-threads)

## Sections connexes

- [9.7 Jetons d’annulation](/fr/chapter-9-asynchronous-programming-async-await/9-7-cancellation-tokens)
- [9.7.2 CancellationToken](/fr/chapter-9-asynchronous-programming-async-await/9-7-2-cancellationtoken)
