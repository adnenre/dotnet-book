---
title: WebApplicationFactory<TStartup>
sidebar:
  order: 813
  label: 15.4.1 WebApplicationFactory<TStartup>
---

**Contexte** : `WebApplicationFactory<TStartup>` (de `Microsoft.AspNetCore.Mvc.Testing`) crée un serveur de test en mémoire pour les applications ASP.NET Core. Il trouve automatiquement la classe `Program` ou `Startup` et configure l'hôte de test. Vous pouvez remplacer des services (ex. remplacer la vraie base de données par un double de test) en appelant `ConfigureWebHost` sur la fabrique.

## Configuration

```bash
dotnet add package Microsoft.AspNetCore.Mvc.Testing
```

## Exemple d'utilisation

```csharp
using Microsoft.AspNetCore.Mvc.Testing;
using Microsoft.Extensions.DependencyInjection;
using System.Net.Http;
using Xunit;

public class FabriqueWebPersonnalisee : WebApplicationFactory<Program>
{
    protected override void ConfigureWebHost(IWebHostBuilder builder)
    {
        builder.ConfigureServices(services =>
        {
            // Remplacer le vrai DbContext par une version en mémoire
            var descripteur = services.SingleOrDefault(d => d.ServiceType == typeof(DbContextOptions<AppDbContext>));
            if (descripteur != null) services.Remove(descripteur);
            services.AddDbContext<AppDbContext>(options => options.UseInMemoryDatabase("TestDb"));
        });
    }
}

public class Tests : IClassFixture<FabriqueWebPersonnalisee>
{
    private readonly HttpClient _client;
    public Tests(FabriqueWebPersonnalisee factory) => _client = factory.CreateClient();

    [Fact]
    public async Task GetProduits_RetourneOk()
    {
        var response = await _client.GetAsync("/api/produits");
        Assert.Equal(HttpStatusCode.OK, response.StatusCode);
    }
}
```

## Sortie console

```shell
dotnet test
Réussi ! - Échecs : 0, Réussis : 1, Ignorés : 0
```

## Remarques importantes

- La fabrique réutilise la même classe `Program` que votre application réelle.
- Vous pouvez remplacer n'importe quel service (authentification, clients HTTP, base de données).
- Le serveur de test s'exécute dans le même processus, ce qui facilite le débogage.

## Exemple d'utilisation dans le monde réel

**Test de l'authentification** – Remplacez `AuthenticationHandler` pour simuler des utilisateurs connectés sans véritables identifiants.  
Voir [Personnaliser WebApplicationFactory](https://docs.microsoft.com/fr-fr/aspnet/core/test/integration-tests#customize-webapplicationfactory).

## Sections connexes

- [15.4 Tests d'intégration](/fr/chapter-15-testing-and-mocking/15-4-integration-testing)
- [15.4.2 Base de données en mémoire avec EF Core](/fr/chapter-15-testing-and-mocking/15-4-2-in-memory-database-with-ef-core)
