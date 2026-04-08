---
title: Héritage
sidebar:
  order: 84
  label: 4.3 Héritage
---

**Contexte** : L'héritage permet à une classe de réutiliser, étendre ou modifier le comportement d'une autre classe. La classe dérivée hérite de tous les membres non privés.

```csharp
public class Animal
{
    public void Manger() => Console.WriteLine("Mange");
}
public class Chien : Animal
{
    public void Aboyer() => Console.WriteLine("Aboie");
}
```

## Sujets connexes

- 4.3.1 Classe de base et classe dérivée
- 4.3.2 Mot‑clé base
- 4.3.3 Classes sealed
- 4.3.4 Méthodes virtual et override
- 4.3.5 Classes et méthodes abstract
- 4.3.6 Masquage avec new
