---
title: Span<T> et Memory<T>
sidebar:
  order: 311
  label: 10.3 Span<T> et Memory<T>
---

**Contexte** : `Span<T>` et `Memory<T>` sont des types ref‑struct introduits dans .NET Core 2.1 pour fournir un accès sûr et sans allocation à des régions de mémoire contiguës. Ils peuvent représenter des tableaux, des chaînes ou des tampons natifs. `Span<T>` est réservé à la pile, tandis que `Memory<T>` peut vivre sur le tas et être utilisé dans des méthodes asynchrones. Ils sont essentiels pour les scénarios haute performance où vous souhaitez éviter de copier des données.

## Exemple d'utilisation

```csharp
using System;

public class SpanDemo
{
    public static void SliceExample()
    {
        int[] numbers = { 1, 2, 3, 4, 5 };
        Span<int> span = numbers.AsSpan();
        Span<int> slice = span.Slice(1, 3); // {2,3,4}
        slice[0] = 10; // Modifie le tableau original
        Console.WriteLine(numbers[1]); // 10
    }
}
```

## Sortie console

```shell
dotnet run
10
```

## Remarques importantes

- `Span<T>` ne peut pas être utilisé comme champ dans des méthodes asynchrones ou des classes.
- `Memory<T>` est une alternative compatible avec le tas pour les scénarios asynchrones.

## Exemple d'utilisation dans le monde réel

**Analyse de lignes CSV** – Au lieu d'allouer des sous‑chaînes, utilisez `Span<char>` et `Slice` pour analyser des valeurs séparées par des virgules sans allocations.  
Voir [documentation .NET sur Span<T>](https://docs.microsoft.com/fr-fr/dotnet/api/system.span-1).

## Sections connexes

- [10.3.1 Span<T> réservé à la pile](/fr/chapter-10-memory-management-and-performance/10-3-1-stack-only-span-t)
- [10.3.2 Memory<T> pour le tas ou l'asynchrone](/fr/chapter-10-memory-management-and-performance/10-3-2-memory-t-for-heap-or-async)
