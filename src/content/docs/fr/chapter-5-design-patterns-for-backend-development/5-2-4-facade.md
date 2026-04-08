---
title: Facade
sidebar:
  order: 115
  label: 5.2.4 Facade
---

**Contexte** : Fournir une interface unifiée à un ensemble d’interfaces d’un sous‑système. Facade définit une interface de plus haut niveau qui rend le sous‑système plus facile à utiliser.

```csharp
public class SubsystemA { public void A1() { } }
public class SubsystemB { public void B1() { } }
public class SubsystemC { public void C1() { } }

public class Facade
{
    private SubsystemA _a = new();
    private SubsystemB _b = new();
    private SubsystemC _c = new();
    public void Operation()
    {
        _a.A1();
        _b.B1();
        _c.C1();
    }
}
```

## Exemple d'utilisation dans le monde réel

**Système de traitement des commandes** : Une `OrderFacade` appelle les sous‑systèmes d’inventaire, de paiement, d’expédition et de notification dans le bon ordre, masquant la complexité au client.

**Exemple** : Dans .NET, [`HttpClient`](https://docs.microsoft.com/en-us/dotnet/api/system.net.http.httpclient) fournit une façade sur les composants de socket, DNS et TLS de bas niveau. De même, [`DbContext`](https://docs.microsoft.com/en-us/dotnet/api/microsoft.entityframeworkcore.dbcontext) dans EF Core est une façade sur les objets de connexion, commande et transaction.

## Sections connexes

- [5.2 Patrons structurels](/fr/chapter-5-design-patterns-for-backend-development/5-2-structural-patterns)
- [5.2.3 Decorator](/fr/chapter-5-design-patterns-for-backend-development/5-2-3-decorator)
- [5.2.5 Bridge](/fr/chapter-5-design-patterns-for-backend-development/5-2-5-bridge)
