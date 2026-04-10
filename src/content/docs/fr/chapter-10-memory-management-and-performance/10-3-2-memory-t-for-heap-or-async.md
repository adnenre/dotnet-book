---
title: Memory<T> pour le tas ou l'asynchrone
sidebar:
  order: 313
  label: 10.3.2 Memory<T> pour le tas ou l'asynchrone
---

**Contexte** : `Memory<T>` est une structure qui représente une région de mémoire contiguë pouvant vivre sur le tas (ex. un tableau) et être utilisée dans des méthodes asynchrones. Contrairement à `Span<T>`, `Memory<T>` n'est pas un `ref struct`, donc il peut être stocké dans des champs, capturé dans des lambdas asynchrones, et utilisé comme paramètre dans des méthodes asynchrones. Vous obtenez un `Span<T>` à partir d'un `Memory<T>` via la propriété `Span`.

## Exemple d'utilisation

```csharp
using System;
using System.Threading.Tasks;

public class MemoryDemo
{
    public static async Task ProcessAsync(Memory<byte> memory)
    {
        // Travailler avec la mémoire (ex. écrire dans un flux)
        // Pour des opérations réelles, utilisez Memory<byte> directement avec WriteAsync
        await Task.Delay(10);
        Console.WriteLine($"Traitement de {memory.Length} octets");
    }

    public static async Task Example()
    {
        byte[] buffer = new byte[1024];
        Memory<byte> memory = buffer.AsMemory();
        await ProcessAsync(memory);
    }
}
```

## Sortie console

```shell
dotnet run
Traitement de 1024 octets
```

## Remarques importantes

- Utilisez `Memory<T>` lorsque vous devez stocker la référence à travers des bornes `await`.
- Convertissez en `Span<T>` uniquement pour des opérations synchrones à l'intérieur d'une méthode.

## Exemple d'utilisation dans le monde réel

**Copie de fichier asynchrone** – `Stream.ReadAsync` et `WriteAsync` acceptent `Memory<byte>` pour lire/écrire des morceaux sans allocations supplémentaires.  
Voir [documentation .NET sur Memory<T>](https://docs.microsoft.com/fr-fr/dotnet/api/system.memory-1).

## Sections connexes

- [10.3.1 Span<T> réservé à la pile](/fr/chapter-10-memory-management-and-performance/10-3-1-stack-only-span-t)
- [10.3.3 ArrayPool<T> pour louer des tampons](/fr/chapter-10-memory-management-and-performance/10-3-3-arraypool-t-for-renting-buffers)
