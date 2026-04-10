---
title: Frameworks de tests unitaires
sidebar:
  order: 800
  label: 15.1 Frameworks de tests unitaires
---

**Contexte** : Les frameworks de tests unitaires fournissent l'infrastructure pour écrire et exécuter des tests automatisés sur des unités individuelles de code (méthodes, classes). Ils offrent des attributs pour marquer les méthodes de test, des assertions pour vérifier les résultats, et des exécuteurs de tests. Les trois frameworks les plus populaires dans .NET sont xUnit, NUnit et MSTest. Chacun a des capacités similaires mais une syntaxe et une extensibilité différentes.

## Exemple d'utilisation (xUnit)

```csharp
using Xunit;

public class CalculatriceTests
{
    [Fact]
    public void Ajouter_RetourneSomme()
    {
        var calc = new Calculatrice();
        int resultat = calc.Ajouter(2, 3);
        Assert.Equal(5, resultat);
    }
}
```

## Sortie console

```shell
dotnet test
Démarrage de l'exécution des tests...
Réussi ! - Échecs : 0, Réussis : 1, Ignorés : 0
```

## Remarques importantes

- xUnit est le framework par défaut pour les projets .NET modernes (créé avec `dotnet new xunit`).
- NUnit a une syntaxe plus descriptive (`[Test]`, `[TestCase]`).
- MSTest est inclus dans Visual Studio et a des attributs similaires (`[TestMethod]`).

## Exemple d'utilisation dans le monde réel

**Pipelines CI/CD** – Exécutez les tests unitaires automatiquement à chaque commit en utilisant GitHub Actions, Azure DevOps ou Jenkins.  
Voir [documentation .NET sur les tests unitaires](https://docs.microsoft.com/fr-fr/dotnet/core/testing/).

## Sections connexes

- [15.1.1 xUnit Fact Theory InlineData](/fr/chapter-15-testing-and-mocking/15-1-1-xunit-fact-theory-inlinedata)
- [15.1.2 NUnit Test TestCase](/fr/chapter-15-testing-and-mocking/15-1-2-nunit-test-testcase)
- [15.1.3 MSTest](/fr/chapter-15-testing-and-mocking/15-1-3-mstest)
