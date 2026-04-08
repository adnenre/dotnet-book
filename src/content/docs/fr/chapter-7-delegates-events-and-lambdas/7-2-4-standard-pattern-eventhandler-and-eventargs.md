---
title: Pattern standard EventHandler et EventArgs
sidebar:
  order: 172
  label: 7.2.4 Pattern standard EventHandler et EventArgs
---

**Contexte** : Le pattern d’événement standard .NET utilise le délégué `EventHandler` et `EventArgs` (ou une classe dérivée) pour transmettre les données de l’événement.

## Délégué `EventHandler`

```csharp
public delegate void EventHandler(object sender, EventArgs e);
public delegate void EventHandler<TEventArgs>(object sender, TEventArgs e);
```

## EventArgs personnalisés

```csharp
public class OrderEventArgs : EventArgs
{
    public int OrderId { get; set; }
    public decimal Amount { get; set; }
}
```

## Implémentation du pattern

```csharp
public class OrderProcessor
{
    public event EventHandler<OrderEventArgs> OrderProcessed;

    protected virtual void OnOrderProcessed(OrderEventArgs e)
    {
        OrderProcessed?.Invoke(this, e);
    }

    public void Process(int orderId, decimal amount)
    {
        // logique de traitement
        OnOrderProcessed(new OrderEventArgs { OrderId = orderId, Amount = amount });
    }
}
```

## Exemple d'utilisation dans le monde réel

**Tous les frameworks UI .NET** : `Button.Click` utilise `EventHandler`. `Form.Load` utilise `EventHandler`. `DataGridView.CellClick` utilise `DataGridViewCellEventArgs` dérivé de `EventArgs`.

**Exemple** : La documentation de [`System.EventArgs`](https://docs.microsoft.com/en-us/dotnet/api/system.eventargs) montre de nombreux types dérivés.

## Sections connexes

- [7.2 Événements](/fr/chapter-7-delegates-events-and-lambdas/7-2-events)
- [7.5 Projet Simulateur de clic de bouton (événement)](/fr/chapter-7-delegates-events-and-lambdas/7-5-project-button-click-simulator-event)
