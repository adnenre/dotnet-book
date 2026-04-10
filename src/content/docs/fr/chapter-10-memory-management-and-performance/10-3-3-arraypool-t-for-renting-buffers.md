---
title: ArrayPool<T> pour louer des tampons
sidebar:
  order: 314
  label: 10.3.3 ArrayPool<T> pour louer des tampons
---

**Contexte** : `ArrayPool<T>` est un pool de tableaux haute performance qui réduit la pression sur le garbage collector en réutilisant les grands tableaux. Au lieu d'allouer un nouveau tableau à chaque fois, vous en louez un depuis le pool et vous le rendez lorsque vous avez terminé. Cela est particulièrement utile pour les tampons temporaires utilisés fréquemment (ex. E/S réseau ou fichier). Le `ArrayPool<T>` par défaut est partagé et thread‑safe.

## Exemple d'utilisation

```csharp
using System;
using System.Buffers;

public class ArrayPoolDemo
{
    public static void ProcessData(int minLength)
    {
        byte[] buffer = ArrayPool<byte>.Shared.Rent(minLength);
        try
        {
            // Utiliser le tampon (la taille réelle peut être supérieure à minLength)
            // Remplir le tampon avec des données
            Console.WriteLine($"Taille du tampon loué : {buffer.Length}");
        }
        finally
        {
            ArrayPool<byte>.Shared.Return(buffer);
        }
    }
}
```

## Sortie console

```shell
dotnet run
Taille du tampon loué : 1024
```

## Remarques importantes

- Les tableaux loués peuvent être plus grands que demandés – n'utilisez que les premiers `minLength` éléments.
- Remettez toujours le tampon au pool pour éviter les fuites de mémoire.
- Ne conservez pas de références aux tampons retournés.

## Exemple d'utilisation dans le monde réel

**Serveur TCP à haut débit** – Lors de la lecture de sockets, louer un tampon depuis `ArrayPool<byte>` pour chaque opération de réception évite les allocations fréquentes, réduisant la pression sur le GC.  
Voir [documentation .NET sur ArrayPool<T>](https://docs.microsoft.com/fr-fr/dotnet/api/system.buffers.arraypool-1).

## Sections connexes

- [10.3.2 Memory<T> pour le tas ou l'asynchrone](/fr/chapter-10-memory-management-and-performance/10-3-2-memory-t-for-heap-or-async)
- [10.4 Benchmarking](/fr/chapter-10-memory-management-and-performance/10-4-benchmarking)
