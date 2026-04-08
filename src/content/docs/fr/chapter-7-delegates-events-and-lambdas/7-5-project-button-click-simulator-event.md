---
title: Projet Simulateur de clic de bouton (événement)
sidebar:
  order: 181
  label: 7.5 Projet Simulateur de clic de bouton (événement)
---

**Contexte** : Construisez une application console qui simule un bouton avec un événement `Click`. Des abonnés (par exemple, un journaliseur et un notificateur) réagissent au clic.

## Exigences

1. Créez une classe `Button` avec un événement `Click` (selon le pattern `EventHandler`).
2. Fournissez une méthode `SimulateClick()` qui lève l’événement.
3. Créez deux classes abonnées : `LoggingSubscriber` et `NotificationSubscriber`.
4. Abonnez les deux à l’événement `Click` du bouton.
5. Simulez des clics et observez la sortie.

## Code complet

```csharp
using System;

// EventArgs personnalisé (optionnel, mais suit le pattern)
public class ButtonClickEventArgs : EventArgs
{
    public DateTime ClickTime { get; set; }
    public string ButtonName { get; set; }
}

// Classe Button
public class Button
{
    public string Name { get; set; }

    public event EventHandler<ButtonClickEventArgs> Click;

    public Button(string name) => Name = name;

    protected virtual void OnClick(ButtonClickEventArgs e)
    {
        Click?.Invoke(this, e);
    }

    public void SimulateClick()
    {
        Console.WriteLine($"[{Name}] Bouton cliqué !");
        var args = new ButtonClickEventArgs
        {
            ClickTime = DateTime.Now,
            ButtonName = Name
        };
        OnClick(args);
    }
}

// Abonné 1 : Journalisation
public class LoggingSubscriber
{
    public void Subscribe(Button button)
    {
        button.Click += OnButtonClick;
    }

    private void OnButtonClick(object sender, ButtonClickEventArgs e)
    {
        Console.WriteLine($"[LOG] Bouton '{e.ButtonName}' cliqué à {e.ClickTime:HH:mm:ss}");
    }
}

// Abonné 2 : Notification
public class NotificationSubscriber
{
    public void Subscribe(Button button)
    {
        button.Click += OnButtonClick;
    }

    private void OnButtonClick(object sender, ButtonClickEventArgs e)
    {
        Console.WriteLine($"[NOTIFY] Vous avez cliqué sur {e.ButtonName} !");
    }
}

// Programme principal
public class Program
{
    static void Main()
    {
        Console.WriteLine("=== Simulateur de clic de bouton avec événements ===\n");

        Button myButton = new Button("Envoyer");

        var logger = new LoggingSubscriber();
        var notifier = new NotificationSubscriber();

        logger.Subscribe(myButton);
        notifier.Subscribe(myButton);

        myButton.SimulateClick();
        Console.WriteLine();
        myButton.SimulateClick();
    }
}
```

## Exemple d’exécution

```bash
=== Simulateur de clic de bouton avec événements ===

[Envoyer] Bouton cliqué !
[LOG] Bouton 'Envoyer' cliqué à 14:23:05
[NOTIFY] Vous avez cliqué sur Envoyer !

[Envoyer] Bouton cliqué !
[LOG] Bouton 'Envoyer' cliqué à 14:23:06
[NOTIFY] Vous avez cliqué sur Envoyer !
```

## Exemple d'utilisation dans le monde réel

**Frameworks d’interface graphique** : Ce projet imite le fonctionnement réel des boutons dans WinForms, WPF ou MAUI. L’événement `Click` notifie plusieurs abonnés (mise à jour de l’interface, sauvegarde de données, lecture d’un son).

**Exemple** : [Windows Forms Button.Click](https://docs.microsoft.com/en-us/dotnet/api/system.windows.forms.control.click) fonctionne exactement de cette manière.

## Sections connexes

- [7.2 Événements](/fr/chapter-7-delegates-events-and-lambdas/7-2-events)
- [7.2.4 Pattern standard EventHandler et EventArgs](/fr/chapter-7-delegates-events-and-lambdas/7-2-4-standard-pattern-eventhandler-and-eventargs)
