---
title: Modificateurs d'accès
sidebar:
  order: 81
  label: 4.2.1 Modificateurs d'accès
---

**Contexte** : Les modificateurs d'accès contrôlent la visibilité des types et de leurs membres.

| Modificateur         | Accessibilité                          |
| -------------------- | -------------------------------------- |
| `public`             | Tout code                              |
| `private`            | Seulement dans la même classe          |
| `protected`          | Dans la classe ou les classes dérivées |
| `internal`           | Dans le même assembly                  |
| `protected internal` | Même assembly OU classes dérivées      |
| `private protected`  | Même assembly ET classes dérivées      |

## Exemple

```csharp
public class Vehicule
{
    private string _vin;
    protected int _roues;
    internal string _modele;
    public void Demarrer() { }
}
```
