---
title: Contexte d’annotation nullable
sidebar:
  order: 152
  label: 6.4.2 Contexte d’annotation nullable
---

**Contexte** : Le contexte d’annotation nullable est contrôlé par les directives `#nullable`. Il active ou désactive les avertissements et annotations nullable.

## Directives

```csharp
#nullable enable   // Active les annotations et avertissements nullable
#nullable disable  // Désactive (par défaut pour le code hérité)
#nullable restore  // Restaure le paramètre par défaut du projet
#nullable enable annotations  // Seulement les annotations
#nullable enable warnings     // Seulement les avertissements
```

## Paramètre au niveau du projet

Dans `.csproj` :

```xml
<PropertyGroup>
  <Nullable>enable</Nullable>
</PropertyGroup>
```

## Exemple d'utilisation dans le monde réel

**Migration de code hérité** : Utilisez `#nullable disable` en haut des anciens fichiers pour désactiver temporairement les avertissements pendant que vous activez progressivement les contextes nullables.

**Exemple** : [Le runtime .NET lui‑même](https://github.com/dotnet/runtime) a migré vers les types référence nullables fichier par fichier en utilisant cette technique.

## Sections connexes

- [6.4 Types référence nullables](/fr/chapter-6-advanced-type-system/6-4-nullable-reference-types)
- [6.4.4 Avertissements nullable](/fr/chapter-6-advanced-type-system/6-4-4-nullable-warnings)
