---
title: Vérifier l'installation avec dotnet info
sidebar:
  order: 8
  label: 1.2.2 Vérifier l'installation avec dotnet info
---

**Contexte** : Après installation, utilisez `dotnet --info` pour vérifier que .NET est correctement installé. La sortie doit montrer le SDK .NET 10.

Après l'installation, vérifiez que .NET est correctement installé en utilisant la commande `dotnet --info`.

## Ce qu'il faut vérifier

- **Version** : Version actuelle du SDK (devrait être 10.0.x)
- **Runtime** : Versions installées du runtime
- **Chemin** : Répertoire d'installation
- **OS** : Système d'exploitation et architecture

```bash
# Vérifier l'installation .NET
dotnet --info

# Vérification simplifiée de la version
dotnet --version
```

## Exemple de sortie attendue

```bash
SDK .NET :
Version : 10.0.100
Commit : xxxxxxxx

Environnement d'exécution :
Nom OS : Windows
Version OS : 10.0.22621
Plateforme : Windows
```
