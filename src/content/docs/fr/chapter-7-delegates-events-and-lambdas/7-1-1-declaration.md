---
title: Déclaration
sidebar:
  order: 164
  label: 7.1.1 Déclaration
---

**Contexte** : Déclarez un délégué en utilisant le mot‑clé `delegate`, en spécifiant le type de retour et les types des paramètres.

## Syntaxe

```csharp
[modificateur d'accès] delegate typeRetour NomDelegate(paramètres);
```

## Exemple

```csharp
public delegate void PrintMessage(string message);
public delegate int Calculator(int a, int b);
```

## Le délégué comme type

Les délégués sont des types référence. Vous pouvez les déclarer au niveau de l’espace de noms ou de la classe.

```csharp
public class MathOperations
{
    public delegate double Operation(double x, double y);
}
```

## Exemple d'utilisation dans le monde réel

**Définition de callbacks personnalisés** : Dans les frameworks UI, vous pourriez déclarer un délégué pour des callbacks de validation (ex. `delegate bool ValidateInput(string input)`).

**Exemple** : Dans [ASP.NET Core](https://docs.microsoft.com/en-us/aspnet/core/fundamentals/middleware), les middlewares personnalisés utilisent souvent des déclarations de délégués pour le traitement des requêtes.

## Sections connexes

- [7.1 Délégués](/fr/chapter-7-delegates-events-and-lambdas/7-1-delegates)
- [7.1.2 Instanciation et invocation](/fr/chapter-7-delegates-events-and-lambdas/7-1-2-instantiation-invocation)
