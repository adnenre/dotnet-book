---
title: dotnet new créer un projet à partir d'un modèle
sidebar:
  order: 16
  label: 1.4.1 dotnet new créer un projet à partir d'un modèle
---

**Contexte** : `dotnet new` crée des projets à partir de modèles. Le framework par défaut pour les nouveaux projets est maintenant net10.0.

`dotnet new` crée un nouveau projet, fichier de configuration ou solution à partir d'un modèle.

## Modèles courants

| Modèle                  | Commande                       |
| ----------------------- | ------------------------------ |
| Application console     | `dotnet new console -n MonApp` |
| API web                 | `dotnet new webapi -n MonApi`  |
| Bibliothèque de classes | `dotnet new classlib -n MaLib` |
| Test xUnit              | `dotnet new xunit -n MesTests` |

## Lister les modèles disponibles

```bash
# Lister tous les modèles
dotnet new list

# Lister les modèles console
dotnet new list console
```
