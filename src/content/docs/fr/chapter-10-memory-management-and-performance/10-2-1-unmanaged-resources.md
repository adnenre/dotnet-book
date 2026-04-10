---
title: Ressources non managées
sidebar:
  order: 307
  label: 10.2.1 Ressources non managées
---

**Contexte** : Les ressources non managées sont des ressources que le GC .NET ne connaît pas. Les exemples incluent les handles de fichiers, les handles de fenêtres (HWND), les objets GDI, les connexions de base de données, les sockets réseau, et la mémoire allouée via `Marshal.AllocHGlobal`. Ces ressources doivent être explicitement libérées par le développeur. `IDisposable` est le modèle standard pour les libérer.

## Exemple d'utilisation

```csharp
using System;
using System.Runtime.InteropServices;

public class NativeBuffer : IDisposable
{
    private IntPtr _buffer;
    private bool _disposed = false;

    public NativeBuffer(int size)
    {
        _buffer = Marshal.AllocHGlobal(size);
    }

    public void Dispose()
    {
        if (!_disposed && _buffer != IntPtr.Zero)
        {
            Marshal.FreeHGlobal(_buffer);
            _buffer = IntPtr.Zero;
            _disposed = true;
        }
        GC.SuppressFinalize(this);
    }

    ~NativeBuffer()
    {
        if (_buffer != IntPtr.Zero)
        {
            Marshal.FreeHGlobal(_buffer);
        }
    }
}
```

## Sortie console

```shell
// Pas de sortie ; la mémoire native est libérée quand Dispose() est appelé.
```

## Remarques importantes

- Les ressources non managées causent des fuites mémoire si elles ne sont pas libérées.
- Fournissez toujours un finaliseur (destructeur) comme secours.

## Exemple d'utilisation dans le monde réel

**Allocateur de mémoire native** – Lorsque vous utilisez `Marshal.AllocHGlobal` pour de l'interop, encapsulez‑le dans une classe `IDisposable` pour garantir la libération de la mémoire.  
Voir [documentation .NET sur les ressources non managées](https://docs.microsoft.com/fr-fr/dotnet/standard/unmanaged-code/pinvoke).

## Sections connexes

- [10.2 IDisposable](/fr/chapter-10-memory-management-and-performance/10-2-idisposable)
- [10.2.2 Dispose pattern](/fr/chapter-10-memory-management-and-performance/10-2-2-dispose-pattern)
