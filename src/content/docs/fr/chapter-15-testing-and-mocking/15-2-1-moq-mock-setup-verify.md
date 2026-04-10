---
title: Moq Mock Setup Verify
sidebar:
  order: 805
  label: 15.2.1 Moq Mock Setup Verify
---

**Contexte** : Moq est une bibliothèque de simulation populaire. Créez un mock avec `new Mock<T>()`, configurez le comportement avec `Setup` (et `Returns`, `Throws`), et vérifiez les appels avec `Verify`. Moq utilise des expressions lambda pour une syntaxe fluide.

## Configuration

```bash
dotnet add package Moq
```

## Exemple d'utilisation

```csharp
using Moq;
using Xunit;

public interface ILogger
{
    void Log(string message);
    int GetNiveau();
}

public class Processeur
{
    private readonly ILogger _logger;
    public Processeur(ILogger logger) => _logger = logger;
    public void Traiter() => _logger.Log("Traitement");
    public int GetNiveauLog() => _logger.GetNiveau();
}

public class TestsMoq
{
    [Fact]
    public void Traiter_AppelleLog()
    {
        var mock = new Mock<ILogger>();
        var processeur = new Processeur(mock.Object);
        processeur.Traiter();
        mock.Verify(x => x.Log("Traitement"), Times.Once);
    }

    [Fact]
    public void GetNiveauLog_RetourneValeurSimulee()
    {
        var mock = new Mock<ILogger>();
        mock.Setup(x => x.GetNiveau()).Returns(3);
        var processeur = new Processeur(mock.Object);
        Assert.Equal(3, processeur.GetNiveauLog());
    }
}
```

## Sortie console

```shell
dotnet test
Démarrage de l'exécution des tests...
Réussi ! - Échecs : 0, Réussis : 2, Ignorés : 0
```

## Remarques importantes

- Utilisez `It.IsAny<T>()` pour correspondre à n'importe quel argument.
- `Verify` peut vérifier des arguments exacts ou utiliser `It.Is<T>(prédicat)`.
- `Setup` peut aussi lever des exceptions avec `Throws<TException>()`.

## Exemple d'utilisation dans le monde réel

**Test de gestion d'erreurs** – Simulez un repository qui lève une exception et vérifiez que votre service enregistre l'erreur.  
Voir [documentation Moq](https://github.com/moq/moq4/wiki/Quickstart).

## Sections connexes

- [15.2 Bibliothèques de simulation](/fr/chapter-15-testing-and-mocking/15-2-mocking-libraries)
- [15.2.2 NSubstitute Substitute.For](/fr/chapter-15-testing-and-mocking/15-2-2-nsubstitute-substitute-for)
