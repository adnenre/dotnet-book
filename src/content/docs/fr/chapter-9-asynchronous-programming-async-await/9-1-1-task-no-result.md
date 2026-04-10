---
title: Task (sans résultat)
sidebar:
  order: 207
  label: 9.1.1 Task (sans résultat)
---

**Contexte** : `Task` représente une opération asynchrone qui ne retourne pas de valeur. C’est l’équivalent de `void` pour les méthodes asynchrones.

```csharp
using System;
using System.IO;
using System.Net.Http;
using System.Threading.Tasks;

public class Example
{
    public async Task DownloadFileAsync(string url)
    {
        using HttpClient client = new HttpClient();
        string content = await client.GetStringAsync(url);
        await File.WriteAllTextAsync("file.txt", content);
    }
}

// Appel de la méthode
// await new Example().DownloadFileAsync("https://example.com/data");
```

## Remarques importantes

- La méthode retourne quand même un objet `Task` qui peut être attendu.
- Les exceptions levées à l’intérieur de la méthode sont capturées dans la `Task` retournée.

## Exemple d'utilisation dans le monde réel

**Journalisation asynchrone** : Écrire des entrées de journal dans un fichier ou une base de données sans bloquer le flux principal.

**Exemple** : Dans un [middleware ASP.NET Core](https://docs.microsoft.com/en-us/aspnet/core/fundamentals/middleware), vous attendez souvent `next()` qui retourne une `Task`.

## Sections connexes

- [9.1 Task based Asynchronous Pattern TAP](/fr/chapter-9-asynchronous-programming-async-await/9-1-task-based-asynchronous-pattern-tap)
- [9.1.2 Task<T> (avec résultat)](/fr/chapter-9-asynchronous-programming-async-await/9-1-2-task-t-result)
