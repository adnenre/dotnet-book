---
title: IDisposable
sidebar:
  order: 306
  label: 10.2 IDisposable
---

**Contexte** : `IDisposable` est une interface qui fournit un mécanisme pour libérer les ressources non managées (handles de fichiers, connexions bases de données, sockets) de manière déterministe. Le GC .NET ne nettoie que la mémoire managée ; les ressources non managées doivent être libérées explicitement. `IDisposable` définit une unique méthode `Dispose()`. Lorsque vous implémentez `IDisposable`, vous devez également implémenter un finaliseur (destructeur) comme filet de sécurité.

## Exemple d'utilisation

```csharp
using System;
using System.IO;

public class ResourceHolder : IDisposable
{
    private FileStream _fileStream;
    private bool _disposed = false;

    public ResourceHolder(string path)
    {
        _fileStream = File.OpenRead(path);
    }

    public void Dispose()
    {
        Dispose(true);
        GC.SuppressFinalize(this);
    }

    protected virtual void Dispose(bool disposing)
    {
        if (!_disposed)
        {
            if (disposing)
            {
                _fileStream?.Dispose();
            }
            _disposed = true;
        }
    }

    ~ResourceHolder()
    {
        Dispose(false);
    }
}
```

## Sortie console

```shell
// Pas de sortie directe ; Dispose() est appelé automatiquement à la fin d'un bloc using.
```

## Remarques importantes

- Appelez toujours `Dispose()` quand vous avez fini avec un objet `IDisposable`.
- Utilisez l'instruction `using` pour garantir la libération même en cas d'exception.

## Exemple d'utilisation dans le monde réel

**Entrées/sorties fichier** – Chaque `StreamReader`, `FileStream` ou `SqlConnection` implémente `IDisposable`. Disposez-les toujours pour libérer les handles du système d'exploitation.  
Voir [documentation .NET sur IDisposable](https://docs.microsoft.com/fr-fr/dotnet/standard/garbage-collection/implementing-dispose).

## Sections connexes

- [10.2.1 Ressources non managées](/fr/chapter-10-memory-management-and-performance/10-2-1-unmanaged-resources)
- [10.2.2 Dispose pattern](/fr/chapter-10-memory-management-and-performance/10-2-2-dispose-pattern)
- [10.2.3 using statement](/fr/chapter-10-memory-management-and-performance/10-2-3-using-statement)
