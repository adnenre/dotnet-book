---
title: Proxy
sidebar:
  order: 113
  label: 5.2.2 Proxy
---

**Contexte** : Fournir un substitut ou un mandataire pour un autre objet afin d’en contrôler l’accès.

```csharp
public interface ISubject
{
    void Request();
}

public class RealSubject : ISubject
{
    public void Request() => Console.WriteLine("RealSubject request");
}

public class Proxy : ISubject
{
    private RealSubject _realSubject;
    public void Request()
    {
        if (_realSubject == null)
            _realSubject = new RealSubject();
        // Add access control, logging, etc.
        _realSubject.Request();
    }
}
```

## Exemple d'utilisation dans le monde réel

**Chargement paresseux** : Un proxy retarde la création d’un objet coûteux (par exemple, une grande image, une connexion base de données) jusqu’à ce qu’il soit réellement nécessaire.

**Exemple** : Entity Framework Core utilise [les proxies de chargement paresseux](https://docs.microsoft.com/en-us/ef/core/querying/related-data/lazy-loading) pour les propriétés de navigation. Également, [`RealProxy`](https://docs.microsoft.com/en-us/dotnet/api/system.runtime.remoting.proxies.realproxy) pour la communication à distance (héritage) et [les proxies dynamiques](https://www.castleproject.org/projects/dynamicproxy/) dans Castle DynamicProxy.

## Sections connexes

- [5.2 Patrons structurels](/fr/chapter-5-design-patterns-for-backend-development/5-2-structural-patterns)
- [5.2.1 Adapter](/fr/chapter-5-design-patterns-for-backend-development/5-2-1-adapter)
- [5.2.3 Decorator](/fr/chapter-5-design-patterns-for-backend-development/5-2-3-decorator)
