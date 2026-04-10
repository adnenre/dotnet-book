---
title: FakeItEasy
sidebar:
  order: 807
  label: 15.2.3 FakeItEasy
---

**Contexte** : FakeItEasy est une autre bibliothèque de simulation axée sur la simplicité et la lisibilité. Créez un faux avec `A.Fake<T>()`, configurez les appels avec `A.CallTo(() => faux.Methode()).Returns(valeur)`, et vérifiez avec `A.CallTo(() => faux.Methode()).MustHaveHappened()`.

## Configuration

```bash
dotnet add package FakeItEasy
```

## Exemple d'utilisation

```csharp
using FakeItEasy;
using Xunit;

public interface IEmailSender
{
    Task EnvoyerEmailAsync(string destinataire, string sujet);
    bool EstEmailValide(string email);
}

public class ServiceNotification
{
    private readonly IEmailSender _sender;
    public ServiceNotification(IEmailSender sender) => _sender = sender;
    public async Task NotifierAsync(string email) => await _sender.EnvoyerEmailAsync(email, "Bienvenue");
    public bool ValiderEmail(string email) => _sender.EstEmailValide(email);
}

public class TestsFakeItEasy
{
    [Fact]
    public async Task NotifierAsync_AppelleEnvoyerEmail()
    {
        var faux = A.Fake<IEmailSender>();
        var service = new ServiceNotification(faux);
        await service.NotifierAsync("test@exemple.com");
        A.CallTo(() => faux.EnvoyerEmailAsync("test@exemple.com", "Bienvenue")).MustHaveHappenedOnceExactly();
    }

    [Fact]
    public void ValiderEmail_RetourneValeurSimulee()
    {
        var faux = A.Fake<IEmailSender>();
        A.CallTo(() => faux.EstEmailValide(A<string>.Ignored)).Returns(true);
        var service = new ServiceNotification(faux);
        Assert.True(service.ValiderEmail("nimporte@exemple.com"));
    }
}
```

## Sortie console

```shell
dotnet test
Réussi ! - Échecs : 0, Réussis : 2, Ignorés : 0
```

## Remarques importantes

- `A<T>.Ignored` correspond à n'importe quel argument (similaire à `It.IsAny<T>`).
- `MustHaveHappened()` vérifie les appels ; peut spécifier le nombre avec `Once`, `Twice`, etc.
- FakeItEasy a d'excellents messages d'erreur.

## Exemple d'utilisation dans le monde réel

**Test d'une couche de cache** – Simulez le cache distribué pour tester les scénarios de succès et d'échec de cache.  
Voir [documentation FakeItEasy](https://fakeiteasy.github.io/).

## Sections connexes

- [15.2.1 Moq Mock Setup Verify](/fr/chapter-15-testing-and-mocking/15-2-1-moq-mock-setup-verify)
- [15.2.2 NSubstitute Substitute.For](/fr/chapter-15-testing-and-mocking/15-2-2-nsubstitute-substitute-for)
