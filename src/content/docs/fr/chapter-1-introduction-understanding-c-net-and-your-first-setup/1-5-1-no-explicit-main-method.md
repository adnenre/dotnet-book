---
title: Pas de méthode Main explicite
sidebar:
  order: 22
  label: 1.5.1 Pas de méthode Main explicite
---

**Contexte** : Avec les instructions de niveau supérieur, le compilateur génère la méthode Main automatiquement. Cela fonctionne dans .NET 10.

Avec les instructions de niveau supérieur, le compilateur génère automatiquement la méthode `Main`. Vous n'avez pas besoin de l'écrire explicitement.

## Exemple

```csharp
// C'est tout ce dont vous avez besoin !
Console.Write("Entrez votre nom : ");
string nom = Console.ReadLine();
Console.WriteLine($"Bonjour {nom} !");
```

## Support asynchrone

```csharp
// Instructions de niveau supérieur asynchrones
await Task.Delay(1000);
Console.WriteLine("Terminé !");
```
