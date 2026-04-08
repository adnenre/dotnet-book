---
title: Accesseurs de propriété
sidebar:
  order: 82
  label: 4.2.2 Accesseurs de propriété
---

**Contexte** : Les accesseurs `get` et `set` contrôlent la lecture et l'écriture. On peut leur appliquer des modificateurs différents.

## Accessibilité différente

```csharp
private int _valeur;
public int Valeur
{
    get => _valeur;
    private set => _valeur = value;
}
```

## Accesseur init (C# 9+)

```csharp
public class Personne
{
    public string Nom { get; init; }
}
var p = new Personne { Nom = "Alice" };
// p.Nom = "Bob"; // erreur
```
