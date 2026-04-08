---
title: Opérateurs is et as
sidebar:
  order: 94
  label: 4.4.3 Opérateurs is et as
---

**Contexte** : `is` vérifie si un objet est compatible avec un type donné ; `as` effectue un cast sécurisé (retourne `null` si incompatible).

## `is`

```csharp
object obj = "Bonjour";
if (obj is string s)
{
    Console.WriteLine($"Longueur: {s.Length}");
}
```

## `as`

```csharp
object obj = "Bonjour";
string str = obj as string;
if (str != null) Console.WriteLine(str.Length);
```
