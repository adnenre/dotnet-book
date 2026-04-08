---
title: Implémentation explicite d'interface
sidebar:
  order: 98
  label: 4.5.3 Implémentation explicite d'interface
---

**Contexte** : L'implémentation explicite permet à une classe d'implémenter des membres d'interface sans les rendre publics. Utile pour résoudre des conflits de noms.

```csharp
public interface IEcrivain { void Ecrire(); }
public interface ILecteur { void Ecrire(); }
public class Peripherique : IEcrivain, ILecteur
{
    void IEcrivain.Ecrire() => Console.WriteLine("Écrivain");
    void ILecteur.Ecrire() => Console.WriteLine("Lecteur");
}
```

## Accès

```csharp
Peripherique p = new Peripherique();
((IEcrivain)p).Ecrire(); // "Écrivain"
```
