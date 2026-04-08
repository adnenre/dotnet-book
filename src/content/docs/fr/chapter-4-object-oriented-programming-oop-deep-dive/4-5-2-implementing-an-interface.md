---
title: Implémentation d'interface
sidebar:
  order: 97
  label: 4.5.2 Implémentation d'interface
---

**Contexte** : Une classe ou une structure implémente une interface en fournissant des implémentations concrètes pour tous ses membres.

```csharp
public class Etudiant : IPersonne
{
    public string Nom { get; set; }
    public void SePresenter() => Console.WriteLine($"Je suis {Nom}");
}
```

## Plusieurs interfaces

```csharp
public class GestionnaireFichier : ILisible, IEcriture
{
    public string Lire() => "données";
    public void Ecrire(string donnees) { }
}
```
