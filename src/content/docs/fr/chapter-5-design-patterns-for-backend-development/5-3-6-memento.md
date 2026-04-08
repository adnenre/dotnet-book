---
title: Memento
sidebar:
  order: 125
  label: 5.3.6 Memento
---

**Contexte** : Sans violer l’encapsulation, capturer et externaliser l’état interne d’un objet afin de pouvoir le restaurer plus tard.

```csharp
public class Memento
{
    public string State { get; }
    public Memento(string state) => State = state;
}

public class Originator
{
    public string State { get; set; }
    public Memento Save() => new Memento(State);
    public void Restore(Memento m) => State = m.State;
}

public class Caretaker
{
    public Memento Memento { get; set; }
}
```

## Exemple d'utilisation dans le monde réel

**Mécanisme d’annulation** : Un éditeur de texte sauvegarde un memento avant chaque modification. Le responsable (pile d’historique) stocke les mementos pour restaurer les états précédents.

**Exemple** : En C#, la [sérialisation](https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/concepts/serialization/) (binaire, XML, JSON) peut être utilisée pour sauvegarder l’état d’un objet – une forme de memento. De même, [`ITrackable` dans Entity Framework Core](https://docs.microsoft.com/en-us/ef/core/change-tracking/) suit les valeurs originales pour la concurrence.

## Sections connexes

- [5.3 Patrons comportementaux](/fr/chapter-5-design-patterns-for-backend-development/5-3-behavioural-patterns)
- [5.3.5 Mediator](/fr/chapter-5-design-patterns-for-backend-development/5-3-5-mediator)
- [5.3.7 State](/fr/chapter-5-design-patterns-for-backend-development/5-3-7-state)
