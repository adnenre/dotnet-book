---
title: Méthodes
sidebar:
  order: 79
  label: 4.1.5 Méthodes
---

**Contexte** : Les méthodes définissent le comportement d'une classe. Elles peuvent avoir des paramètres et retourner une valeur (ou `void`).

## Syntaxe

```csharp
[modificateur] typeRetour NomMethode(paramètres) { corps }
```

## Exemple

```csharp
public class Calculatrice
{
    public int Ajouter(int a, int b) => a + b;
    public void AfficherSomme(int a, int b)
    {
        Console.WriteLine($"{a} + {b} = {Ajouter(a, b)}");
    }
}
```

## Surcharge de méthodes

```csharp
public int Multiplier(int a, int b) => a * b;
public double Multiplier(double a, double b) => a * b;
```
