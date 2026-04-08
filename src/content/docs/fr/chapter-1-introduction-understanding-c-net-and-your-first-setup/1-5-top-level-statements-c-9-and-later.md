---
title: Instructions de niveau supérieur C# 9 et ultérieur
sidebar:
  order: 21
  label: 1.5 Instructions de niveau supérieur C# 9 et ultérieur
---

**Contexte** : Les instructions de niveau supérieur (C# 9+) simplifient le code en supprimant le code cérémoniel. Elles sont pleinement supportées dans .NET 10.

Les instructions de niveau supérieur, introduites en C# 9, permettent d'écrire du code sans la cérémonie d'une méthode `Main`, d'une classe et d'un espace de noms.

## Avantages

- **Simplicité** : Concentrez-vous sur la logique
- **Apprentissage** : Plus facile pour les débutants
- **Concision** : Moins de code à écrire

## Comparaison

**Traditionnel** :

```csharp
using System;

namespace MonApp
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Bonjour");
        }
    }
}
```

**Niveau supérieur** :

```csharp
Console.WriteLine("Bonjour");
```
