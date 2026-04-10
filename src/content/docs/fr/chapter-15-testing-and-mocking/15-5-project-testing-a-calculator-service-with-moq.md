---
title: "Projet : Test d'un service de calculatrice avec Moq"
sidebar:
  order: 816
  label: 15.5 Projet  Test d'un service de calculatrice avec Moq
---

**Contexte** : Ce projet démontre les tests unitaires d'un service de calculatrice en utilisant Moq et xUnit. Nous suivons le **développement piloté par les tests (TDD)** – écrire les tests avant l'implémentation. Cycle TDD : Rouge (écrire un test qui échoue), Vert (implémenter le code minimal pour le faire passer), Refactoriser (améliorer le code). Nous testerons une classe `Calculatrice` qui dépend d'un `ILogger` et d'un `IConfiguration`.

## Configuration (approche TDD)

1. Créez une bibliothèque de classes et un projet de test.
2. Ajoutez les packages Moq et xUnit.

--codebash
mkdir AppCalculatrice
cd AppCalculatrice
dotnet new classlib -n CalculatriceLib
dotnet new xunit -n CalculatriceTests
cd CalculatriceTests
dotnet add reference ../CalculatriceLib/CalculatriceLib.csproj
dotnet add package Moq
dotnet add package Microsoft.Extensions.Logging.Abstractions
--code

## Étape 1 : Écrire un test qui échoue (Rouge)

--codecsharp
using Xunit;
using Moq;
using Microsoft.Extensions.Logging;

public class CalculatriceTests
{
[Fact]
public void Ajouter_EntreesValides_RetourneSomme()
{
// Arrange
var loggerMock = new Mock<ILogger<Calculatrice>>();
var configMock = new Mock<IConfiguration>();
var calc = new Calculatrice(loggerMock.Object, configMock.Object);
// Act
int resultat = calc.Ajouter(3, 5);
// Assert
Assert.Equal(8, resultat);
}
}
--code

À ce stade, `Calculatrice` n'existe pas → erreur de compilation (Rouge).

## Étape 2 : Implémentation minimale (Vert)

Créez `CalculatriceLib/Calculatrice.cs` :

--codecsharp
using Microsoft.Extensions.Logging;

public class Calculatrice
{
private readonly ILogger<Calculatrice> \_logger;
private readonly IConfiguration \_config;
public Calculatrice(ILogger<Calculatrice> logger, IConfiguration config)
{
\_logger = logger;
\_config = config;
}
public int Ajouter(int a, int b) => a + b;
}
--code

Maintenant le test passe (Vert).

## Étape 3 : Ajouter plus de tests (cas limites)

--codecsharp
[Theory]
[InlineData(-1, -2, -3)]
[InlineData(0, 0, 0)]
[InlineData(1000000, 2000000, 3000000)]
public void Ajouter_DiversesEntrees_RetourneAttendu(int a, int b, int attendu)
{
var loggerMock = new Mock<ILogger<Calculatrice>>();
var configMock = new Mock<IConfiguration>();
var calc = new Calculatrice(loggerMock.Object, configMock.Object);
Assert.Equal(attendu, calc.Ajouter(a, b));
}
--code

Tous passent.

## Étape 4 : Tester l'interaction de journalisation (vérification de mock)

--codecsharp
[Fact]
public void Ajouter_LogInformation()
{
var loggerMock = new Mock<ILogger<Calculatrice>>();
var configMock = new Mock<IConfiguration>();
var calc = new Calculatrice(loggerMock.Object, configMock.Object);
calc.Ajouter(2, 2);
loggerMock.Verify(
x => x.Log(
LogLevel.Information,
It.IsAny<EventId>(),
It.Is<It.IsAnyType>((v, t) => v.ToString().Contains("Ajouter appelé")),
It.IsAny<Exception>(),
It.IsAny<Func<It.IsAnyType, Exception, string>>()),
Times.Once);
}
--code

Implémentez la journalisation dans `Ajouter` :

--codecsharp
public int Ajouter(int a, int b)
{
\_logger.LogInformation($"Ajouter appelé avec {a} et {b}");
return a + b;
}
--code

Test passe.

## Étape 5 : Tester la dépendance de configuration (Stub)

--codecsharp
[Fact]
public void Ajouter_UtiliseMaxDeConfig_LeveExceptionSiDepasse()
{
var configMock = new Mock<IConfiguration>();
configMock.Setup(c => c["MaxValue"]).Returns("100");
var loggerMock = new Mock<ILogger<Calculatrice>>();
var calc = new Calculatrice(loggerMock.Object, configMock.Object);
// Supposons que Ajouter vérifie la config et lève une exception si la somme > MaxValue
Assert.Throws<InvalidOperationException>(() => calc.Ajouter(60, 50));
}
--code

