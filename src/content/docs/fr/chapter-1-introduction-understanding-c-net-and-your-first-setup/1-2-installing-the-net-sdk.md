---
title: Installation du SDK .Net
sidebar:
  order: 6
  label: 1.2 Installation du SDK .Net
---

**Contexte** : Cette section couvre l'installation du SDK .NET (nécessaire pour développer). La version actuelle du SDK est pour .NET 10 (LTS).

Le SDK .NET (Kit de développement logiciel) est nécessaire pour créer, compiler et exécuter des applications .NET. Il inclut l'environnement d'exécution, les outils en ligne de commande, les compilateurs et les modèles.

## Aperçu de l'installation

1. Télécharger depuis dotnet.microsoft.com
2. Exécuter l'installateur pour votre OS
3. Vérifier l'installation avec `dotnet --info`
4. Comprendre la différence entre SDK et Runtime

## Sujets connexes

- 1.2.1 Téléchargement depuis dotnet.microsoft.com
- 1.2.2 Vérifier l'installation avec dotnet info
- 1.2.3 SDK vs Runtime

```bash
# Installation rapide sur Ubuntu (pour .NET 10)
sudo apt-get update && sudo apt-get install -y dotnet-sdk-10.0
```
