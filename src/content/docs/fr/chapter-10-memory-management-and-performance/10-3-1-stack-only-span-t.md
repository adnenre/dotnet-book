---
title: Span<T> réservé à la pile
sidebar:
  order: 312
  label: 10.3.1 Span<T> réservé à la pile
---

**Contexte** : `Span<T>` est un type `ref struct`, ce qui signifie qu'il ne peut être alloué que sur la pile. Il ne peut pas être boxé, utilisé comme champ dans une classe, ou capturé dans une lambda asynchrone ou un itérateur. Cette restriction permet à `Span<T>` de fournir un accès mémoire sûr et haute performance sans surcharge du garbage collector.

## Exemple d'utilisation

```csharp
using System;

public class StackOnlyDemo
{
    public static void UseSpan()
    {
        Span<int> stackSpan = stackalloc int[10]; // allocation sur la pile
        for (int i = 0; i < stackSpan.Length; i++)
        {
            stackSpan[i] = i;
        }

        // Ceci provoquerait une erreur de compilation :
        // Task.Run(() => { Span<int> s = stackalloc int[5]; }); // Impossible de capturer un ref struct
    }
}
```

## Sortie console

```shell
// La compilation réussit ; stackalloc est valide uniquement à l'intérieur de la méthode.
```

## Remarques importantes

- `stackalloc` alloue de la mémoire sur la pile, ce qui est très rapide mais de taille limitée.
- `Span<T>` est idéal pour l'analyse et la transformation à faible allocation.

## Exemple d'utilisation dans le monde réel

**Lecteur JSON haute performance** – Des bibliothèques comme `Utf8JsonReader` utilisent `ReadOnlySpan<byte>` pour analyser du JSON sans allouer de chaînes.  
Voir [documentation .NET sur stackalloc](https://docs.microsoft.com/fr-fr/dotnet/csharp/language-reference/operators/stackalloc).

## Sections connexes

- [10.3 Span<T> et Memory<T>](/fr/chapter-10-memory-management-and-performance/10-3-span-t-and-memory-t)
- [10.3.2 Memory<T> pour le tas ou l'asynchrone](/fr/chapter-10-memory-management-and-performance/10-3-2-memory-t-for-heap-or-async)
