---
title: Base de données en mémoire avec EF Core
sidebar:
  order: 814
  label: 15.4.2 Base de données en mémoire avec EF Core
---

**Contexte** : Entity Framework Core fournit un fournisseur de base de données en mémoire (`Microsoft.EntityFrameworkCore.InMemory`) qui permet de tester le code d'accès aux données sans serveur SQL réel. La base de données en mémoire se comporte comme une base de données relationnelle mais est stockée en mémoire, rendant les tests rapides et isolés. Elle est idéale pour les tests d'intégration qui impliquent la persistance des données.

## Configuration

```bash
dotnet add package Microsoft.EntityFrameworkCore.InMemory
```

## Exemple d'utilisation

```csharp
using Microsoft.EntityFrameworkCore;
using Xunit;

public class AppDbContext : DbContext
{
    public DbSet<Produit> Produits { get; set; }
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }
}

public class RepositoryProduit
{
    private readonly AppDbContext _context;
    public RepositoryProduit(AppDbContext context) => _context = context;
    public async Task AjouterProduitAsync(Produit p) => await _context.Produits.AddAsync(p);
    public async Task<Produit> GetProduitAsync(int id) => await _context.Produits.FindAsync(id);
}

public class TestEnMemoire
{
    [Fact]
    public async Task AjouterProduit_PeutLeRecuperer()
    {
        var options = new DbContextOptionsBuilder<AppDbContext>()
            .UseInMemoryDatabase(databaseName: Guid.NewGuid().ToString())
            .Options;
        using var context = new AppDbContext(options);
        var repo = new RepositoryProduit(context);
        var produit = new Produit { Id = 1, Nom = "Ordinateur" };
        await repo.AjouterProduitAsync(produit);
        await context.SaveChangesAsync();
        var recupere = await repo.GetProduitAsync(1);
        Assert.Equal("Ordinateur", recupere.Nom);
    }
}
```

## Sortie console

```shell
dotnet test
Réussi ! - Échecs : 0, Réussis : 1, Ignorés : 0
```

## Remarques importantes

- Utilisez un nom de base de données unique par test pour éviter la pollution (`Guid.NewGuid().ToString()`).
- Le fournisseur en mémoire n'applique pas l'intégrité référentielle comme une vraie base de données.
- Pour de vrais tests d'intégration, envisagez d'utiliser un conteneur de test (ex. Testcontainers pour SQL Server).

## Exemple d'utilisation dans le monde réel

**Test des méthodes de repository** – Utilisez une base de données en mémoire pour tester `Ajouter`, `MettreÀJour`, `Supprimer` et les requêtes complexes sans base de données réelle.  
Voir [documentation EF Core en mémoire](https://docs.microsoft.com/fr-fr/ef/core/testing/in-memory).

## Sections connexes

- [15.4.1 WebApplicationFactory<TStartup>](/fr/chapter-15-testing-and-mocking/15-4-1-webapplicationfactory-tstartup)
- [15.4.3 HttpClient pour tester les points de terminaison](/fr/chapter-15-testing-and-mocking/15-4-3-httpclient-for-testing-endpoints)
