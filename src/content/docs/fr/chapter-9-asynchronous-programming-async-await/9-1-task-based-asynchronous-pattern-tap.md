---
title: Task based Asynchronous Pattern TAP
sidebar:
  order: 206
  label: 9.1 Task based Asynchronous Pattern TAP
---

**Contexte** : Le modèle asynchrone basé sur les tâches (TAP) est le modèle asynchrone recommandé dans .NET. Il utilise `Task` et `Task<T>` pour représenter des opérations en cours.

## Introduction à async/await

La programmation asynchrone permet à votre application de continuer à exécuter d’autres travaux pendant qu’elle attend des opérations longues (E/S, appels réseau, requêtes de base de données). En C#, les mots‑clés `async` et `await` rendent l’écriture de code asynchrone presque aussi simple que le code synchrone, sans bloquer les threads.

**Pourquoi utiliser async/await ?**

- **Réactivité** : Les applications UI restent réactives pendant les opérations longues.
- **Scalabilité** : Les applications serveur traitent plus de requêtes en libérant les threads pendant les E/S.
- **Simplicité** : Écrivez du code asynchrone qui ressemble à du code synchrone.

**Comment commencer** : Ajoutez `async` à une méthode, puis utilisez `await` sur des tâches. La méthode doit retourner `Task`, `Task<T>` ou `void` (uniquement pour les gestionnaires d’événements).

```csharp
// Version synchrone (bloque le thread)
string data = DownloadString(url);

// Version asynchrone (ne bloque pas)
string data = await DownloadStringAsync(url);
```

## Modèle TAP

Une méthode qui suit le modèle TAP retourne `Task` ou `Task<TResult>` et est généralement nommée avec le suffixe `Async`.

```csharp
public Task<string> DownloadStringAsync(string url);
public Task<int> GetUserCountAsync();
```

## Exemple d'utilisation dans le monde réel

**Contrôleurs ASP.NET Core** : Toutes les actions de contrôleur peuvent être asynchrones, améliorant la scalabilité en ne bloquant pas les threads pendant les appels de base de données.

**Documentation officielle** :

- [Programmation asynchrone avec async et await](https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/concepts/async/)
- [Task‑based Asynchronous Pattern (TAP)](https://docs.microsoft.com/en-us/dotnet/standard/asynchronous-programming-patterns/task-based-asynchronous-pattern-tap)

## Sections connexes

- [9.1.1 Task (sans résultat)](/fr/chapter-9-asynchronous-programming-async-await/9-1-1-task-no-result)
- [9.1.2 Task<T> (avec résultat)](/fr/chapter-9-asynchronous-programming-async-await/9-1-2-task-t-result)
- [9.1.3 ValueTask et ValueTask<T> pour la performance](/fr/chapter-9-asynchronous-programming-async-await/9-1-3-valuetask-valuetask-t-for-performance)
