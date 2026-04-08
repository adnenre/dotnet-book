---
title: Interfaces
sidebar:
  order: 95
  label: 4.5 Interfaces
---

**Contexte** : Une interface définit un contrat que les classes implémentant doivent suivre. Elle contient uniquement des signatures (méthodes, propriétés, événements, indexeurs) sans implémentation.

```csharp
public interface IDessinable
{
    void Dessiner();
}
public class Cercle : IDessinable
{
    public void Dessiner() => Console.WriteLine("Dessine un cercle");
}
```

## Sujets connexes

- 4.5.1 Définition d'interface
- 4.5.2 Implémentation d'interface
- 4.5.3 Implémentation explicite
- 4.5.4 Méthodes d'interface par défaut (C# 8+)
