---
title: Task pour void async
sidebar:
  order: 215
  label: 9.3.1 Task pour void async
---

**Contexte** : Pour les méthodes asynchrones qui ne retournent pas de valeur, retournez `Task`. Cela permet à l’appelant d’attendre l’opération.

```csharp
using System.IO;
using System.Threading.Tasks;

public class DataService
{
    public async Task SaveDataAsync(string data)
    {
        await File.WriteAllTextAsync("file.txt", data);
    }
}

// L’appelant peut attendre
// await new DataService().SaveDataAsync("contenu");
```

## Pourquoi pas `void` ?

Retourner `Task` permet à l’appelant :

- D’attendre la fin.
- De gérer les exceptions (les exceptions sont capturées dans la tâche).
- De composer avec d’autres opérations asynchrones.

## Exemple d'utilisation dans le monde réel

**Gestionnaires d’événements dans l’UI** : Utilisez `async void` pour les événements, mais pour toutes les autres méthodes asynchrones sans valeur de retour, utilisez `Task`.

**Exemple** : [Recommandations async](https://docs.microsoft.com/en-us/dotnet/standard/async-guidelines)

## Sections connexes

- [9.3 Types de retour des méthodes async](/fr/chapter-9-asynchronous-programming-async-await/9-3-return-types-of-async-methods)
- [9.3.3 void uniquement pour les gestionnaires d’événements (à éviter)](/fr/chapter-9-asynchronous-programming-async-await/9-3-3-void-only-for-event-handlers-avoid)
