---
title: Lambdas à instructions
sidebar:
  order: 175
  label: 7.3.2 Lambdas à instructions
---

**Contexte** : Les lambdas à instructions ont un bloc d’instructions entre accolades `{}`. Elles peuvent contenir plusieurs instructions, boucles, conditions et même des variables locales.

```csharp
Action<int> printSquare = x =>
{
    int square = x * x;
    Console.WriteLine($"Le carré de {x} est {square}");
};
printSquare(5);
```

## Avec valeur de retour

```csharp
Func<int, int, int> max = (a, b) =>
{
    if (a > b) return a;
    return b;
};
```

## Utilisation dans LINQ (moins courante mais possible)

```csharp
var numbers = new List<int> { 1, 2, 3, 4 };
var evenSquares = numbers.Where(x => x % 2 == 0)
                         .Select(x =>
                         {
                             int square = x * x;
                             return square;
                         });
```

## Exemple d'utilisation dans le monde réel

**Gestionnaires d’événements complexes** : Lorsqu’un gestionnaire d’événement nécessite plusieurs étapes (journalisation, validation, traitement), utilisez une lambda à instructions.

**Exemple** : Dans [WinForms](https://docs.microsoft.com/en-us/dotnet/desktop/winforms/), vous pouvez écrire `button.Click += (s, e) => { MessageBox.Show("Salut"); LogClick(); };`.

## Sections connexes

- [7.3 Expressions lambda](/fr/chapter-7-delegates-events-and-lambdas/7-3-lambda-expressions)
- [7.3.1 Syntaxe](/fr/chapter-7-delegates-events-and-lambdas/7-3-1-syntax)
