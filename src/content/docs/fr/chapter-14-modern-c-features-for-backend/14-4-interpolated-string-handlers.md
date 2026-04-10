---
title: Gestionnaires de chaînes interpolées
sidebar:
  order: 707
  label: 14.4 Gestionnaires de chaînes interpolées
---

**Contexte** : Les gestionnaires de chaînes interpolées (C# 10) permettent de personnaliser la façon dont les chaînes interpolées sont traitées. Au lieu de toujours allouer une chaîne, vous pouvez conditionnellement construire le résultat, sauter le formatage coûteux, ou écrire directement dans une destination. C'est une optimisation de performance, particulièrement pour les frameworks de journalisation qui n'ont peut‑être pas besoin de formater le message si le niveau de log est désactivé.

## Exemple d'utilisation

```csharp
using System;
using System.Runtime.CompilerServices;

// Gestionnaire personnalisé simplifié (conceptuel)
[InterpolatedStringHandler]
public ref struct GestionnaireLogInterpole
{
    private string _resultat;
    public GestionnaireLogInterpole(int longueurLitterale, int nombreFormate, bool active, out bool doitAjouter)
    {
        doitAjouter = active;
        if (active) _resultat = string.Empty;
    }
    public void AppendLiteral(string s) => _resultat += s;
    public void AppendFormatted<T>(T t) => _resultat += t?.ToString();
    public override string ToString() => _resultat;
}

static class Journal
{
    public static void Debug(GestionnaireLogInterpole handler)
    {
        if (EstDebugActive) Console.WriteLine(handler.ToString());
    }
    public static bool EstDebugActive { get; set; } = true;
}

class Program
{
    static void Main()
    {
        Journal.Debug($"Utilisateur {42} connecté"); // Formaté uniquement si EstDebugActive est true
    }
}
```

## Sortie console

```shell
dotnet run
Utilisateur 42 connecté
```

## Remarques importantes

- Le gestionnaire est un `ref struct` pour la performance (pas d'allocation tas).
- L'attribut `[InterpolatedStringHandler]` indique au compilateur d'utiliser ce type.
- Le constructeur reçoit `longueurLitterale`, `nombreFormate`, et éventuellement des paramètres personnalisés.

## Exemple d'utilisation dans le monde réel

**Microsoft.Extensions.Logging** – Utilise des gestionnaires de chaînes interpolées pour éviter de formater les messages de log lorsque le niveau n'est pas activé.  
Voir [documentation .NET sur les gestionnaires de chaînes interpolées](https://docs.microsoft.com/fr-fr/dotnet/csharp/whats-new/tutorials/interpolated-string-handler).

## Sections connexes

- [14.4.1 Optimisation des performances pour la journalisation](/fr/chapter-14-modern-csharp-features-for-backend/14-4-1-performance-optimisation-for-logging)
- [14.4.2 Structure InterpolatedStringHandler](/fr/chapter-14-modern-csharp-features-for-backend/14-4-2-interpolatedstringhandler-struct)
