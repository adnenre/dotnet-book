---
title: Projet Système de stratégie de remise
sidebar:
  order: 133
  label: 5.5 Projet Système de stratégie de remise
---

**Contexte** : Construire une application console qui applique différentes stratégies de remise à une commande en fonction du type de client ou du montant total. Ce projet utilise le pattern Strategy.

## Code complet

--codecsharp
using System;

public interface IDiscountStrategy
{
decimal CalculateDiscount(decimal total);
}

public class NoDiscount : IDiscountStrategy
{
public decimal CalculateDiscount(decimal total) => 0;
}

public class PercentageDiscount : IDiscountStrategy
{
private readonly decimal \_percentage;
public PercentageDiscount(decimal percentage) => \_percentage = percentage;
public decimal CalculateDiscount(decimal total) => total \* \_percentage / 100;
}

public class FixedAmountDiscount : IDiscountStrategy
{
private readonly decimal \_amount;
public FixedAmountDiscount(decimal amount) => \_amount = amount;
public decimal CalculateDiscount(decimal total) => Math.Min(\_amount, total);
}

public class SeasonalDiscount : IDiscountStrategy
{
public decimal CalculateDiscount(decimal total) => total \* 0.15m;
}

public class Order
{
public decimal Total { get; set; }
private IDiscountStrategy \_discountStrategy;

    public void SetDiscountStrategy(IDiscountStrategy strategy)
    {
        _discountStrategy = strategy;
    }

    public decimal GetFinalTotal()
    {
        if (_discountStrategy == null) return Total;
        return Total - _discountStrategy.CalculateDiscount(Total);
    }

}

public class Program
{
static void Main()
{
Console.WriteLine("=== Discount Strategy System ===");
Console.Write("Enter order total: ");
decimal total = decimal.Parse(Console.ReadLine());

        var order = new Order { Total = total };

        Console.WriteLine("Select discount strategy:");
        Console.WriteLine("1. No discount");
        Console.WriteLine("2. Percentage discount (10%)");
        Console.WriteLine("3. Fixed amount discount ($20)");
        Console.WriteLine("4. Seasonal discount (15%)");
        Console.Write("Choice: ");
        string choice = Console.ReadLine();

        switch (choice)
        {
            case "1": order.SetDiscountStrategy(new NoDiscount()); break;
            case "2": order.SetDiscountStrategy(new PercentageDiscount(10)); break;
            case "3": order.SetDiscountStrategy(new FixedAmountDiscount(20)); break;
            case "4": order.SetDiscountStrategy(new SeasonalDiscount()); break;
            default: order.SetDiscountStrategy(new NoDiscount()); break;
        }

        Console.WriteLine($"Original total: {total:C}");
        Console.WriteLine($"Final total after discount: {order.GetFinalTotal():C}");
    }

}
--code

## Exemple d’exécution

--codebash
=== Discount Strategy System ===
Enter order total: 100
Select discount strategy:

1. No discount
2. Percentage discount (10%)
3. Fixed amount discount ($20)
4. Seasonal discount (15%)
   Choice: 2
   Original total: $100.00
   Final total after discount: $90.00
   --code

## Exemple d'utilisation dans le monde réel

**Panier e‑commerce** : Le pattern Strategy de remise permet de changer dynamiquement de promotion – Black Friday (pourcentage), programme de fidélité (montant fixe), ou soldes saisonnières. La classe `Order` reste inchangée lorsque de nouveaux types de remise sont ajoutés. Ceci est similaire à la façon dont [`IComparer<T>`](https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.icomparer-1) permet d’injecter différentes stratégies de tri.

## Sections connexes

- [5.3.1 Strategy](/fr/chapter-5-design-patterns-for-backend-development/5-3-1-strategy)
- [5.4.3 Dependency Injection](/fr/chapter-5-design-patterns-for-backend-development/5-4-3-dependency-injection)
