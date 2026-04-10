---
title: Bibliothèques de simulation (mocking)
sidebar:
  order: 804
  label: 15.2 Bibliothèques de simulation
---

**Contexte** : Les bibliothèques de simulation créent des implémentations factices de dépendances (interfaces, classes abstraites) pour les tests unitaires. Elles permettent de vérifier que certaines méthodes ont été appelées, de retourner des valeurs spécifiques, de lever des exceptions, etc. Les bibliothèques les plus populaires sont Moq, NSubstitute et FakeItEasy. Elles aident à isoler le code testé des dépendances externes.

## Exemple d'utilisation (Moq)

```csharp
using Moq;
using Xunit;

public interface IServiceEmail
{
    bool Envoyer(string destinataire, string corps);
}

public class ServiceNotification
{
    private readonly IServiceEmail _email;
    public ServiceNotification(IServiceEmail email) => _email = email;
    public bool Notifier(string utilisateur) => _email.Envoyer(utilisateur, "Bonjour");
}

public class TestsNotification
{
    [Fact]
    public void Notifier_AppelleEnvoyer()
    {
        var mock = new Mock<IServiceEmail>();
        mock.Setup(x => x.Envoyer(It.IsAny<string>(), It.IsAny<string>())).Returns(true);
        var service = new ServiceNotification(mock.Object);
        bool resultat = service.Notifier("alice@exemple.com");
        Assert.True(resultat);
        mock.Verify(x => x.Envoyer("alice@exemple.com", "Bonjour"), Times.Once);
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

- Les objets simulés remplacent les dépendances réelles (base de données, HTTP, système de fichiers).
- Ils permettent de tester les interactions et les scénarios d'erreur.
- Choisissez une bibliothèque en fonction de vos préférences de syntaxe et des exigences du projet.

## Exemple d'utilisation dans le monde réel

**Test d'une passerelle de paiement** – Simulez l'API de paiement pour simuler les réponses de succès, d'échec et de timeout sans appels réseau réels.  
Voir [documentation Moq](https://github.com/moq/moq4).

## Sections connexes

- [15.2.1 Moq Mock Setup Verify](/fr/chapter-15-testing-and-mocking/15-2-1-moq-mock-setup-verify)
- [15.2.2 NSubstitute Substitute.For](/fr/chapter-15-testing-and-mocking/15-2-2-nsubstitute-substitute-for)
- [15.2.3 FakeItEasy](/fr/chapter-15-testing-and-mocking/15-2-3-fakeiteasy)
