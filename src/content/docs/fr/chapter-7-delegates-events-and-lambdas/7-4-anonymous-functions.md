---
title: Fonctions anonymes
sidebar:
  order: 178
  label: 7.4 Fonctions anonymes
---

**Contexte** : Les fonctions anonymes sont des méthodes sans nom. C# en a deux sortes : les expressions lambda et les méthodes anonymes (avec le mot‑clé `delegate`).

```csharp
// Méthode anonyme (avant C# 3.0)
Func<int, int> square = delegate(int x) { return x * x; };

// Expression lambda (C# 3.0+)
Func<int, int> squareLambda = x => x * x;
```

## Exemple d'utilisation dans le monde réel

**Bases de code héritées** : Les anciens codes .NET Framework utilisent souvent des méthodes anonymes là où les lambdas n’étaient pas disponibles (C# 2.0).

**Exemple** : Dans [WinForms](https://docs.microsoft.com/en-us/dotnet/desktop/winforms/), vous pouvez encore voir `button.Click += delegate(object sender, EventArgs e) { ... };`.

## Sections connexes

- [7.4.1 Mot‑clé delegate (avant lambda)](/fr/chapter-7-delegates-events-and-lambdas/7-4-1-delegate-keyword-pre-lambda)
- [7.4.2 Comparaison avec les lambdas](/fr/chapter-7-delegates-events-and-lambdas/7-4-2-comparison-with-lambdas)
