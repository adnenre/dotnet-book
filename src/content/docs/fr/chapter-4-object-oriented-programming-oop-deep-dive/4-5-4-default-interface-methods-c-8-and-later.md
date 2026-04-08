---
title: Méthodes d'interface par défaut (C# 8+)
sidebar:
  order: 99
  label: 4.5.4 Méthodes d'interface par défaut (C# 8+)
---

**Contexte** : C# 8 introduit les implémentations par défaut dans les interfaces. Cela permet d'ajouter des membres sans casser les implémentations existantes.

```csharp
public interface IJournal
{
    void Log(string message);
    void LogErreur(string erreur) => Log($"ERREUR: {erreur}");
}
public class ConsoleLogger : IJournal
{
    public void Log(string message) => Console.WriteLine(message);
    // LogErreur est optionnel
}
```
