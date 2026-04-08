---
title: dotnet build compiler
sidebar:
  order: 17
  label: 1.4.2 dotnet build compiler
---

**Contexte** : `dotnet build` compile le projet. Par défaut, il crée une build Debug. Utilisez `-c Release` pour une build optimisée.

`dotnet build` compile le projet et ses dépendances en un ensemble de binaires.

## Utilisation de base

```bash
# Compiler le projet actuel
dotnet build

# Compiler avec une configuration spécifique
dotnet build -c Release

# Compiler un projet spécifique
dotnet build chemin/vers/MonProjet.csproj
```

## Sortie de compilation

- **Debug** : `bin/Debug/` (inclut les symboles de débogage)
- **Release** : `bin/Release/` (optimisé)

## Options courantes

| Option                | Description                  |
| --------------------- | ---------------------------- |
| `-c, --configuration` | Debug ou Release             |
| `-o, --output`        | Répertoire de sortie         |
| `--no-restore`        | Ne pas restaurer les paquets |

```bash
# Sortie de compilation verbeuse
dotnet build -v detailed
```
