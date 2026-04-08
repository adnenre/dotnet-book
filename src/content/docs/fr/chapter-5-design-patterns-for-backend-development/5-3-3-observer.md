---
title: Observer
sidebar:
  order: 122
  label: 5.3.3 Observer
---

**Contexte** : Définir une dépendance un‑à‑plusieurs entre objets de sorte que lorsqu’un objet change d’état, tous ses dépendants soient notifiés et mis à jour automatiquement.

```csharp
public interface IObserver
{
    void Update(string message);
}

public class ConcreteObserver : IObserver
{
    private string _name;
    public ConcreteObserver(string name) => _name = name;
    public void Update(string message) => Console.WriteLine($"{_name} received: {message}");
}

public class Subject
{
    private List<IObserver> _observers = new();
    public void Attach(IObserver observer) => _observers.Add(observer);
    public void Notify(string message)
    {
        foreach (var o in _observers) o.Update(message);
    }
}
```

## Exemple d'utilisation dans le monde réel

**Gestion d’événements dans l’interface utilisateur** : Les boutons notifient tous les gestionnaires d’événements enregistrés lorsqu’ils sont cliqués. Plusieurs éléments UI peuvent écouter la même source de données et se rafraîchir lorsque les données changent.

**Exemple** : Dans .NET, [`INotifyPropertyChanged`](https://docs.microsoft.com/en-us/dotnet/api/system.componentmodel.inotifypropertychanged) est utilisé dans MVVM (WPF, MAUI). [`System.Reactive` (Rx.NET)](https://github.com/dotnet/reactive) implémente des séquences observables. Également, [`EventAggregator` dans Prism](https://github.com/PrismLibrary/Prism) et [`IObservable<T>` / `IObserver<T>`](https://docs.microsoft.com/en-us/dotnet/api/system.iobservable-1).

## Sections connexes

- [5.3 Patrons comportementaux](/fr/chapter-5-design-patterns-for-backend-development/5-3-behavioural-patterns)
- [5.3.2 Command](/fr/chapter-5-design-patterns-for-backend-development/5-3-2-command)
- [5.3.4 Chain of Responsibility](/fr/chapter-5-design-patterns-for-backend-development/5-3-4-chain-of-responsibility)
