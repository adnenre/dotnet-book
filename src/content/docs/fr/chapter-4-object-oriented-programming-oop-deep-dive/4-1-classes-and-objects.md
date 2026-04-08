---
title: Classes et objets
sidebar:
  order: 74
  label: 4.1 Classes et objets
---

**Contexte** : Les classes sont des plans pour créer des objets. Les objets sont des instances de classes. Cette section introduit les concepts fondamentaux de la POO en C#.

Une **classe** définit une structure de données et les opérations pouvant être effectuées sur ces données. Un **objet** est une instance concrète d'une classe, allouée en mémoire.

```csharp
// Définition de classe
class Voiture
{
    public string Modele;
    public void Conduire() => Console.WriteLine("Conduit");
}

// Création d'objets
Voiture maVoiture = new Voiture();
maVoiture.Modele = "Tesla";
maVoiture.Conduire();
```

## Sujets connexes

- 4.1.1 Définition de classe
- 4.1.2 Instanciation
- 4.1.3 Champs
- 4.1.4 Propriétés
- 4.1.5 Méthodes
