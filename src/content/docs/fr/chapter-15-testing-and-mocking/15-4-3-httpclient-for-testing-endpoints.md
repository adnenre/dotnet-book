---
title: HttpClient pour tester les points de terminaison
sidebar:
  order: 815
  label: 15.4.3 HttpClient pour tester les points de terminaison
---

**Contexte** : Dans les tests d'intégration, vous utilisez un `HttpClient` obtenu à partir de `WebApplicationFactory.CreateClient()` pour envoyer des requêtes HTTP à votre serveur de test en mémoire. Cela vous permet de tester vos points de terminaison API exactement comme le ferait un vrai client, y compris le routage, la sérialisation, l'authentification et les middlewares. Le `HttpClient` ne nécessite pas de port réseau ; il communique directement avec l'hôte de test.

## Exemple d'utilisation

```csharp
using Microsoft.AspNetCore.Mvc.Testing;
using System.Net;
using System.Net.Http.Json;
using System.Threading.Tasks;
using Xunit;

public class TestsPointsTerminaison : IClassFixture<WebApplicationFactory<Program>>
{
    private readonly HttpClient _client;
    public TestsPointsTerminaison(WebApplicationFactory<Program> factory)
    {
        _client = factory.CreateClient();
    }

    [Fact]
    public async Task PostProduit_RetourneCree()
    {
        var produit = new { Nom = "Souris", Prix = 29.99 };
        var response = await _client.PostAsJsonAsync("/api/produits", produit);
        Assert.Equal(HttpStatusCode.Created, response.StatusCode);
        var retourne = await response.Content.ReadFromJsonAsync<Produit>();
        Assert.Equal("Souris", retourne.Nom);
    }
}
```

## Sortie console

```shell
dotnet test
Réussi ! - Échecs : 0, Réussis : 1, Ignorés : 0
```

## Remarques importantes

- `CreateClient()` suit automatiquement les redirections et gère les cookies.
- Vous pouvez ajouter des en-têtes par défaut (ex. `Authorization`) en remplaçant `CreateClient`.
- Pour les points de terminaison authentifiés, vous devrez peut-être injecter un gestionnaire d'authentification factice.

## Exemple d'utilisation dans le monde réel

**Test d'une action de contrôleur** – Envoyez une requête `GET` à `/api/commandes/5` et vérifiez que la réponse JSON contient les champs attendus.  
Voir [Tests d'intégration avec HttpClient](https://docs.microsoft.com/fr-fr/aspnet/core/test/integration-tests#test-with-httpclient).

## Sections connexes

- [15.4.1 WebApplicationFactory<TStartup>](/fr/chapter-15-testing-and-mocking/15-4-1-webapplicationfactory-tstartup)
- [15.4.2 Base de données en mémoire avec EF Core](/fr/chapter-15-testing-and-mocking/15-4-2-in-memory-database-with-ef-core)
