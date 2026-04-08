---
title: Program.cs point d'entrée
sidebar:
  order: 12
  label: 1.3.2 Program.cs point d'entrée
---

**Contexte** : Program.cs contient le point d'entrée. Avec C# 9+ (et .NET 10), vous pouvez utiliser les instructions de niveau supérieur pour simplifier.

`Program.cs` contient le point d'entrée de votre application .NET—le code qui s'exécute en premier.

## Méthode Main traditionnelle

```csharp
using System;

namespace MonApp
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Bonjour le monde !");
        }
    }
}
```

## Instructions de niveau supérieur (C# 9+)

```csharp
// Pas d'espace de noms, pas de classe, pas de méthode Main
Console.WriteLine("Bonjour le monde !");
```

## Arguments de ligne de commande

```csharp
// Avec instructions de niveau supérieur
if (args.Length > 0)
{
    Console.WriteLine($"Bonjour {args[0]} !");
}
```
