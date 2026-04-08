---
title: Étapes demander nom demander couleur afficher salutation
sidebar:
  order: 32
  label: 1.7.3 Étapes demander nom demander couleur afficher salutation
---

**Contexte** : Implémentation pas à pas de l'outil de salutation avec .NET 10.

## Programme.cs complet

```csharp
// Outil de salutation - Demander le nom et la couleur préférée

// Étape 1 : Demander le nom
Console.Write("Quel est votre nom ? ");
string nom = Console.ReadLine();

// Étape 2 : Demander la couleur préférée
Console.Write("Quelle est votre couleur préférée ? ");
string couleurPreferee = Console.ReadLine();

// Étape 3 : Afficher la salutation personnalisée
Console.WriteLine();
Console.WriteLine($"Bonjour {nom} !");
Console.WriteLine($"Votre couleur préférée, {couleurPreferee}, est magnifique !");
```

## Exécution

```bash
dotnet run
```

## Sortie exemple

```bash
Quel est votre nom ? Marie
Quelle est votre couleur préférée ? Bleu

Bonjour Marie !
Votre couleur préférée, Bleu, est magnifique !
```
