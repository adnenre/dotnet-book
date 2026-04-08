---
title: Classe de base et classe dérivée
sidebar:
  order: 85
  label: 4.3.1 Classe de base et classe dérivée
---

**Contexte** : La classe de base (parent) est la classe d'origine. La classe dérivée (enfant) en hérite et peut ajouter ou remplacer des membres.

## Syntaxe

```csharp
public class ClasseDerivee : ClasseDeBase { }
```

## Exemple

```csharp
public class Forme
{
    public string Couleur { get; set; }
}
public class Cercle : Forme
{
    public double Rayon { get; set; }
    public double Aire() => Math.PI * Rayon * Rayon;
}
```
