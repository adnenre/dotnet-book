---
title: Mot‑clé base
sidebar:
  order: 86
  label: 4.3.2 Mot‑clé base
---

**Contexte** : Le mot‑clé `base` accède aux membres de la classe de base immédiate. Il sert à appeler le constructeur de base ou une méthode de base.

## Appel du constructeur de base

```csharp
public class Employe
{
    public string Nom { get; }
    public Employe(string nom) => Nom = nom;
}
public class Manager : Employe
{
    public string Departement { get; }
    public Manager(string nom, string dept) : base(nom)
    {
        Departement = dept;
    }
}
```

## Appel d'une méthode de base

```csharp
public class Animal
{
    public virtual void Parler() => Console.WriteLine("Son animal");
}
public class Chien : Animal
{
    public override void Parler()
    {
        base.Parler();
        Console.WriteLine("Woof");
    }
}
```
