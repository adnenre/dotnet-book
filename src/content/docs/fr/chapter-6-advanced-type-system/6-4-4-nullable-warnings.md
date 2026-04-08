---
title: Avertissements nullable
sidebar:
  order: 154
  label: 6.4.4 Avertissements nullable
---

**Contexte** : Lorsque les annotations nullable sont activées, le compilateur produit des avertissements pour les opérations potentiellement non sécurisées avec des null.

## Avertissements courants

- **CS8618** : Propriété non nullable non initialisée
- **CS8600** : Conversion de littéral null en type non nullable
- **CS8602** : Déréférencement d’une référence possiblement nulle
- **CS8625** : Impossible de convertir un littéral null en type non nullable

## Correction des avertissements

```csharp
public class Person
{
    public string Name { get; set; } // CS8618
}
// Correction : initialiser
public class Person
{
    public string Name { get; set; } = "";
}
```

## Utilisation de vérifications nullable

```csharp
string? name = GetName();
if (name != null)
{
    int length = name.Length; // pas d’avertissement
}
// Ou avec l’opérateur null‑conditionnel
int? length = name?.Length;
```

## Exemple d'utilisation dans le monde réel

**Normes de codage d’équipe** : Appliquez les avertissements nullable comme erreurs dans l’intégration continue (CI/CD) pour prévenir les exceptions de référence nulle en production.

**Exemple** : Dans un workflow [GitHub Actions](https://docs.microsoft.com/en-us/dotnet/devops/ci-cd/github-actions), ajoutez `-p:WarningsAsErrors=nullable` à `dotnet build`.

## Sections connexes

- [6.4 Types référence nullables](/fr/chapter-6-advanced-type-system/6-4-nullable-reference-types)
- [6.4.2 Contexte d’annotation nullable](/fr/chapter-6-advanced-type-system/6-4-2-nullable-annotation-context)
