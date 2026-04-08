---
title: Invocation d’événement
sidebar:
  order: 171
  label: 7.2.3 Invocation d’événement
---

**Contexte** : Seule la classe qui déclare l’événement peut l’invoquer (lever l’événement). L’invocation se fait en appelant le champ délégué (avec vérification null).

## Pattern d’invocation standard

```csharp
public class Button
{
    public event EventHandler Clicked;

    protected virtual void OnClicked()
    {
        Clicked?.Invoke(this, EventArgs.Empty);
    }

    public void SimulateClick()
    {
        OnClicked();
    }
}
```

## Pourquoi `protected virtual` ?

Les classes dérivées peuvent surcharger la méthode de déclenchement pour ajouter un comportement personnalisé.

```csharp
public class SpecialButton : Button
{
    protected override void OnClicked()
    {
        Console.WriteLine("Journalisation spéciale");
        base.OnClicked();
    }
}
```

## Sécurité thread

Utilisez une copie du délégué pour éviter une référence null dans les scénarios multi‑threads.

```csharp
var handler = Clicked;
if (handler != null) handler(this, EventArgs.Empty);
```

## Exemple d'utilisation dans le monde réel

**Déclenchement d’événement personnalisé** : Dans une classe `Timer`, vous levez l’événement `Elapsed` lorsque le temps est écoulé via `OnElapsed()`.

**Exemple** : [`System.Timers.Timer`](https://docs.microsoft.com/en-us/dotnet/api/system.timers.timer) lève l’événement `Elapsed` sur un thread d’arrière‑plan.

## Sections connexes

- [7.2 Événements](/fr/chapter-7-delegates-events-and-lambdas/7-2-events)
- [7.2.4 Pattern standard EventHandler et EventArgs](/fr/chapter-7-delegates-events-and-lambdas/7-2-4-standard-pattern-eventhandler-and-eventargs)
