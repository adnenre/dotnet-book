---
title: Structure de projet
sidebar:
  order: 10
  label: 1.3 Structure de projet
---

**Contexte** : Un projet .NET typique a une structure définie : fichier .csproj, Program.cs, appsettings.json, dossiers bin/obj. Cela s'applique aux projets .NET 10.

Un projet .NET typique a une structure bien définie avec des fichiers et dossiers spécifiques.

## Composants principaux

- **.csproj** : Fichier XML avec références de paquets
- **Program.cs** : Point d'entrée de l'application
- **appsettings.json** : Fichier de configuration
- **/bin** : Binaires compilés
- **/obj** : Objets de build intermédiaires

## Sujets connexes

- 1.3.1 Fichier csproj format XML et références de paquets
- 1.3.2 Program.cs point d'entrée
- 1.3.3 Configuration appsettings.json
- 1.3.4 Dossiers obj et bin

```bash
# Créer un nouveau projet pour voir la structure
dotnet new console -n ProjetDemo
cd ProjetDemo
tree /F
```
