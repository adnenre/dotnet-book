---
title: Motif constant
sidebar:
  order: 156
  label: 6.5.1 Motif constant
---

**Contexte** : Le motif constant teste si une expression est égale à une valeur constante (littéral, `null` ou `const`).

```csharp
int value = 5;
if (value is 5)
{
    Console.WriteLine("Cinq");
}

// Dans une expression switch
string result = value switch
{
    1 => "Un",
    2 => "Deux",
    _ => "Autre"
};
```

## Exemple d'utilisation dans le monde réel

**Gestion des commandes** : Utilisez le motif constant pour faire correspondre des types de commandes spécifiques dans une expression switch (ex. `case "CREATE": ...`).

**Exemple** : Dans un [serveur TCP](https://docs.microsoft.com/en-us/dotnet/api/system.net.sockets.tcplistener), vous pouvez analyser des commandes sous forme de chaînes et utiliser le motif constant.

## Sections connexes

- [6.5 Filtrage par motif](/fr/chapter-6-advanced-type-system/6-5-pattern-matching)
- [6.5.2 Motif de type](/fr/chapter-6-advanced-type-system/6-5-2-type-pattern)
