---
title: Opérateurs streaming vs buffering
sidebar:
  order: 189
  label: 8.2.3 Opérateurs streaming vs buffering
---

**Contexte** : Les opérateurs streaming produisent les résultats un par un au fur et à mesure qu’ils itèrent sur la source. Les opérateurs buffering consomment toute la source avant de produire un résultat.

## Opérateurs streaming

`Where`, `Select`, `Take`, `Skip`, `SelectMany` (traitent les éléments à la volée).

```csharp
var streaming = numbers.Where(n => n > 2); // produit un par un
```

## Opérateurs buffering

`OrderBy`, `GroupBy`, `Distinct`, `Reverse` (nécessitent toutes les données).

```csharp
var buffered = numbers.OrderBy(n => n); // lit tous les nombres d’abord
```

## Exemple d'utilisation dans le monde réel

**Grands ensembles de données** : Utilisez les opérateurs streaming pour éviter de tout charger en mémoire. Évitez `OrderBy` sur d’énormes collections sauf si nécessaire.

**Exemple** : Dans [System.Reactive (Rx.NET)](https://github.com/dotnet/reactive), les opérateurs streaming sont utilisés pour les séquences infinies.

## Sections connexes

- [8.2 Exécution différée vs immédiate](/fr/chapter-8-linq-language-integrated-query/8-2-deferred-vs-immediate-execution)
- [8.4 Opérateurs courants](/fr/chapter-8-linq-language-integrated-query/8-4-common-operators)
