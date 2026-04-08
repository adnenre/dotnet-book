---
title: Constructeur static
sidebar:
  order: 102
  label: 4.6.2 Constructeur static
---

**Contexte** : Un constructeur static initialise les champs statiques ou effectue une configuration unique. Il est appelé automatiquement avant le premier accès à un membre statique ou la première instance.

```csharp
public class Configuration
{
    public static readonly string ChaineConnexion;
    static Configuration()
    {
        ChaineConnexion = ChargerDepuisFichier();
    }
    private static string ChargerDepuisFichier() => "Server=...";
}
```
