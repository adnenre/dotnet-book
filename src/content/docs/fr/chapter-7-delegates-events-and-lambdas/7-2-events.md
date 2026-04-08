---
title: Événements
sidebar:
  order: 168
  label: 7.2 Événements
---

**Contexte** : Les événements permettent à une classe d’en informer d’autres lorsqu’un événement se produit. Ils sont basés sur les délégués et fournissent un modèle publication‑abonnement.

Les événements sont déclarés avec le mot‑clé `event` et un type délégué. Seule la classe déclarante peut invoquer l’événement ; les abonnés ne peuvent qu’ajouter ou supprimer des gestionnaires.

```csharp
public class Button
{
    public event EventHandler Clicked;
    protected virtual void OnClicked() => Clicked?.Invoke(this, EventArgs.Empty);
}
```

## Exemple d'utilisation dans le monde réel

**Frameworks UI** : Les boutons, zones de texte et autres contrôles exposent des événements comme `Click`, `TextChanged`, `MouseMove` auxquels votre code peut s’abonner.

**Exemple** : Dans [WinForms](https://docs.microsoft.com/en-us/dotnet/desktop/winforms/), chaque contrôle a des événements. [ASP.NET Core Blazor](https://docs.microsoft.com/en-us/aspnet/core/blazor/components/event-handling) utilise également des événements pour la communication entre composants.

## Sections connexes

- [7.2.1 Mot‑clé event](/fr/chapter-7-delegates-events-and-lambdas/7-2-1-event-keyword)
- [7.2.2 Abonnement et désabonnement](/fr/chapter-7-delegates-events-and-lambdas/7-2-2-subscribing-and-unsubscribing)
- [7.2.3 Invocation d’événement](/fr/chapter-7-delegates-events-and-lambdas/7-2-3-event-invocation)
- [7.2.4 Pattern standard EventHandler et EventArgs](/fr/chapter-7-delegates-events-and-lambdas/7-2-4-standard-pattern-eventhandler-and-eventargs)
