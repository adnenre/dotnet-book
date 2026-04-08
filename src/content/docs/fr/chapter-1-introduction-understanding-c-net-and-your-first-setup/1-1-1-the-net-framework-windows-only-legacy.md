---
title: .Net Framework Windows
sidebar:
  order: 2
  label: 1.1.1 .Net Framework Windows
---

**Contexte** : .NET Framework est l'implémentation originale Windows uniquement, maintenant considérée comme héritée. Cette section explique ses limitations et quand l'utiliser encore.

.NET Framework est l'implémentation originale de .NET, publiée pour la première fois en 2002. Il est **Windows uniquement** et considéré comme **hérité**, la version 4.8.1 étant la dernière version.

## Limitations

- Ne peut pas s'exécuter sur Linux ou macOS
- Étroitement intégré aux composants Windows (Registre, COM, Windows Forms, WPF)
- Cycle de publication plus lent
- Non inclus dans les stratégies cloud-native modernes

## Quand l'utiliser

- Maintenance d'applications Windows existantes (WinForms, WPF)
- Applications ASP.NET WebForms
- Services spécifiques à Windows

> **Note** : Pour les nouveaux développements, utilisez .NET 10 ou ultérieur.

```bash
# Vérifier les versions installées de .NET Framework
reg query "HKLM\SOFTWARE\Microsoft\NET Framework Setup\NDP"
```
