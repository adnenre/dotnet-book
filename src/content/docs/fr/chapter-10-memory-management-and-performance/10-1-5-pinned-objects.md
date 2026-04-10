---
title: Objets épinglés
sidebar:
  order: 305
  label: 10.1.5 Objets épinglés
---

**Contexte** : Normalement, le GC déplace les objets en mémoire pendant le compactage. Cependant, lors d'une interopération avec du code non managé (P/Invoke, `System.Span<T>`), vous pouvez avoir besoin de fixer l'adresse d'un objet pour que le GC ne le déplace pas. C'est ce qu'on appelle l'**épinglage**. Les objets épinglés sont marqués et le GC ne les déplace pas, ce qui peut provoquer une fragmentation du tas. Vous devez épingler les objets le plus brièvement possible.

## Exemple d'utilisation

```csharp
using System;
using System.Runtime.InteropServices;

public class PinningDemo
{
    public static void PinArray()
    {
        byte[] buffer = new byte[1024];
        GCHandle handle = GCHandle.Alloc(buffer, GCHandleType.Pinned);
        try
        {
            IntPtr address = handle.AddrOfPinnedObject();
            Console.WriteLine($"Adresse épinglée : {address}");
            // Appeler une méthode non managée ici
        }
        finally
        {
            handle.Free();
        }
    }
}
```

## Sortie console

```shell
dotnet run
Adresse épinglée : 0x1B2F3A4C
```

## Remarques importantes

- L'épinglage empêche le compactage du GC, entraînant une fragmentation.
- Utilisez l'instruction `fixed` dans un contexte unsafe pour un épinglage court.
- Évitez d'épingler de gros objets sur le LOH.

## Exemple d'utilisation dans le monde réel

**Appel de bibliothèque native** – Lorsque vous passez un tableau d'octets à une fonction API Windows comme `ReadFile`, vous pouvez avoir besoin d'épingler le tableau pour garantir que le GC ne le déplace pas pendant l'appel.  
Voir [documentation .NET sur l'épinglage](https://docs.microsoft.com/fr-fr/dotnet/standard/garbage-collection/pinning).

## Sections connexes

- [10.1.4 Large Object Heap LOH](/fr/chapter-10-memory-management-and-performance/10-1-4-large-object-heap-loh)
- [10.3 Span<T> and Memory<T>](/fr/chapter-10-memory-management-and-performance/10-3-span-t-and-memory-t)
