---
title: Motif de type
sidebar:
  order: 157
  label: 6.5.2 Motif de type
---

**Contexte** : Le motif de type teste si une expression est d’un type spécifié et, le cas échéant, l’assigne à une nouvelle variable.

```csharp
object obj = "Bonjour";
if (obj is string s)
{
    Console.WriteLine(s.Length);
}
```

## Avec clause `when`

```csharp
object obj = 42;
if (obj is int i && i > 10)
{
    Console.WriteLine("Grand entier");
}
// Ou en utilisant when dans switch
string result = obj switch
{
    int x when x > 0 => "Entier positif",
    int x => "Entier non positif",
    null => "Null",
    _ => "Autre"
};
```

## Exemple d'utilisation dans le monde réel

**Gestion des différents types de jetons JSON** : Lors de l’analyse JSON avec `System.Text.Json`, vous pouvez utiliser le motif de type pour gérer `JsonValueKind.Number`, `JsonValueKind.String`, etc.

**Exemple** : [`JsonDocument`](https://docs.microsoft.com/en-us/dotnet/api/system.text.json.jsondocument) retourne `JsonElement` ; vous pouvez vérifier `ValueKind` avec le motif de type.

## Sections connexes

- [6.5 Filtrage par motif](/fr/chapter-6-advanced-type-system/6-5-pattern-matching)
- [6.5.1 Motif constant](/fr/chapter-6-advanced-type-system/6-5-1-constant-pattern)
