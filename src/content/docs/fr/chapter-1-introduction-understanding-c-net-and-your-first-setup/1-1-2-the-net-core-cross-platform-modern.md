---
title: .Net Core multiplateforme moderne
sidebar:
  order: 3
  label: 1.1.2 .Net Core multiplateforme moderne
---

**Contexte** : .NET Core a été la première version multiplateforme de .NET, publiée en 2016. Ses concepts sont maintenant fusionnés dans la plateforme unifiée .NET (version actuelle .NET 10).

.NET Core est le successeur moderne et multiplateforme de .NET Framework, publié pour la première fois en 2016. Il s'exécute sur Windows, Linux et macOS.

## Avantages clés

- **Multiplateforme** : Même code sur tous les OS majeurs
- **Open source** : Code source complet sur GitHub
- **Performances** : Hautement optimisé
- **Installation côte à côte** : Différentes versions peuvent coexister
- **Déploiements autonomes** : Inclut l'environnement d'exécution

## Types d'applications supportés

- Applications web ASP.NET Core
- Applications console
- Microservices
- Applications cloud-native

```bash
# Créer une application console .NET Core (avec SDK .NET 10)
dotnet new console -n MonAppCore
cd MonAppCore
dotnet run
```
