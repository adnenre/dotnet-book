---
title: Encapsulation
sidebar:
  order: 80
  label: 4.2 Encapsulation
---

**Contexte** : L'encapsulation cache l'état interne et oblige à interagir via des méthodes/propriétés publiques. Elle protège l'intégrité des données et réduit le couplage.

```csharp
public class CompteBancaire
{
    private decimal _solde;  // caché
    public void Deposer(decimal montant)
    {
        if (montant > 0) _solde += montant;
    }
    public decimal GetSolde() => _solde;
}
```

## Sujets connexes

- 4.2.1 Modificateurs d'accès
- 4.2.2 Accesseurs de propriété
- 4.2.3 Propriétés auto-implémentées
