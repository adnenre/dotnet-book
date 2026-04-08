---
title: Classes sealed
sidebar:
  order: 87
  label: 4.3.3 Classes sealed
---

**Contexte** : Le modificateur `sealed` empêche l'héritage d'une classe. Appliqué à une méthode, il empêche sa surcharge dans les classes dérivées.

## Classe sealed

```csharp
public sealed class ClasseFinale { }
// public class Derivee : ClasseFinale { } // erreur
```

## Méthode sealed

```csharp
public class Parent
{
    public virtual void Methode() { }
}
public class Enfant : Parent
{
    public sealed override void Methode() { }
}
// public class PetitEnfant : Enfant { public override void Methode() { } } // erreur
```
