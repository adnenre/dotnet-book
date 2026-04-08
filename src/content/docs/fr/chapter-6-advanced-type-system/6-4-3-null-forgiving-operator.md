---
title: Opérateur de suppression de null
sidebar:
  order: 153
  label: 6.4.3 Opérateur de suppression de null
---

**Contexte** : L’opérateur de suppression de null (`!`) supprime les avertissements nullable lorsque vous êtes certain qu’une expression n’est pas nulle.

```csharp
#nullable enable
string? maybeNull = GetString();
int length = maybeNull!.Length; // pas d’avertissement, mais risqué
```

## Cas d’utilisation

- Lorsque vous savez qu’une valeur n’est pas nulle malgré l’analyse du compilateur
- Pour les tests unitaires où vous assignez intentionnellement null
- Interopérabilité avec des frameworks qui utilisent des types non nullables mais peuvent retourner null

## Exemple d'utilisation dans le monde réel

**Injection de dépendances** : Lorsque vous enregistrez un service comme non nullable mais que le conteneur DI le garantit, vous pouvez utiliser `!` après la résolution.

```csharp
var service = services.GetRequiredService<IMyService>()!;
```

**Exemple** : Dans [ASP.NET Core](https://docs.microsoft.com/en-us/aspnet/core/fundamentals/dependency-injection), `GetRequiredService` lève une exception si non trouvé, donc utiliser `!` est sûr.

## Sections connexes

- [6.4 Types référence nullables](/fr/chapter-6-advanced-type-system/6-4-nullable-reference-types)
- [6.4.1 string point d’interrogation référence nullable](/fr/chapter-6-advanced-type-system/6-4-1-string-question-mark-nullable-reference)
