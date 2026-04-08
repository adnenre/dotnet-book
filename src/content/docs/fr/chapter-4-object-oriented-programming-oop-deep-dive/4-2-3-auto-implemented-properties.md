---
title: Propriétés auto-implémentées
sidebar:
  order: 83
  label: 4.2.3 Propriétés auto-implémentées
---

**Contexte** : Les propriétés auto-implémentées simplifient la syntaxe en laissant le compilateur générer un champ de stockage caché.

## Syntaxe

```csharp
public string Nom { get; set; }
public int Age { get; set; } = 18;
```

## Exemple

```csharp
public class Produit
{
    public int Id { get; set; }
    public string Nom { get; set; }
    public decimal Prix { get; set; }
}
```
