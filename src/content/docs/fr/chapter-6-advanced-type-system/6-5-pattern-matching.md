---
title: Filtrage par motif (pattern matching)
sidebar:
  order: 155
  label: 6.5 Filtrage par motif (pattern matching)
---

**Contexte** : Le filtrage par motif simplifie la logique conditionnelle en faisant correspondre des expressions à des motifs. Utilisé dans les expressions `switch`, les instructions `if`, etc.

```csharp
object obj = 42;
if (obj is int i)
{
    Console.WriteLine($"Entier : {i}");
}
```

## Exemple d'utilisation dans le monde réel

**Traitement d’événements polymorphes** : Utilisez le filtrage par motif dans une expression `switch` pour gérer différents types de messages (par exemple `UserCreated`, `OrderPaid`) sans cast.

**Exemple** : Dans [les pipelines de traitement de messages](https://docs.microsoft.com/en-us/dotnet/architecture/microservices/architect-microservice-container-applications/communication-in-microservice-architecture), le filtrage par motif simplifie le répartiteur.

## Sections connexes

- [6.5.1 Motif constant](/fr/chapter-6-advanced-type-system/6-5-1-constant-pattern)
- [6.5.2 Motif de type](/fr/chapter-6-advanced-type-system/6-5-2-type-pattern)
- [6.5.3 Motif de propriété](/fr/chapter-6-advanced-type-system/6-5-3-property-pattern)
- [6.5.4 Motif positionnel](/fr/chapter-6-advanced-type-system/6-5-4-positional-pattern)
- [6.5.5 Motif de liste (C# 11)](/fr/chapter-6-advanced-type-system/6-5-5-list-patterns-cs-11)
- [6.5.6 Motif var](/fr/chapter-6-advanced-type-system/6-5-6-var-pattern)
