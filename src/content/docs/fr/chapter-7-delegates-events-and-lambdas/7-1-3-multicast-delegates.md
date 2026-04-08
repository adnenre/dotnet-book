---
title: Délégués multicast
sidebar:
  order: 166
  label: 7.1.3 Délégués multicast
---

**Contexte** : Les délégués peuvent contenir plusieurs méthodes via les opérateurs `+` et `-`. L’invocation d’un délégué multicast appelle toutes les méthodes dans l’ordre.

```csharp
public delegate void Notify(string message);

public static void LogToFile(string msg) => Console.WriteLine($"Fichier : {msg}");
public static void LogToConsole(string msg) => Console.WriteLine($"Console : {msg}");

Notify logger = LogToFile;
logger += LogToConsole; // ajoute la deuxième méthode

logger("Hello"); // les deux méthodes sont appelées
```

## Suppression de méthodes

```csharp
logger -= LogToFile; // supprime la première méthode
logger("Seulement console");
```

## Valeurs de retour

Pour les délégués multicast avec un retour non void, seule la valeur de la dernière méthode est conservée. Utilisez `GetInvocationList()` pour traiter toutes.

```csharp
foreach (Notify n in logger.GetInvocationList())
{
    n("Traitement");
}
```

## Exemple d'utilisation dans le monde réel

**Notifications d’événements** : Plusieurs abonnés à un événement sont stockés comme un délégué multicast. Lever l’événement notifie tous les abonnés.

**Exemple** : Dans [ASP.NET Core](https://docs.microsoft.com/en-us/aspnet/core/fundamentals/events), les événements `IApplicationLifetime` utilisent des délégués multicast.

## Sections connexes

- [7.1 Délégués](/fr/chapter-7-delegates-events-and-lambdas/7-1-delegates)
- [7.2 Événements](/fr/chapter-7-delegates-events-and-lambdas/7-2-events)
