---
title: Champs
sidebar:
  order: 77
  label: 4.1.3 Champs
---

**Contexte** : Les champs sont des variables déclarées directement dans une classe. Ils contiennent l'état d'un objet.

## Déclaration

```csharp
[modificateur d'accès] type nomChamp;
```

## Exemple

```csharp
public class Commande
{
    private int _id;
    public string NomClient;
    protected double _montantTotal;
}
```

## Initialisation

```csharp
public class Produit
{
    private int _stock = 100;   // initialisé
    private readonly string _sku; // doit être défini dans le constructeur
    public Produit(string sku) => _sku = sku;
}
```

## Accès

```csharp
Commande cmd = new Commande();
cmd.NomClient = "Acme Inc.";
```
