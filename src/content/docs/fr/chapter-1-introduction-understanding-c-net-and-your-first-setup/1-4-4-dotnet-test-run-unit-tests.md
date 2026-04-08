---
title: dotnet test exécuter les tests unitaires
sidebar:
  order: 19
  label: 1.4.4 dotnet test exécuter les tests unitaires
---

**Contexte** : `dotnet test` exécute les tests unitaires. Fonctionne avec xUnit, NUnit, MSTest, etc.

`dotnet test` exécute les tests unitaires dans un projet de test en utilisant xUnit, NUnit ou MSTest.

## Utilisation de base

```bash
# Exécuter tous les tests
dotnet test

# Filtrer les tests
dotnet test --filter "Name=MonTestSpecifique"

# Exécuter les tests d'un projet spécifique
dotnet test tests/MesTests.csproj
```
