---
title: Chain of Responsibility
sidebar:
  order: 123
  label: 5.3.4 Chain of Responsibility
---

**Contexte** : Éviter de coupler l’émetteur d’une requête à son récepteur en donnant à plusieurs objets la chance de traiter la requête. Chaîner les objets récepteurs et passer la requête le long de la chaîne.

```csharp
public abstract class Handler
{
    protected Handler _next;
    public void SetNext(Handler next) => _next = next;
    public abstract void HandleRequest(int request);
}

public class ConcreteHandlerA : Handler
{
    public override void HandleRequest(int request)
    {
        if (request < 10) Console.WriteLine("Handler A handled");
        else _next?.HandleRequest(request);
    }
}
```

## Exemple d'utilisation dans le monde réel

**Framework de journalisation** : Les enregistreurs avec différents niveaux (INFO, DEBUG, ERROR) forment une chaîne. Si un enregistreur ne peut pas traiter un niveau, il passe au suivant.

**Exemple** : [Le pipeline de middleware ASP.NET Core](https://docs.microsoft.com/en-us/aspnet/core/fundamentals/middleware) est une chaîne de responsabilité. Chaque middleware décide de traiter ou de passer au suivant. Également, [`ValidationHandler` dans FluentValidation](https://docs.fluentvalidation.net/en/latest/).

## Sections connexes

- [5.3 Patrons comportementaux](/fr/chapter-5-design-patterns-for-backend-development/5-3-behavioural-patterns)
- [5.3.3 Observer](/fr/chapter-5-design-patterns-for-backend-development/5-3-3-observer)
- [5.3.5 Mediator](/fr/chapter-5-design-patterns-for-backend-development/5-3-5-mediator)
