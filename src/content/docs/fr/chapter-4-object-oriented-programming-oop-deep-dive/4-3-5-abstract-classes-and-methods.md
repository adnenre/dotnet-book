---
title: Classes et méthodes abstract
sidebar:
  order: 89
  label: 4.3.5 Classes et méthodes abstract
---

**Contexte** : Une classe `abstract` ne peut pas être instanciée. Elle peut contenir des méthodes `abstract` (sans corps) qui doivent être implémentées par les classes dérivées non abstraites.

```csharp
public abstract class Vehicule
{
    public abstract void DemarrerMoteur();
    public void Arreter() => Console.WriteLine("Arrêté");
}
public class Voiture : Vehicule
{
    public override void DemarrerMoteur() => Console.WriteLine("Moteur voiture démarré");
}
```
