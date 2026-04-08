---
title: Prototype
sidebar:
  order: 110
  label: 5.1.5 Prototype
---

**Contexte** : Spécifier les types d’objets à créer en utilisant une instance prototype, et créer de nouveaux objets en copiant ce prototype.

```csharp
public abstract class Prototype
{
    public abstract Prototype Clone();
}

public class ConcretePrototype : Prototype
{
    public int Data { get; set; }
    public override Prototype Clone() => (ConcretePrototype)MemberwiseClone();
}

// Usage
var original = new ConcretePrototype { Data = 42 };
var clone = (ConcretePrototype)original.Clone();
Console.WriteLine(clone.Data); // 42
```

## Exemple d'utilisation dans le monde réel

**Copie de documents complexes** : Un éditeur de document clone un modèle de document (en‑têtes, pieds de page, styles) puis modifie la copie pour un nouveau client.

**Exemple** : Dans .NET, l’interface [`ICloneable`](https://docs.microsoft.com/en-us/dotnet/api/system.icloneable) (bien que non recommandée) est un pattern Prototype. Plus pratiquement, [`MemberwiseClone`](https://docs.microsoft.com/en-us/dotnet/api/system.object.memberwiseclone) est utilisé pour la copie superficielle. Dans les moteurs de jeu, les préfabriqués sont des prototypes.

## Sections connexes

- [5.1 Patrons de création](/fr/chapter-5-design-patterns-for-backend-development/5-1-creational-patterns)
- [5.1.4 Builder](/fr/chapter-5-design-patterns-for-backend-development/5-1-4-builder)
- [5.2 Patrons structurels](/fr/chapter-5-design-patterns-for-backend-development/5-2-structural-patterns)
