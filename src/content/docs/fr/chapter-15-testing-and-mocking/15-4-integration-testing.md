---
title: Tests d'intégration
sidebar:
  order: 812
  label: 15.4 Tests d'intégration
---

**Contexte** : Les tests d'intégration vérifient que plusieurs composants fonctionnent ensemble correctement (ex. base de données + API + logique métier). Ils sont plus lents que les tests unitaires mais offrent une plus grande confiance. Dans ASP.NET Core, la classe `WebApplicationFactory<TStartup>` permet de créer un serveur de test en mémoire et d'effectuer des requêtes HTTP. Vous pouvez également remplacer les dépendances réelles (ex. base de données) par des doubles de test comme une base de données en mémoire.

## Configuration

```bash
dotnet new xunit -n MesTestsIntegration
cd MesTestsIntegration
dotnet add reference ../MonAppWeb/MonAppWeb.csproj
dotnet add package Microsoft.AspNetCore.Mvc.Testing
dotnet add package Microsoft.EntityFrameworkCore.InMemory
```

## Exemple d'utilisation

```csharp
using Microsoft.AspNetCore.Mvc.Testing;
using System.Net.Http;
using System.Threading.Tasks;
using Xunit;

public class TestsIntegration : IClassFixture<WebApplicationFactory<Program>>
{
    private readonly HttpClient _client;
    public TestsIntegration(WebApplicationFactory<Program> factory)
    {
        _client = factory.CreateClient();
    }

    [Fact]
    public async Task GetMeteo_RetourneOk()
    {
        var response = await _client.GetAsync("/meteo");
        response.EnsureSuccessStatusCode();
        var contenu = await response.Content.ReadAsStringAsync();
        Assert.Contains("temperature", contenu);
    }
}
```

## Sortie console

```shell
dotnet test
Réussi ! - Échecs : 0, Réussis : 1, Ignorés : 0
```

## Remarques importantes

- Les tests d'intégration sont plus lents ; utilisez‑les pour les chemins critiques uniquement.
- Utilisez une base de données de test séparée ou en mémoire pour éviter les effets de bord.
- `WebApplicationFactory` démarre votre application en mémoire, pas besoin de port HTTP réel.

## Exemple d'utilisation dans le monde réel

**Test d'une API REST** – Envoyez des requêtes à vos points de terminaison API et vérifiez les codes de statut HTTP, la structure de la réponse et les changements en base de données.  
Voir [documentation .NET sur les tests d'intégration](https://docs.microsoft.com/fr-fr/aspnet/core/test/integration-tests).

## Sections connexes

- [15.4.1 WebApplicationFactory<TStartup>](/fr/chapter-15-testing-and-mocking/15-4-1-webapplicationfactory-tstartup)
- [15.4.2 Base de données en mémoire avec EF Core](/fr/chapter-15-testing-and-mocking/15-4-2-in-memory-database-with-ef-core)
- [15.4.3 HttpClient pour tester les points de terminaison](/fr/chapter-15-testing-and-mocking/15-4-3-httpclient-for-testing-endpoints)
