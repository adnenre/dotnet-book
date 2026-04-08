---
title: Middleware
sidebar:
  order: 131
  label: 5.4.2 Middleware
---

**Contexte** : Les composants middleware sont assemblés dans un pipeline pour traiter les requêtes et réponses. Commun dans ASP.NET Core.

```csharp
public delegate Task RequestDelegate(HttpContext context);

public class MiddlewarePipeline
{
    private readonly List<Func<RequestDelegate, RequestDelegate>> _components = new();

    public void Use(Func<RequestDelegate, RequestDelegate> middleware)
    {
        _components.Add(middleware);
    }

    public RequestDelegate Build()
    {
        RequestDelegate app = context => Task.CompletedTask;
        for (int i = _components.Count - 1; i >= 0; i--)
            app = _components[i](app);
        return app;
    }
}

// Example middleware
app.Use(async (context, next) =>
{
    Console.WriteLine("Before");
    await next();
    Console.WriteLine("After");
});
```

## Exemple d'utilisation dans le monde réel

**Pipeline de requêtes HTTP** : ASP.NET Core utilise des middlewares pour l’authentification, la journalisation, les fichiers statiques, CORS, la gestion des exceptions et MVC. Chaque middleware peut court‑circuiter le pipeline ou passer au suivant.

**Exemple** : [La documentation ASP.NET Core sur les middlewares](https://docs.microsoft.com/en-us/aspnet/core/fundamentals/middleware) présente les middlewares intégrés comme `UseAuthentication`, `UseAuthorization`, `UseStaticFiles`. Middleware personnalisé pour la journalisation des requêtes, la limitation de débit, ou l’ajout d’identifiants de corrélation.

## Sections connexes

- [5.4 Patrons architecturaux pour le backend](/en/chapter-5-design-patterns-for-backend-development/5-4-architectural-patterns-for-backend)
- [5.4.1 Repository](/fr/chapter-5-design-patterns-for-backend-development/5-4-1-repository)
- [5.4.3 Dependency Injection](/fr/chapter-5-design-patterns-for-backend-development/5-4-3-dependency-injection)
