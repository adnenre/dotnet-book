---
title: where T  unmanaged (pas de références)
sidebar:
  order: 415
  label: 11.4.6 where T  unmanaged
---

**Contexte** : La contrainte `unmanaged` (disponible depuis C# 7.3) exige que le paramètre de type soit un type non managé : c'est‑à‑dire un type valeur ne contenant aucune référence à un objet managé (pas de champs de type référence). Cela inclut les types primitifs, les énumérations, les structs composés uniquement de champs non managés. Cette contrainte est utile pour l'interopérabilité avec du code non managé (P/Invoke, allocations sur la pile, etc.).

## Exemple d'utilisation

```csharp
using System;
using System.Runtime.InteropServices;

public struct PointNonManage
{
    public int X;
    public int Y;
    // Pas de champs référence
}

public struct PointAvecReference
{
    public int X;
    public string Description; // référence => non autorisé
}

public class BufferUnmanaged<T> where T : unmanaged
{
    public unsafe T* Allouer(int count)
    {
        return (T*)Marshal.AllocHGlobal(count * sizeof(T));
    }
}

class Program
{
    static void Main()
    {
        var buffer = new BufferUnmanaged<PointNonManage>();
        Console.WriteLine("Buffer non managé créé (simulation)");

        // Ceci ne compile pas : PointAvecReference contient une référence
        // var bufferErreur = new BufferUnmanaged<PointAvecReference>();
    }
}
```

## Sortie console

```shell
dotnet run
Buffer non managé créé (simulation)
```

## Remarques importantes

- Les types `unmanaged` sont un sous‑ensemble des `struct`.
- Permet d'utiliser `sizeof(T)` et `stackalloc T[]`.
- Idéal pour les APIs haute performance ou l'interopérabilité.

## Exemple d'utilisation dans le monde réel

**`System.Span<T>`** – Utilise des contraintes `unmanaged` en interne pour certaines optimisations.  
Voir [documentation .NET sur la contrainte unmanaged](https://docs.microsoft.com/fr-fr/dotnet/csharp/language-reference/builtin-types/unmanaged-types).

## Sections connexes

- [11.4.1 where T : struct](/fr/chapter-11-generics-and-constraints/11-4-1-where-t-struct-value-type)
- [11.4.7 Contraintes multiples](/fr/chapter-11-generics-and-constraints/11-4-7-multiple-constraints)
