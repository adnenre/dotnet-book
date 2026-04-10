---
title: Garbage Collection
sidebar:
  order: 300
  label: 10.1 Garbage Collection
---

**Contexte** : Qu'est-ce que le Garbage Collection ? Dans .NET, le Garbage Collector (GC) est un gestionnaire de mémoire automatique. Il s'exécute sur un thread dédié et suit tous les objets managés alloués sur le tas managé. Lorsqu'un objet n'est plus référencé par aucune racine (variables locales, champs statiques, registres CPU, etc.), le GC le considère comme un déchet et libère sa mémoire. Cela élimine la plupart des fuites mémoire et des pointeurs pendants. Le GC utilise des heuristiques sophistiquées pour équilibrer l'utilisation de la mémoire, le débit de l'application et les temps de pause.

## Exemple d'utilisation

```csharp
using System;

public class GCDemo
{
    public static void ShowGenerations()
    {
        object obj = new object();
        Console.WriteLine(GC.GetGeneration(obj)); // Génération actuelle (0)
        GC.Collect(); // Forcer une collecte (déconseillé en production)
        Console.WriteLine(GC.GetGeneration(obj)); // Génération après collecte
    }
}
```

## Sortie console

```shell
dotnet run
0
1
```

## Remarques importantes

- **Automatique** – Vous n'appelez jamais `free` ou `delete`.
- **Non déterministe** – Le GC s'exécute lorsque nécessaire (pression mémoire) ou de manière heuristique.
- **Générationnel** – Les nouveaux objets sont collectés plus souvent que les anciens.
- **Compactage** – Le GC déplace les objets vivants pour réduire la fragmentation.

## Exemple d'utilisation dans le monde réel

**Traitement de gros fichiers** – La lecture d'un fichier volumineux ligne par ligne avec `StreamReader` alloue de nombreux petits objets (chaînes). Comprendre le GC vous aide à réutiliser des tampons ou à utiliser `Span<T>` pour réduire les allocations, évitant ainsi des collectes Gen0 fréquentes.  
Voir [documentation .NET sur le Garbage Collection](https://docs.microsoft.com/fr-fr/dotnet/standard/garbage-collection/).

## Sections connexes

- [10.1.1 Générations 0, 1, 2](/fr/chapter-10-memory-management-and-performance/10-1-1-generations-0-1-2)
- [10.1.2 Workstation GC vs Server GC](/fr/chapter-10-memory-management-and-performance/10-1-2-workstation-gc-vs-server-gc)
- [10.1.3 Background GC](/fr/chapter-10-memory-management-and-performance/10-1-3-background-gc)
- [10.1.4 Large Object Heap LOH](/fr/chapter-10-memory-management-and-performance/10-1-4-large-object-heap-loh)
- [10.1.5 Objets épinglés](/fr/chapter-10-memory-management-and-performance/10-1-5-pinned-objects)
