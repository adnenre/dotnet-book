---
title: Middleware
sidebar:
  order: 131
  label: 5.4.2 Middleware
---

**Context**: Middleware components are assembled into a pipeline to handle requests and responses. Common in ASP.NET Core.

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

## Real-world usage example

**HTTP request pipeline**: ASP.NET Core uses middleware for authentication, logging, static files, CORS, exception handling, and MVC. Each middleware can short‑circuit the pipeline or pass to the next.

**Example**: [ASP.NET Core middleware documentation](https://docs.microsoft.com/en-us/aspnet/core/fundamentals/middleware) shows built‑in middleware like `UseAuthentication`, `UseAuthorization`, `UseStaticFiles`. Custom middleware for request logging, API rate limiting, or adding correlation IDs.

## Related sections

- [5.4 Architectural patterns for backend](/en/chapter-5-design-patterns-for-backend-development/5-4-architectural-patterns-for-backend)
- [5.4.1 Repository](/en/chapter-5-design-patterns-for-backend-development/5-4-1-repository)
- [5.4.3 Dependency Injection](/en/chapter-5-design-patterns-for-backend-development/5-4-3-dependency-injection)
