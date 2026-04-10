---
title: NSubstitute Substitute.For
sidebar:
  order: 806
  label: 15.2.2 NSubstitute Substitute.For
---

**Contexte** : NSubstitute est une bibliothèque de simulation avec une syntaxe plus concise et lisible. Créez un substitut avec `Substitute.For<T>()`, configurez le comportement en assignant directement des valeurs de retour (ex. `sub.GetValue().Returns(42)`), et vérifiez les appels avec `Received()`.

## Configuration

```bash
dotnet add package NSubstitute
```

## Exemple d'utilisation

```csharp
using NSubstitute;
using Xunit;

public interface IRepository
{
    Task<Utilisateur> GetByIdAsync(int id);
    void Sauvegarder(Utilisateur user);
}

public class ServiceUtilisateur
{
    private readonly IRepository _repo;
    public ServiceUtilisateur(IRepository repo) => _repo = repo;
    public async Task<Utilisateur> TrouverUtilisateurAsync(int id) => await _repo.GetByIdAsync(id);
    public void CreerUtilisateur(Utilisateur user) => _repo.Sauvegarder(user);
}

public class TestsNSubstitute
{
    [Fact]
    public async Task TrouverUtilisateurAsync_RetourneUtilisateur()
    {
        var repo = Substitute.For<IRepository>();
        var attendu = new Utilisateur { Id = 1, Nom = "Alice" };
        repo.GetByIdAsync(1).Returns(Task.FromResult(attendu));
        var service = new ServiceUtilisateur(repo);
        var resultat = await service.TrouverUtilisateurAsync(1);
        Assert.Equal("Alice", resultat.Nom);
        await repo.Received(1).GetByIdAsync(1);
    }

    [Fact]
    public void CreerUtilisateur_AppelleSauvegarder()
    {
        var repo = Substitute.For<IRepository>();
        var service = new ServiceUtilisateur(repo);
        var user = new Utilisateur { Nom = "Bob" };
        service.CreerUtilisateur(user);
        repo.Received(1).Sauvegarder(user);
    }
}
```

## Sortie console

```shell
dotnet test
Réussi ! - Échecs : 0, Réussis : 2, Ignorés : 0
```

## Remarques importantes

- `Returns()` fonctionne pour les méthodes synchrones et asynchrones (utilisez `Task.FromResult` pour l'asynchrone).
- Utilisez `Received(count)` pour vérifier le nombre d'appels.
- Pas de méthodes `Setup` ou `Verify` ; la syntaxe est plus naturelle.

## Exemple d'utilisation dans le monde réel

**Test de clients API** – Remplacez un wrapper `HttpClient` pour simuler des réponses sans appels réseau réels.  
Voir [documentation NSubstitute](https://nsubstitute.github.io/).

## Sections connexes

- [15.2.1 Moq Mock Setup Verify](/fr/chapter-15-testing-and-mocking/15-2-1-moq-mock-setup-verify)
- [15.2.3 FakeItEasy](/fr/chapter-15-testing-and-mocking/15-2-3-fakeiteasy)
