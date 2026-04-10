---
title: CallerArgumentExpression
sidebar:
  order: 712
  label: 14.5.2 CallerArgumentExpression
---

**Contexte** : `[CallerArgumentExpression]` (C# 10) capture l'expression source passée à un paramètre de méthode sous forme de chaîne. Il est utilisé pour créer de meilleures aides à l'assertion et à la validation, car vous pouvez afficher l'expression réelle qui a causé l'échec sans écrire manuellement un message.

## Exemple d'utilisation

```csharp
using System;
using System.Runtime.CompilerServices;

public static class Garde
{
    public static void NonNull<T>(T valeur, [CallerArgumentExpression("valeur")] string expression = null) where T : class
    {
        if (valeur == null)
            throw new ArgumentNullException(expression);
    }
}

class Program
{
    static void Main()
    {
        string nom = null;
        Garde.NonNull(nom); // Lève une exception avec l'expression "nom"
    }
}
```

## Sortie console

```shell
Exception non gérée : System.ArgumentNullException: nom (Paramètre 'nom')
```

## Remarques importantes

- Le paramètre de l'attribut est le nom du paramètre cible (ex. `"valeur"`).
- Le compilateur remplit `expression` avec la représentation source de l'argument.
- Très utile pour les bibliothèques de validation et les aides à l'assertion.

## Exemple d'utilisation dans le monde réel

**FluentAssertions** – Utilise `CallerArgumentExpression` pour afficher quelle expression a échoué dans les messages d'assertion.  
Voir [documentation .NET sur CallerArgumentExpression](https://docs.microsoft.com/fr-fr/dotnet/api/system.runtime.compilerservices.callerargumentexpressionattribute).

## Sections connexes

- [14.5 Attributs d'information appelant](/fr/chapter-14-modern-csharp-features-for-backend/14-5-caller-info-attributes)
- [14.5.1 CallerMemberName](/fr/chapter-14-modern-csharp-features-for-backend/14-5-1-callermembername)
