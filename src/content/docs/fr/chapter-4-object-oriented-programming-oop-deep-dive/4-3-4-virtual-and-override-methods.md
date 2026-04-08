---
title: virtual et override
sidebar:
  order: 88
  label: 4.3.4 virtual et override
---

**Contexte** : `virtual` permet à une méthode d'être surchargée dans une classe dérivée. `override` fournit une nouvelle implémentation.

```csharp
public class Forme
{
    public virtual double Aire() => 0;
}
public class Cercle : Forme
{
    private double _rayon;
    public Cercle(double r) => _rayon = r;
    public override double Aire() => Math.PI * _rayon * _rayon;
}
```

## Polymorphisme

```csharp
Forme f = new Cercle(5);
Console.WriteLine(f.Aire()); // utilise Aire de Cercle
```
