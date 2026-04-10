---
title: NUnit Test TestCase
sidebar:
  order: 802
  label: 15.1.2 NUnit Test TestCase
---

**Contexte** : NUnit utilise `[Test]` pour les tests sans paramètre et `[TestCase]` pour les tests pilotés par les données. Il fournit également `[TestCaseSource]` pour des sources de données externes, `[SetUp]` et `[TearDown]` pour les hooks de cycle de vie, et un riche ensemble d'assertions.

## Configuration

```bash
dotnet new nunit -n MesTestsNUnit
cd MesTestsNUnit
dotnet add reference ../MonApp/MonApp.csproj
```

## Exemple d'utilisation

```csharp
using NUnit.Framework;

public class TestsUtilsChaines
{
    [Test]
    public void Inverser_RetourneChaineInversee()
    {
        string resultat = UtilsChaines.Inverser("abc");
        Assert.That(resultat, Is.EqualTo("cba"));
    }

    [TestCase("abc", "cba")]
    [TestCase("", "")]
    [TestCase("a", "a")]
    public void Inverser_CasMultiples(string entree, string attendu)
    {
        Assert.That(UtilsChaines.Inverser(entree), Is.EqualTo(attendu));
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

- NUnit utilise des assertions basées sur des contraintes (`Is.EqualTo`, `Is.True`, `Contains.Substring`).
- `[TestCase]` peut également spécifier `ExpectedResult` pour les méthodes qui retournent une valeur.
- NUnit supporte l'exécution parallèle des tests avec `[NonParallelizable]`.

## Exemple d'utilisation dans le monde réel

**Tests de repository de base de données** – Utilisez `[TestCase]` pour tester différents paramètres de requête sans dupliquer les méthodes de test.  
Voir [documentation NUnit](https://nunit.org/).

## Sections connexes

- [15.1.1 xUnit Fact Theory InlineData](/fr/chapter-15-testing-and-mocking/15-1-1-xunit-fact-theory-inlinedata)
- [15.1.3 MSTest](/fr/chapter-15-testing-and-mocking/15-1-3-mstest)
