---
title: La classe static ne peut pas être instanciée
sidebar:
  order: 103
  label: 4.6.3 La classe static ne peut pas être instanciée
---

**Contexte** : Une classe `static` ne peut contenir que des membres statiques et ne peut être ni instanciée ni héritée.

```csharp
public static class Utilitaire
{
    public static int Ajouter(int a, int b) => a + b;
    public static double Pi = 3.14159;
}
```

## Règles

- Pas de constructeur d'instance.
- Ne peut pas être utilisée comme classe de base.
- Tous les membres doivent être statiques.
