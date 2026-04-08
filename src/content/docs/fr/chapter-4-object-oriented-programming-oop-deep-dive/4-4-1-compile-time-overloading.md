---
title: Surcharge à la compilation
sidebar:
  order: 92
  label: 4.4.1 Surcharge à la compilation
---

**Contexte** : La surcharge de méthodes définit plusieurs méthodes avec le même nom mais des paramètres différents. Le compilateur choisit la bonne à la compilation.

```csharp
public class Calculatrice
{
    public int Ajouter(int a, int b) => a + b;
    public double Ajouter(double a, double b) => a + b;
    public int Ajouter(int a, int b, int c) => a + b + c;
}
```
