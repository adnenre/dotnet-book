---
title: Abonnement et désabonnement
sidebar:
  order: 170
  label: 7.2.2 Abonnement et désabonnement
---

**Contexte** : Les abonnés ajoutent leurs gestionnaires d’événements avec `+=` et les retirent avec `-=`. Cela évite les fuites de mémoire lorsque l’abonné survit à l’éditeur.

## Abonnement

```csharp
Button button = new Button();
button.Clicked += OnButtonClicked; // abonnement

private void OnButtonClicked(object sender, EventArgs e)
{
    Console.WriteLine("Bouton cliqué");
}
```

## Désabonnement

```csharp
button.Clicked -= OnButtonClicked; // désabonnement
```

## Utilisation d’expressions lambda

```csharp
button.Clicked += (sender, e) => Console.WriteLine("Cliqué");
// Se désabonner d’une lambda est délicat ; stockez le délégué dans une variable.
EventHandler handler = (s, e) => Console.WriteLine("Cliqué");
button.Clicked += handler;
button.Clicked -= handler;
```

## Exemple d'utilisation dans le monde réel

**Pattern Dispose** : Dans les applications de longue durée, désabonnez‑vous toujours des événements dans la méthode `Dispose` pour éviter les fuites de mémoire.

**Exemple** : Dans [WinForms](https://docs.microsoft.com/en-us/dotnet/desktop/winforms/), les contrôles se désabonnent des événements lorsqu’ils sont supprimés.

## Sections connexes

- [7.2 Événements](/fr/chapter-7-delegates-events-and-lambdas/7-2-events)
- [7.2.3 Invocation d’événement](/fr/chapter-7-delegates-events-and-lambdas/7-2-3-event-invocation)
