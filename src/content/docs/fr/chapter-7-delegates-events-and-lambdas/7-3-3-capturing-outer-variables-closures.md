---
title: Capture de variables externes (fermetures)
sidebar:
  order: 176
  label: 7.3.3 Capture de variables externes (fermetures)
---

**Contexte** : Les lambdas peuvent capturer des variables de la portée englobante. Les variables capturées sont stockées dans une fermeture et vivent aussi longtemps que la lambda.

```csharp
int factor = 2;
Func<int, int> multiplier = x => x * factor;
Console.WriteLine(multiplier(5)); // 10

factor = 3;
Console.WriteLine(multiplier(5)); // 15 (capture par référence)
```

## Capture de variables locales

```csharp
List<Action> actions = new List<Action>();
for (int i = 0; i < 3; i++)
{
    int captured = i;
    actions.Add(() => Console.WriteLine(captured));
}
foreach (var a in actions) a(); // 0,1,2 (pas 3,3,3)
```

## Implications sur les performances

La capture peut entraîner des allocations (objets de fermeture). Évitez la capture dans les boucles critiques pour la performance.

## Exemple d'utilisation dans le monde réel

**Continuation de tâche** : Capturer `userId` dans une continuation de tâche asynchrone.

```csharp
int userId = GetUserId();
Task.Run(() => ProcessUser(userId));
```

**Exemple** : Dans [ASP.NET Core](https://docs.microsoft.com/en-us/aspnet/core/fundamentals/middleware), les lambdas dans les middlewares capturent souvent des valeurs de configuration.

## Sections connexes

- [7.3 Expressions lambda](/fr/chapter-7-delegates-events-and-lambdas/7-3-lambda-expressions)
- [7.3.2 Lambdas à instructions](/fr/chapter-7-delegates-events-and-lambdas/7-3-2-statement-lambdas)
