---
title: Propriétés
sidebar:
  order: 78
  label: 4.1.4 Propriétés
---

**Contexte** : Les propriétés fournissent un accès contrôlé aux champs privés via les accesseurs `get` et `set`. Elles encapsulent la validation et la logique.

## Propriété de base

```csharp
private int _age;
public int Age
{
    get => _age;
    set => _age = value;
}
```

## Propriété en lecture seule

```csharp
public string NomComplet => $"{Prenom} {Nom}";
```

## Validation dans le setter

```csharp
private int _score;
public int Score
{
    get => _score;
    set
    {
        if (value >= 0 && value <= 100)
            _score = value;
        else
            throw new ArgumentOutOfRangeException();
    }
}
```
