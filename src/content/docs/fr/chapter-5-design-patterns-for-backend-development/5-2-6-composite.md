---
title: Composite
sidebar:
  order: 117
  label: 5.2.6 Composite
---

**Contexte** : Composer des objets en structures arborescentes pour représenter des hiérarchies partie‑tout. Composite permet aux clients de traiter uniformément des objets individuels et des compositions.

```csharp
public abstract class Component
{
    public abstract void Operation();
}

public class Leaf : Component
{
    public override void Operation() => Console.WriteLine("Leaf");
}

public class Composite : Component
{
    private List<Component> _children = new();
    public void Add(Component c) => _children.Add(c);
    public override void Operation()
    {
        foreach (var child in _children)
            child.Operation();
    }
}
```

## Exemple d'utilisation dans le monde réel

**Système de fichiers** : Les fichiers (feuille) et les répertoires (composite) implémentent tous deux `IFileSystemNode`. Les opérations comme `GetSize()` ou `Delete()` fonctionnent sur les deux.

**Exemple** : Dans les frameworks UI, [`Control`](https://docs.microsoft.com/en-us/dotnet/api/system.windows.forms.control) peut être un bouton unique ou un panneau contenant d’autres contrôles. [`ICompositeMetadataDetailsProvider`](https://docs.microsoft.com/en-us/dotnet/api/microsoft.aspnetcore.mvc.modelbinding.metadata.icompositemetadatadetailsprovider) d’ASP.NET Core utilise le pattern Composite.

## Sections connexes

- [5.2 Patrons structurels](/fr/chapter-5-design-patterns-for-backend-development/5-2-structural-patterns)
- [5.2.5 Bridge](/fr/chapter-5-design-patterns-for-backend-development/5-2-5-bridge)
- [5.2.7 Flyweight](/fr/chapter-5-design-patterns-for-backend-development/5-2-7-flyweight)