Implémentez la vérification :

--codecsharp
public int Ajouter(int a, int b)
{
int somme = a + b;
int max = int.TryParse(\_config["MaxValue"], out int m) ? m : int.MaxValue;
if (somme > max) throw new InvalidOperationException($"La somme {somme} dépasse le maximum {max}");
    _logger.LogInformation($"Ajouter appelé avec {a} et {b}");
return somme;
}
--code

## Classe de test complète

--codecsharp
using Xunit;
using Moq;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Configuration;

public class CalculatriceTests
{
private readonly Mock<ILogger<Calculatrice>> \_loggerMock;
private readonly Mock<IConfiguration> \_configMock;
public CalculatriceTests()
{
\_loggerMock = new Mock<ILogger<Calculatrice>>();
\_configMock = new Mock<IConfiguration>();
}

    [Fact]
    public void Ajouter_EntreesValides_RetourneSomme()
    {
        _configMock.Setup(c => c["MaxValue"]).Returns("1000");
        var calc = new Calculatrice(_loggerMock.Object, _configMock.Object);
        Assert.Equal(8, calc.Ajouter(3, 5));
    }

    [Theory]
    [InlineData(-1, -2, -3)]
    [InlineData(0, 0, 0)]
    [InlineData(1000000, 2000000, 3000000)]
    public void Ajouter_DiversesEntrees_RetourneAttendu(int a, int b, int attendu)
    {
        _configMock.Setup(c => c["MaxValue"]).Returns("10000000");
        var calc = new Calculatrice(_loggerMock.Object, _configMock.Object);
        Assert.Equal(attendu, calc.Ajouter(a, b));
    }

    [Fact]
    public void Ajouter_LogInformation()
    {
        _configMock.Setup(c => c["MaxValue"]).Returns("1000");
        var calc = new Calculatrice(_loggerMock.Object, _configMock.Object);
        calc.Ajouter(2, 2);
        _loggerMock.Verify(
            x => x.Log(
                LogLevel.Information,
                It.IsAny<EventId>(),
                It.Is<It.IsAnyType>((v, t) => v.ToString().Contains("Ajouter appelé")),
                It.IsAny<Exception>(),
                It.IsAny<Func<It.IsAnyType, Exception, string>>()),
            Times.Once);
    }

    [Fact]
    public void Ajouter_QuandSommeDepasseMax_LeveException()
    {
        _configMock.Setup(c => c["MaxValue"]).Returns("100");
        var calc = new Calculatrice(_loggerMock.Object, _configMock.Object);
        var ex = Assert.Throws<InvalidOperationException>(() => calc.Ajouter(60, 50));
        Assert.Equal("La somme 110 dépasse le maximum 100", ex.Message);
    }

}
--code

## Sortie console (après implémentation réussie)

--codeshell
dotnet test
Démarrage de l'exécution des tests...
Réussi ! - Échecs : 0, Réussis : 5, Ignorés : 0
--code

## Résumé TDD

- **Rouge** : Écrivez un test qui échoue en premier.
- **Vert** : Implémentez le code le plus simple pour le faire passer.
- **Refactoriser** : Améliorez la qualité du code sans changer le comportement.
- Avantages : Moins de bogues, meilleure conception, sécurité de régression.

## Remarques importantes

- Simulez `ILogger<T>` pour vérifier les appels de journalisation sans écrire dans la console.
- Stubbez `IConfiguration` pour contrôler les valeurs de configuration.
- Utilisez `[Theory]` et `[InlineData]` pour les tests paramétrés.

## Exemple d'utilisation dans le monde réel

**Test d'un service métier** – Approche similaire pour `ServiceCommande` qui dépend de `IRepository`, `IEmailSender` et `ILogger`.  
Voir [guide Microsoft TDD](https://docs.microsoft.com/fr-fr/dotnet/core/testing/unit-testing-best-practices).

## Sections connexes

- [15.2.1 Moq Mock Setup Verify](/fr/chapter-15-testing-and-mocking/15-2-1-moq-mock-setup-verify)
- [15.1.1 xUnit Fact Theory InlineData](/fr/chapter-15-testing-and-mocking/15-1-1-xunit-fact-theory-inlinedata)
- [15.3.2 Mock](/fr/chapter-15-testing-and-mocking/15-3-2-mock)
