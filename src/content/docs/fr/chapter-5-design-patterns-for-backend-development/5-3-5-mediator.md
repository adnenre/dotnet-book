---
title: Mediator
sidebar:
  order: 124
  label: 5.3.5 Mediator
---

**Contexte** : Définir un objet qui encapsule la façon dont un ensemble d’objets interagissent. Mediator favorise un couplage lâche en empêchant les objets de se référencer explicitement.

```csharp
public interface IMediator
{
    void Notify(object sender, string ev);
}

public class ConcreteMediator : IMediator
{
    private ComponentA _a;
    private ComponentB _b;
    public void RegisterA(ComponentA a) => _a = a;
    public void RegisterB(ComponentB b) => _b = b;
    public void Notify(object sender, string ev)
    {
        if (ev == "A") _b.DoB();
        else if (ev == "B") _a.DoA();
    }
}
```

## Exemple d'utilisation dans le monde réel

**Salle de chat** : Un médiateur de chat gère le routage des messages entre les utilisateurs. Les utilisateurs ne se référencent pas directement ; ils envoient au médiateur qui diffuse.

**Exemple** : Dans .NET, la [bibliothèque MediatR](https://github.com/jbogard/MediatR) implémente le pattern Mediator pour la messagerie intra‑processus. De même, [`IHttpClientFactory`](https://docs.microsoft.com/en-us/dotnet/api/microsoft.extensions.http.ihttpclientfactory) agit comme un médiateur pour créer des instances `HttpClient`.

## Sections connexes

- [5.3 Patrons comportementaux](/fr/chapter-5-design-patterns-for-backend-development/5-3-behavioural-patterns)
- [5.3.4 Chain of Responsibility](/fr/chapter-5-design-patterns-for-backend-development/5-3-4-chain-of-responsibility)
- [5.3.6 Memento](/fr/chapter-5-design-patterns-for-backend-development/5-3-6-memento)
