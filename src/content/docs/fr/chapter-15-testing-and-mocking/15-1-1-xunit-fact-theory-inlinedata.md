---
title: xUnit Fact Theory InlineData
sidebar:
  order: 801
  label: 15.1.1 xUnit Fact Theory InlineData
---

**Contexte** : xUnit utilise `[Fact]` pour les tests sans paramètre et `[Theory]` avec `[InlineData]` pour les tests pilotés par les données. `[Fact]` marque une méthode de test qui ne prend pas de paramètres. `[Theory]` indique un test qui doit être exécuté avec plusieurs ensembles de données fournis par `[InlineData]`, `[MemberData]` ou `[ClassData]`.

## Configuration

```bash
dotnet new xunit -n MesTests
cd MesTests
dotnet add reference ../MonApp/MonApp.csproj
```

## Exemple d'utilisation

```csharp
using Xunit;

public class TestsMath
{
    [Fact]
    public void Fact_ToujoursVrai()
    {
        Assert.True(true);
    }

    [Theory]
    [InlineData(1, 2, 3)]
    [InlineData(-1, 1, 0)]
    [InlineData(0, 0, 0)]
    public void Ajouter_RetourneSomme(int a, int b, int attendu)
    {
        int resultat = a + b;
        Assert.Equal(attendu, resultat);
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

- Les tests `[Theory]` sont exécutés une fois par `[InlineData]`.
- Utilisez `[MemberData(nameof(Propriete))]` pour partager des données entre plusieurs tests.
- `[Fact]` est plus simple pour les tests qui n'ont pas besoin de variations d'entrée.

## Exemple d'utilisation dans le monde réel

**Validation de logique** – Testez une méthode `EstEmailValide` avec plusieurs adresses email valides et invalides en utilisant `[Theory]` et `[InlineData]`.  
Voir [documentation xUnit](https://xunit.net/).

## Sections connexes

- [15.1 Frameworks de tests unitaires](/fr/chapter-15-testing-and-mocking/15-1-unit-testing-frameworks)
- [15.2 Bibliothèques de simulation](/fr/chapter-15-testing-and-mocking/15-2-mocking-libraries)
