---
title: Strategy
sidebar:
  order: 120
  label: 5.3.1 Strategy
---

**Contexte** : Définir une famille d’algorithmes, les encapsuler chacun, et les rendre interchangeables. Strategy permet à l’algorithme de varier indépendamment des clients qui l’utilisent.

```csharp
public interface IStrategy
{
    void Execute();
}

public class ConcreteStrategyA : IStrategy
{
    public void Execute() => Console.WriteLine("Strategy A");
}

public class Context
{
    private IStrategy _strategy;
    public void SetStrategy(IStrategy strategy) => _strategy = strategy;
    public void DoWork() => _strategy.Execute();
}
```

## Exemple d'utilisation dans le monde réel

**Traitement des paiements** : Un site e‑commerce sélectionne différentes stratégies : `CreditCardStrategy`, `PayPalStrategy`, `CryptoStrategy` selon le choix de l’utilisateur. Le `CheckoutContext` utilise la stratégie sélectionnée pour calculer le montant final.

**Exemple** : Le tri dans .NET : [`List<T>.Sort(IComparer<T>)`](https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.list-1.sort) permet d’injecter différentes stratégies de comparaison (par nom, par prix, par date). De même, [`System.Text.Encoding`](https://docs.microsoft.com/en-us/dotnet/api/system.text.encoding) propose des stratégies pour différents encodages de caractères.

## Sections connexes

- [5.3 Patrons comportementaux](/fr/chapter-5-design-patterns-for-backend-development/5-3-behavioural-patterns)
- [5.3.2 Command](/fr/chapter-5-design-patterns-for-backend-development/5-3-2-command)
