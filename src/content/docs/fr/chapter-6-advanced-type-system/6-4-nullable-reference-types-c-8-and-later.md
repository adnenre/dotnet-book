---
title: Types référence nullables (C# 8 et ultérieur)
sidebar:
  order: 150
  label: 6.4 Types référence nullables (C# 8+)
---

**Contexte** : Les types référence nullables aident à prévenir les exceptions de référence nulle en distinguant les types référence nullables et non nullables.

```csharp
#nullable enable
string nonNullable = "Hello";
string? nullable = null;
nonNullable = nullable; // avertissement
```

## Exemple d'utilisation dans le monde réel

**Contrats d’API** : Marquez les champs optionnels comme `string?` et les champs requis comme `string`. Cela documente le contrat et le compilateur applique les vérifications de null.

**Exemple** : Dans ASP.NET Core, la liaison de modèle respecte les annotations nullables. Le générateur [Swagger/OpenAPI](https://docs.microsoft.com/en-us/aspnet/core/tutorials/getting-started-with-swashbuckle) les utilise pour marquer les paramètres optionnels.

## Sections connexes

- [6.4.1 string point d’interrogation référence nullable](/fr/chapter-6-advanced-type-system/6-4-1-string-question-mark-nullable-reference)
- [6.4.2 Contexte d’annotation nullable](/fr/chapter-6-advanced-type-system/6-4-2-nullable-annotation-context)
