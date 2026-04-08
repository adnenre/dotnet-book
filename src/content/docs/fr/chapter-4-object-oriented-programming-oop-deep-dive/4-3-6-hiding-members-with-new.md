---
title: Masquage avec new
sidebar:
  order: 90
  label: 4.3.6 Masquage avec new
---

**Contexte** : Utilisez `new` pour masquer intentionnellement un membre hérité. Cela brise le polymorphisme pour ce membre.

```csharp
public class Base
{
    public void Afficher() => Console.WriteLine("Base");
}
public class Derivee : Base
{
    public new void Afficher() => Console.WriteLine("Derivee");
}
```

## Comportement

```csharp
Base b = new Derivee();
b.Afficher(); // "Base"
Derivee d = new Derivee();
d.Afficher(); // "Derivee"
```
