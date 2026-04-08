---
title: override virtuel à l'exécution
sidebar:
  order: 93
  label: 4.4.2 override virtuel à l'exécution
---

**Contexte** : Le polymorphisme à l'exécution (dispatch dynamique) permet à une classe dérivée de fournir une implémentation spécifique d'une méthode définie dans la classe de base via `virtual` et `override`.

```csharp
public class Animal
{
    public virtual void Parler() => Console.WriteLine("?");
}
public class Chien : Animal
{
    public override void Parler() => Console.WriteLine("Woof");
}
Animal a = new Chien();
a.Parler(); // Woof
```
