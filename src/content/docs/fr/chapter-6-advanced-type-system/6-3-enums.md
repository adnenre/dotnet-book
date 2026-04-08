---
title: Énumérations (enum)
sidebar:
  order: 145
  label: 6.3 Énumérations (enum)
---

**Contexte** : Une énumération définit un ensemble de constantes nommées. Les énumérations rendent le code plus lisible et plus sûr.

```csharp
public enum Color
{
    Red,
    Green,
    Blue
}
```

## Exemple d'utilisation dans le monde réel

**Codes d’état HTTP** : Définissez une énumération pour les codes d’état HTTP (`200 OK`, `404 NotFound`) afin d’éviter les nombres magiques.

**Exemple** : Dans ASP.NET Core, [`HttpStatusCode`](https://docs.microsoft.com/en-us/dotnet/api/system.net.httpstatuscode) est une énumération. [`DayOfWeek`](https://docs.microsoft.com/en-us/dotnet/api/system.dayofweek) est également une énumération intégrée.

## Sections connexes

- [6.3.1 Définition d’enum](/fr/chapter-6-advanced-type-system/6-3-1-enum-definition)
- [6.3.2 Type sous‑jacent](/fr/chapter-6-advanced-type-system/6-3-2-underlying-type)
- [6.3.3 Enum Flags](/fr/chapter-6-advanced-type-system/6-3-3-flags-enum)
