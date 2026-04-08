---
title: .Net 5, 6, 7, 8, 9, 10 plateforme unifiée
sidebar:
  order: 4
  label: 1.1.3 .Net 5, 6, 7, 8, 9, 10 plateforme unifiée
---

**Contexte** : À partir de .NET 5 (novembre 2020), Microsoft a unifié .NET Framework et .NET Core. En avril 2026, la version stable actuelle est **.NET 10** (LTS), publiée en novembre 2025.

## Chronologie des versions (incluant la dernière)

| Version | Date     | Type de support | Fonctionnalités clés                     |
| ------- | -------- | --------------- | ---------------------------------------- |
| .NET 5  | nov 2020 | STS (terminé)   | Plateforme unifiée                       |
| .NET 6  | nov 2021 | LTS (terminé)   | Support ARM64, hot reload                |
| .NET 7  | nov 2022 | STS (terminé)   | Native AOT, limitation de débit          |
| .NET 8  | nov 2023 | LTS (terminé)   | Améliorations Blazor, intégration IA     |
| .NET 9  | nov 2024 | STS             | Améliorations de performances            |
| .NET 10 | nov 2025 | LTS (actuelle)  | Cloud-native avancé, meilleur Native AOT |

## LTS vs STS

- **LTS (Support à long terme)** : 3 ans de support (.NET 6, .NET 8, .NET 10)
- **STS (Support standard)** : 18 mois de support (.NET 5, .NET 7, .NET 9)

```bash
# Vérifier votre version .NET actuelle
dotnet --version

# Lister toutes les versions .NET installées
dotnet --list-sdks
```
