---
title: Syntaxe
sidebar:
  order: 174
  label: 7.3.1 Syntaxe
---

**Contexte** : Syntaxe lambda : `(paramètres) => expression`. L’opérateur `=>` est l’opérateur lambda.

## Sans paramètre

```csharp
Action greet = () => Console.WriteLine("Bonjour");
```

## Un paramètre (parenthèses optionnelles)

```csharp
Func<int, int> doubleIt = x => x * 2;
```

## Plusieurs paramètres

```csharp
Func<int, int, int> add = (a, b) => a + b;
```

## Paramètres typés explicitement

```csharp
Func<int, string> toString = (int x) => x.ToString();
```

## Exemple d'utilisation dans le monde réel

**Gestionnaires d’événements** : Utilisez une lambda pour une gestion d’événement simple sans méthode séparée.

```csharp
button.Click += (sender, e) => Console.WriteLine("Cliqué");
```

**Exemple** : Dans [ASP.NET Core Minimal APIs](https://docs.microsoft.com/en-us/aspnet/core/fundamentals/minimal-apis), les lambdas sont utilisées comme gestionnaires de point de terminaison : `app.MapGet("/", () => "Bonjour")`.

## Sections connexes

- [7.3 Expressions lambda](/fr/chapter-7-delegates-events-and-lambdas/7-3-lambda-expressions)
- [7.3.2 Lambdas à instructions](/fr/chapter-7-delegates-events-and-lambdas/7-3-2-statement-lambdas)
