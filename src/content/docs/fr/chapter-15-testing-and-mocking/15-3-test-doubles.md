---
title: Doubles de test
sidebar:
  order: 808
  label: 15.3 Doubles de test
---

**Contexte** : Les doubles de test sont des termes génériques pour les objets qui remplacent les dépendances réelles dans les tests. Les principaux types sont : **Stub** (fournit des réponses prédéfinies), **Mock** (vérifie les interactions), **Fake** (implémentation légère fonctionnelle), **Dummy** (transmis mais jamais utilisé), et **Spy** (enregistre les appels pour vérification ultérieure). Comprendre ces concepts aide à concevoir de meilleurs tests.

## Exemple d'utilisation (conceptuel)

```csharp
// Stub : retourne des données fixes
var stub = new Mock<IRepository>();
stub.Setup(r => r.GetById(1)).Returns(new Utilisateur { Id = 1 });

// Mock : vérifie qu'une méthode a été appelée
mock.Verify(r => r.Sauvegarder(It.IsAny<Utilisateur>()), Times.Once);

// Fake : implémentation légère fonctionnelle
public class FakeRepositoryUtilisateur : IRepository
{
    private List<Utilisateur> _users = new();
    public Utilisateur GetById(int id) => _users.FirstOrDefault(u => u.Id == id);
    public void Sauvegarder(Utilisateur u) => _users.Add(u);
}
```

## Sortie console

```shell
// Pas de sortie directe ; concepts utilisés dans les tests.
```

## Remarques importantes

- Les stubs se concentrent sur l'état ; les mocks sur la vérification du comportement.
- Les fakes sont souvent utilisés pour des bases de données en mémoire ou des doubles avec logique réelle.
- Choisissez le double approprié pour éviter de trop spécifier les tests.

## Exemple d'utilisation dans le monde réel

**Test d'un panier d'achat** – Utilisez un stub pour la tarification des produits (retourne toujours des prix fixes) et un mock pour vérifier que la passerelle de paiement est appelée exactement une fois.  
Voir [article de Martin Fowler sur les doubles de test](https://martinfowler.com/bliki/TestDouble.html).

## Sections connexes

- [15.3.1 Stub](/fr/chapter-15-testing-and-mocking/15-3-1-stub)
- [15.3.2 Mock](/fr/chapter-15-testing-and-mocking/15-3-2-mock)
- [15.3.3 Fake](/fr/chapter-15-testing-and-mocking/15-3-3-fake)
