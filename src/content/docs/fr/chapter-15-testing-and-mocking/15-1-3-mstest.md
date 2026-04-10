---
title: MSTest
sidebar:
  order: 803
  label: 15.1.3 MSTest
---

**Contexte** : MSTest est le framework de tests unitaires de Microsoft, intégré à Visual Studio. Il utilise `[TestMethod]` pour les tests, `[DataTestMethod]` avec `[DataRow]` pour les tests pilotés par les données, et des attributs comme `[TestInitialize]` et `[TestCleanup]`. C'est un choix solide pour les projets utilisant déjà l'écosystème Microsoft.

## Configuration

```bash
dotnet new mstest -n MesTestsMSTest
cd MesTestsMSTest
dotnet add reference ../MonApp/MonApp.csproj
```

## Exemple d'utilisation

```csharp
using Microsoft.VisualStudio.TestTools.UnitTesting;

[TestClass]
public class CalculatriceTests
{
    [TestMethod]
    public void Multiplier_RetourneProduit()
    {
        var calc = new Calculatrice();
        int resultat = calc.Multiplier(4, 5);
        Assert.AreEqual(20, resultat);
    }

    [DataTestMethod]
    [DataRow(1, 2, 3)]
    [DataRow(-1, 1, 0)]
    [DataRow(0, 0, 0)]
    public void Ajouter_RetourneSomme(int a, int b, int attendu)
    {
        var calc = new Calculatrice();
        Assert.AreEqual(attendu, calc.Ajouter(a, b));
    }
}
```

## Sortie console

```shell
dotnet test
Démarrage de l'exécution des tests...
Réussi ! - Échecs : 0, Réussis : 4, Ignorés : 0
```

## Remarques importantes

- Les classes de test doivent être marquées avec `[TestClass]`.
- MSTest supporte `Assert.ThrowsException<T>` pour les tests d'exception.
- `[TestInitialize]` s'exécute avant chaque test, `[ClassInitialize]` une fois par classe.

## Exemple d'utilisation dans le monde réel

**Applications d'entreprise héritées** – De nombreux projets d'entreprise utilisent MSTest en raison de son intégration profonde avec Visual Studio.  
Voir [documentation MSTest](https://docs.microsoft.com/fr-fr/dotnet/core/testing/unit-testing-with-mstest).

## Sections connexes

- [15.1.1 xUnit Fact Theory InlineData](/fr/chapter-15-testing-and-mocking/15-1-1-xunit-fact-theory-inlinedata)
- [15.1.2 NUnit Test TestCase](/fr/chapter-15-testing-and-mocking/15-1-2-nunit-test-testcase)
