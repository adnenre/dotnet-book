---
title: Optimisation des performances pour la journalisation
sidebar:
  order: 708
  label: 14.4.1 Optimisation des performances pour la journalisation
---

**Contexte** : Les frameworks de journalisation vérifient souvent si un niveau de log est activé avant de construire le message. Sans gestionnaires de chaînes interpolées, vous écririez `if (logger.IsEnabled(LogLevel.Debug)) logger.LogDebug($"Utilisateur {id} connecté");` qui évalue quand même la chaîne interpolée (en l'allouant). Avec les gestionnaires, le code de formatage n'est exécuté que si le niveau de log est activé, économisant CPU et mémoire.

## Exemple d'utilisation

```csharp
using Microsoft.Extensions.Logging;

public class MonService
{
    private readonly ILogger<MonService> _logger;
    public MonService(ILogger<MonService> logger) => _logger = logger;

    public void Traiter(int userId)
    {
        // La chaîne interpolée est traitée paresseusement ; pas de formatage si Debug désactivé.
        _logger.LogDebug($"Traitement de l'utilisateur {userId}");
    }
}
```

## Sortie console

```shell
// Si le niveau Debug est désactivé, la chaîne "Traitement de l'utilisateur 42" n'est jamais formatée.
```

## Remarques importantes

- La journalisation moderne .NET utilise `LoggerMessage.Define` ou des générateurs source pour encore meilleures performances.
- Les gestionnaires évitent les allocations lorsque la journalisation est désactivée.
- Cette optimisation est automatique lors de l'utilisation de `ILogger.Log` avec des chaînes interpolées.

## Exemple d'utilisation dans le monde réel

**API Web à haut débit** – Utilisez la journalisation paresseuse avec des gestionnaires de chaînes interpolées pour réduire la pression sur le GC.  
Voir [documentation .NET sur la journalisation haute performance](https://docs.microsoft.com/fr-fr/dotnet/core/extensions/high-performance-logging).

## Sections connexes

- [14.4 Gestionnaires de chaînes interpolées](/fr/chapter-14-modern-csharp-features-for-backend/14-4-interpolated-string-handlers)
- [14.4.2 Structure InterpolatedStringHandler](/fr/chapter-14-modern-csharp-features-for-backend/14-4-2-interpolatedstringhandler-struct)
