---
title: dotnet run compiler et exécuter
sidebar:
  order: 18
  label: 1.4.3 dotnet run compiler et exécuter
---

**Contexte** : `dotnet run` compile et exécute le projet. Pratique pour le développement mais pas pour la production (utilisez `dotnet publish`).

`dotnet run` compile le projet et exécute immédiatement l'application résultante.

## Utilisation de base

```bash
# Compiler et exécuter le projet actuel
dotnet run

# Exécuter avec des arguments
dotnet run -- Bonjour Monde

# Exécuter avec une configuration spécifique
dotnet run -c Release
```

## Mode surveillance

```bash
# Mode surveillance (reconstruction automatique)
dotnet watch run

# Exécuter un projet spécifique
dotnet run --projet ./MonApp/MonApp.csproj
```
