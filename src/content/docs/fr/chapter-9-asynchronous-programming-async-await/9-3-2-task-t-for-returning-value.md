---
title: Task<T> pour retourner une valeur
sidebar:
  order: 216
  label: 9.3.2 Task<T> pour retourner une valeur
---

**Contexte** : Quand une méthode asynchrone doit retourner une valeur, utilisez `Task<T>`. L’expression `await` donne la valeur de type `T`.

```csharp
using System.Data.SqlClient;
using System.Threading.Tasks;
using Dapper;

public class UserRepository
{
    private string connectionString = "Server=.;Database=MyDb;Trusted_Connection=true;";

    public async Task<int> GetUserCountAsync()
    {
        using var connection = new SqlConnection(connectionString);
        return await connection.QueryFirstAsync<int>("SELECT COUNT(*) FROM Users");
    }
}

// Utilisation
// int count = await new UserRepository().GetUserCountAsync();
```

## Bonnes pratiques

- Nommez la méthode avec le suffixe `Async`.
- Évitez d’utiliser `.Result` ou `.Wait()` sur la tâche retournée.

## Exemple d'utilisation dans le monde réel

**Appels API** : `HttpClient.GetStringAsync` retourne `Task<string>`. `JsonSerializer.DeserializeAsync` retourne `Task<T>`.

**Exemple** : [Documentation HttpClient](https://docs.microsoft.com/en-us/dotnet/api/system.net.http.httpclient.getstringasync)

## Sections connexes

- [9.3 Types de retour des méthodes async](/fr/chapter-9-asynchronous-programming-async-await/9-3-return-types-of-async-methods)
- [9.1.2 Task<T> (avec résultat)](/fr/chapter-9-asynchronous-programming-async-await/9-1-2-task-t-result)
