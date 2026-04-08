---
title: Instanciation et invocation
sidebar:
  order: 165
  label: 7.1.2 Instanciation et invocation
---

**Contexte** : Créez une instance de délégué en référençant une méthode (par son nom ou une expression lambda). Invoquez‑la comme une méthode.

## Instanciation

```csharp
public delegate void Display(string text);

public static void Show(string msg) => Console.WriteLine(msg);

// Syntaxe ancienne (C# 1.0)
Display d1 = new Display(Show);

// Syntaxe simplifiée (C# 2.0+)
Display d2 = Show;

// Avec expression lambda (C# 3.0+)
Display d3 = (msg) => Console.WriteLine(msg);
```

## Invocation

```csharp
d2("Hello"); // appelle Show
d3("World");
```

## Vérification null

Vérifiez toujours la présence de null avant d’invoquer un délégué.

```csharp
if (d2 != null) d2("Sûr");
// Ou avec l’opérateur null‑conditionnel
d2?.Invoke("Sûr");
```

## Exemple d'utilisation dans le monde réel

**Gestionnaires d’événements de bouton** : Dans Windows Forms ou WPF, vous instanciez un délégué pour connecter un événement de clic de bouton à une méthode.

**Exemple** : Dans [WinForms](https://docs.microsoft.com/en-us/dotnet/desktop/winforms/), `button.Click += new EventHandler(Button_Click);` instancie un délégué `EventHandler`.

## Sections connexes

- [7.1 Délégués](/fr/chapter-7-delegates-events-and-lambdas/7-1-delegates)
- [7.1.3 Délégués multicast](/fr/chapter-7-delegates-events-and-lambdas/7-1-3-multicast-delegates)
