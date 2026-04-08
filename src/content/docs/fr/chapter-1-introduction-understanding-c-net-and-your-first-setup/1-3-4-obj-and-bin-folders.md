---
title: Dossiers obj et bin
sidebar:
  order: 14
  label: 1.3.4 Dossiers obj et bin
---

**Contexte** : Les dossiers bin et obj sont générés lors de la compilation et contiennent la sortie compilée. Ils ne doivent pas être commités dans le contrôle de source.

Ces dossiers sont générés automatiquement lors de la compilation et contiennent la sortie compilée et les artefacts intermédiaires.

## Dossier /bin

- **bin/Debug/net10.0/** : Sortie de compilation Debug
- **bin/Release/net10.0/** : Sortie de compilation Release
- Contient : .exe, .dll, .pdb, .runtimeconfig.json

## Dossier /obj

- **Artefacts de compilation intermédiaires**
- **obj/Debug/net10.0/** : Fichiers objets, assemblys temporaires
- **obj/project.assets.json** : Cache des dépendances NuGet

## Bonnes pratiques

- **Ajouter à .gitignore** : Ne jamais committer bin/ ou obj/
- **Nettoyer** : `dotnet clean` supprime ces dossiers
- **Ne pas modifier manuellement**

```bash
# Nettoyer les artefacts de compilation
dotnet clean

# Supprimer les dossiers manuellement (Windows)
rmdir /s /q bin obj

# Supprimer les dossiers manuellement (Linux/macOS)
rm -rf bin obj
```
