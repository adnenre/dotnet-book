---
title: dotnet publish créer une sortie déployable
sidebar:
  order: 20
  label: 1.4.5 dotnet publish créer une sortie déployable
---

**Contexte** : `dotnet publish` produit un dossier prêt pour le déploiement. Avec .NET 10, vous pouvez publier en mode dépendant du framework, autonome ou fichier unique.

`dotnet publish` compile l'application et produit un dossier contenant tout le nécessaire pour le déploiement.

## Utilisation de base

```bash
# Créer une sortie de publication
dotnet publish

# Publier dans un répertoire spécifique
dotnet publish -o ./publication

# Publication autonome (inclut le runtime)
dotnet publish --self-contained true
```

## Modes de déploiement

| Mode                   | Commande                                   | Taille       |
| ---------------------- | ------------------------------------------ | ------------ |
| Dépendant du framework | `dotnet publish`                           | Petite       |
| Autonome               | `dotnet publish --self-contained true`     | Grande       |
| Fichier unique         | `dotnet publish -p:PublishSingleFile=true` | Un seul .exe |

```bash
# Exécutable fichier unique
dotnet publish -p:PublishSingleFile=true -o ./publication
```
