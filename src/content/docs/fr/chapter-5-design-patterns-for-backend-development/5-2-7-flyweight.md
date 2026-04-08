---
title: Flyweight
sidebar:
  order: 118
  label: 5.2.7 Flyweight
---

**Contexte** : Utiliser le partage pour supporter efficacement de grandes quantités d’objets fins.

```csharp
public class Flyweight
{
    private string _sharedState;
    public Flyweight(string state) => _sharedState = state;
    public void Operation(string uniqueState) => Console.WriteLine($"{_sharedState} + {uniqueState}");
}

public class FlyweightFactory
{
    private Dictionary<string, Flyweight> _flyweights = new();
    public Flyweight GetFlyweight(string key)
    {
        if (!_flyweights.ContainsKey(key))
            _flyweights[key] = new Flyweight(key);
        return _flyweights[key];
    }
}
```

## Exemple d'utilisation dans le monde réel

**Rendu de texte** : Chaque caractère d’un document peut partager un `Character` flyweight avec son état intrinsèque (police, taille, style). L’état extrinsèque (position) est passé lors du dessin.

**Exemple** : Dans .NET, [l’internement des chaînes](https://docs.microsoft.com/en-us/dotnet/api/system.string.intern) est un flyweight : les chaînes littérales identiques partagent la même mémoire. De même, la mise en cache des [`Int32`](https://docs.microsoft.com/en-us/dotnet/api/system.int32) dans la plage `-128` à `127`.

## Sections connexes

- [5.2 Patrons structurels](/fr/chapter-5-design-patterns-for-backend-development/5-2-structural-patterns)
- [5.2.6 Composite](/fr/chapter-5-design-patterns-for-backend-development/5-2-6-composite)
- [5.3 Patrons comportementaux](/fr/chapter-5-design-patterns-for-backend-development/5-3-behavioural-patterns)
