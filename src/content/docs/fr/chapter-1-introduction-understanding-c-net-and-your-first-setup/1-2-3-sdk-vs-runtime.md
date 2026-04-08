---
title: SDK vs Runtime
sidebar:
  order: 9
  label: 1.2.3 SDK vs Runtime
---

**Contexte** : Comprendre la différence entre SDK et Runtime est crucial. Le SDK est pour le développement, le Runtime pour l'exécution. .NET 10 fournit les deux.

Comprendre la différence entre SDK et Runtime est crucial pour le développement et le déploiement .NET.

## SDK .NET

- **Objectif** : Développement
- **Inclut** : Compilateurs, outils CLI, modèles, moteurs de build, et le runtime
- **Taille** : ~500-700 Mo
- **Quand l'installer** : Sur les machines de développement

## Runtime .NET

- **Objectif** : Exécuter des applications .NET existantes
- **Inclut** : Uniquement l'environnement d'exécution
- **Taille** : ~50-100 Mo
- **Quand l'installer** : Sur les serveurs de production ou machines utilisateur

## Runtime ASP.NET Core

- **Objectif** : Exécuter des applications web
- **Inclut** : Runtime .NET + bibliothèques ASP.NET Core

```bash

# Vérifier les SDK installés

dotnet --list-sdks

# Vérifier les runtimes installés

dotnet --list-runtimes
```
