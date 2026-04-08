---
title: Motif var
sidebar:
  order: 161
  label: 6.5.6 Motif var
---

**Contexte** : Le motif `var` correspond à n’importe quelle expression et l’assigne à une nouvelle variable. Utile dans les expressions `switch` pour capturer l’entrée.

```csharp
object obj = "test";
if (obj is var x)
{
    Console.WriteLine(x.GetType()); // correspond toujours
}
```

## Dans les expressions switch

```csharp
string result = obj switch
{
    int i => $"entier : {i}",
    string s => $"chaîne : {s}",
    var other => $"inconnu : {other.GetType()}"
};
```

## Exemple d'utilisation dans le monde réel

**Journalisation de la valeur d’origine** : Dans une expression switch, utilisez `var` comme cas par défaut pour capturer la valeur non correspondante pour la journalisation.

**Exemple** : Dans un [middleware de journalisation](https://docs.microsoft.com/en-us/aspnet/core/fundamentals/middleware/write), vous pouvez enregistrer la valeur réelle qui n’a correspond à aucun motif.

## Sections connexes

- [6.5 Filtrage par motif](/fr/chapter-6-advanced-type-system/6-5-pattern-matching)
- [6.5.2 Motif de type](/fr/chapter-6-advanced-type-system/6-5-2-type-pattern)
