---
title: Définition de classe
sidebar:
  order: 75
  label: 4.1.1 Définition de classe
---

**Contexte** : Une définition de classe spécifie les membres (champs, propriétés, méthodes, événements) que les instances de la classe auront.

## Syntaxe

```csharp
[modificateur d'accès] class NomDeLaClasse
{
    // membres
}
```

## Exemple

```csharp
public class Personne
{
    private string _nom;

    public Personne(string nom)
    {
        _nom = nom;
    }

    public void DireBonjour()
    {
        Console.WriteLine($"Bonjour, je suis {_nom}");
    }
}
```

## Conventions de nommage

- Les noms de classe utilisent **PascalCase** (ex. `ServiceClient`).
- Le fichier porte généralement le même nom que la classe (ex. `Personne.cs`).
