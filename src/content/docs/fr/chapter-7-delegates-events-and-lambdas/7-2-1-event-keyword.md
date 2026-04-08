---
title: Mot‑clé event
sidebar:
  order: 169
  label: 7.2.1 Mot‑clé event
---

**Contexte** : Le mot‑clé `event` restreint l’utilisation d’un champ délégué. Seule la classe déclarante peut invoquer l’événement ; le code externe ne peut qu’ajouter ou supprimer des gestionnaires.

## Déclaration

```csharp
public class Publisher
{
    public event EventHandler SomethingHappened;
}
```

## Dans les coulisses

Le compilateur crée un champ délégué privé et ajoute des accesseurs `add` et `remove`.

```csharp
// Équivalent approximatif
private EventHandler _somethingHappened;
public event EventHandler SomethingHappened
{
    add { _somethingHappened += value; }
    remove { _somethingHappened -= value; }
}
```

## Accesseurs d’événement personnalisés

Vous pouvez fournir votre propre logique add/remove.

```csharp
private EventHandler _handlers;
public event EventHandler MyEvent
{
    add { _handlers += value; Console.WriteLine("Ajouté"); }
    remove { _handlers -= value; Console.WriteLine("Supprimé"); }
}
```

## Exemple d'utilisation dans le monde réel

**Notification de changement de propriété** : Dans les frameworks MVVM, l’événement `PropertyChanged` est déclaré avec `event`, permettant à la vue de s’abonner.

**Exemple** : [`INotifyPropertyChanged`](https://docs.microsoft.com/en-us/dotnet/api/system.componentmodel.inotifypropertychanged) utilise un événement `PropertyChanged`.

## Sections connexes

- [7.2 Événements](/fr/chapter-7-delegates-events-and-lambdas/7-2-events)
- [7.2.2 Abonnement et désabonnement](/fr/chapter-7-delegates-events-and-lambdas/7-2-2-subscribing-and-unsubscribing)
