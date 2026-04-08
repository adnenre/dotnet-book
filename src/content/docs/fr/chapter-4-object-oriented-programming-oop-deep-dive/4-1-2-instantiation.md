---
title: Instanciation
sidebar:
  order: 76
  label: 4.1.2 Instanciation
---

**Contexte** : L'instanciation crée un objet (instance) d'une classe en utilisant le mot‑clé `new`, qui alloue la mémoire et appelle le constructeur.

## Syntaxe

```csharp
NomDeLaClasse variable = new NomDeLaClasse([arguments]);
```

## Exemples

```csharp
Personne p1 = new Personne("Alice");
var p2 = new Personne("Bob");
Personne p3 = new() { Nom = "Charlie" }; // C# 9+
```

## Constructeur par défaut

Si aucun constructeur n'est défini, le compilateur fournit un constructeur sans paramètre.

```csharp
class Simple { public int Nombre; }
Simple obj = new Simple(); // Nombre = 0
```

## Initialiseurs d'objets

```csharp
var voiture = new Voiture { Modele = "Tesla", Annee = 2025 };
```
