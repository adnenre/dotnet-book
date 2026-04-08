---
title: Définition d'interface
sidebar:
  order: 96
  label: 4.5.1 Définition d'interface
---

**Contexte** : Définissez une interface avec le mot‑clé `interface`. Elle peut contenir des méthodes, propriétés, événements et indexeurs.

## Syntaxe

```csharp
[modificateur] interface INomInterface
{
    int FaireTravail(string entree);
    string Nom { get; set; }
    event EventHandler Modifie;
}
```

## Exemple

```csharp
public interface IJournal
{
    void Ecrire(string message);
    bool EstActif { get; set; }
}
```
