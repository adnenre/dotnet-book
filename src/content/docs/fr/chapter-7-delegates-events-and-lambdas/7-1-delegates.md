---
title: Délégués
sidebar:
  order: 163
  label: 7.1 Délégués
---

**Contexte** : Les délégués sont des pointeurs de fonction type‑sécurisés qui référencent des méthodes avec une signature spécifique. Ils permettent les callbacks, la gestion d’événements et l’invocation flexible de méthodes.

Un délégué définit la signature d’une méthode. Vous pouvez assigner n’importe quelle méthode correspondante à une variable déléguée et l’invoquer.

```csharp
public delegate int MathOperation(int a, int b);

public static int Add(int x, int y) => x + y;
public static int Multiply(int x, int y) => x * y;

MathOperation op = Add;
int result = op(3, 4); // 7
```

## Exemple d'utilisation dans le monde réel

**Méthodes de rappel en programmation asynchrone** : Les délégués sont utilisés pour passer des méthodes de rappel à des opérations asynchrones, permettant l’exécution d’un code lorsque l’opération se termine.

**Exemple** : Dans .NET, [`Action<T>`](https://docs.microsoft.com/en-us/dotnet/api/system.action-1) et [`Func<TResult>`](https://docs.microsoft.com/en-us/dotnet/api/system.func-1) sont des délégués génériques largement utilisés dans LINQ, la bibliothèque parallèle Task et la gestion d’événements.

## Sections connexes

- [7.1.1 Déclaration](/fr/chapter-7-delegates-events-and-lambdas/7-1-1-declaration)
- [7.1.2 Instanciation et invocation](/fr/chapter-7-delegates-events-and-lambdas/7-1-2-instantiation-invocation)
- [7.1.3 Délégués multicast](/fr/chapter-7-delegates-events-and-lambdas/7-1-3-multicast-delegates)
- [7.1.4 Délégués génériques Action Func Predicate](/fr/chapter-7-delegates-events-and-lambdas/7-1-4-generic-delegates-action-func-predicate)
