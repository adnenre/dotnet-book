---
title: using statement
sidebar:
  order: 309
  label: 10.2.3 using statement
---

**Contexte** : L'instruction `using` en C# garantit que `Dispose()` est appelé sur un objet `IDisposable`, même si une exception se produit. C'est du sucre syntaxique pour un bloc `try/finally`. L'instruction `using` peut être utilisée avec plusieurs ressources et, depuis C# 8.0, avec `await using` pour la libération asynchrone.

## Exemple d'utilisation

```csharp
using System;
using System.IO;

public class UsingDemo
{
    public static void ReadFile(string path)
    {
        // using garantit Dispose() même en cas d'exception
        using (FileStream fs = new FileStream(path, FileMode.Open))
        using (StreamReader reader = new StreamReader(fs))
        {
            string content = reader.ReadToEnd();
            Console.WriteLine(content.Length);
        } // fs.Dispose() et reader.Dispose() sont appelés ici
    }

    // C# 8.0 using simplifié (sans accolades)
    public static void ReadFileSimplified(string path)
    {
        using FileStream fs = new FileStream(path, FileMode.Open);
        using StreamReader reader = new StreamReader(fs);
        string content = reader.ReadToEnd();
        Console.WriteLine(content.Length);
    } // Dispose appelé à la fin de la méthode
}
```

## Sortie console

```shell
dotnet run
12345
```

## Remarques importantes

- `using` fonctionne avec tout type `IDisposable`.
- L'objet est en lecture seule à l'intérieur du bloc `using` (ne peut pas être réaffecté).
- Pour plusieurs ressources, des instructions `using` séparées sont plus claires.

## Exemple d'utilisation dans le monde réel

**Connexion base de données** – `using (SqlConnection conn = new SqlConnection(connectionString))` garantit que la connexion est fermée même si une requête lève une exception.  
Voir [documentation .NET sur using statement](https://docs.microsoft.com/fr-fr/dotnet/csharp/language-reference/statements/using).

## Sections connexes

- [10.2.2 Dispose pattern](/fr/chapter-10-memory-management-and-performance/10-2-2-dispose-pattern)
- [10.2.4 await using and IAsyncDisposable](/fr/chapter-10-memory-management-and-performance/10-2-4-await-using-and-iasyncdisposable)
