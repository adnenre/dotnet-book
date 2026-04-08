---
title: Mot‑clé delegate (avant lambda)
sidebar:
  order: 179
  label: 7.4.1 Mot‑clé delegate (avant lambda)
---

**Contexte** : Avant C# 3.0, les méthodes anonymes s’écrivaient avec le mot‑clé `delegate`. Elles sont encore utilisables mais largement remplacées par les lambdas.

## Syntaxe

```csharp
delegate(paramètres) { instructions }
```

## Exemples

```csharp
Action<string> print = delegate(string msg)
{
    Console.WriteLine(msg);
};

Func<int, int> doubleIt = delegate(int x)
{
    return x * 2;
};
```

## Capture de variables externes

Identique aux lambdas : elles créent des fermetures.

```csharp
int factor = 3;
Func<int, int> multiply = delegate(int x) { return x * factor; };
```

## Exemple d'utilisation dans le monde réel

**Compatibilité avec C# 2.0** : Si vous devez écrire du code compilable sur .NET Framework 2.0, vous devez utiliser des méthodes anonymes au lieu des lambdas.

**Exemple** : Dans certains [ASP.NET WebForms](https://docs.microsoft.com/en-us/aspnet/web-forms/) hérités, vous pouvez encore voir `delegate` utilisé dans les gestionnaires d’événements.

## Sections connexes

- [7.4 Fonctions anonymes](/fr/chapter-7-delegates-events-and-lambdas/7-4-anonymous-functions)
- [7.4.2 Comparaison avec les lambdas](/fr/chapter-7-delegates-events-and-lambdas/7-4-2-comparison-with-lambdas)
