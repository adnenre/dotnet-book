---
title: Dispose pattern
sidebar:
  order: 308
  label: 10.2.2 Dispose pattern
---

**Contexte** : Le Dispose pattern est la manière recommandée d'implémenter `IDisposable` dans une hiérarchie de classes. Il implique une méthode protégée virtuelle `Dispose(bool disposing)` qui gère à la fois la libération déterministe et la finalisation. Ce modèle garantit que les classes de base et dérivées peuvent libérer correctement leurs ressources, et empêche l'exécution du finaliseur si `Dispose()` a déjà été appelé.

## Exemple d'utilisation

```csharp
using System;

public class BaseResource : IDisposable
{
    private bool _disposed = false;

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
                // Libérer les ressources managées
            }
            // Libérer les ressources non managées
            _disposed = true;
        }
    }

    ~BaseResource()
    {
        Dispose(false);
    }
}

public class DerivedResource : BaseResource
{
    private bool _disposed = false;

    protected override void Dispose(bool disposing)
    {
        if (!_disposed)
        {
            if (disposing)
            {
                // Libérer les ressources managées dérivées
            }
            // Libérer les ressources non managées dérivées
            _disposed = true;
        }
        base.Dispose(disposing);
    }
}
```

## Sortie console

```shell
// Pas de sortie console ; le pattern assure un nettoyage correct.
```

## Remarques importantes

- `Dispose(bool)` différencie l'appel depuis le finaliseur (`disposing = false`) de l'appel manuel.
- Appelez `GC.SuppressFinalize(this)` dans `Dispose()` pour éviter la finalisation.

## Exemple d'utilisation dans le monde réel

**Connexion de base de données personnalisée** – Implémenter `DbConnection` nécessite le Dispose pattern pour nettoyer à la fois les ressources managées (transactions) et non managées (socket).  
Voir [documentation .NET sur Dispose pattern](https://docs.microsoft.com/fr-fr/dotnet/standard/garbage-collection/implementing-dispose).

## Sections connexes

- [10.2 IDisposable](/fr/chapter-10-memory-management-and-performance/10-2-idisposable)
- [10.2.3 using statement](/fr/chapter-10-memory-management-and-performance/10-2-3-using-statement)
