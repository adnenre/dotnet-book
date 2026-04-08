---
title: Téléchargement depuis dotnet.microsoft.com
sidebar:
  order: 7
  label: 1.2.1 Téléchargement depuis dotnet.microsoft.com
---

**Contexte** : La source officielle pour les téléchargements .NET est dotnet.microsoft.com. En avril 2026, la dernière LTS est .NET 10.

La source officielle pour les téléchargements .NET est [dotnet.microsoft.com/download](https://dotnet.microsoft.com/download).

## Étapes de téléchargement

1. Accéder à la page de téléchargement .NET
2. Sélectionner votre système d'exploitation
3. Choisir entre **SDK** (développement) ou **Runtime** (exécution)
4. Télécharger l'installateur

## Méthodes alternatives

- **Windows** : `winget install Microsoft.DotNet.SDK.10`
- **macOS** : `brew install dotnet-sdk`
- **Linux** : Gestionnaire de paquets (apt, yum, dnf)

```bash
# Utilisation de winget sur Windows
winget install Microsoft.DotNet.SDK.10

# Utilisation de Homebrew sur macOS
brew install dotnet-sdk
```
