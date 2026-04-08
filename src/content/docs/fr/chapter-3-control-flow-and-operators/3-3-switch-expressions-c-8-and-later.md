---
title: Expressions switch (C# 8+)
sidebar:
  order: 11
  label: 3.3 Expressions switch C# 8 et ultérieur
---

Les expressions switch offrent une syntaxe plus concise.

## Code

```csharp
int day = 2;
string dayType = day switch
{
    1 or 7 => "Weekend",
    _ => "Weekday"
};
Console.WriteLine(dayType);
```

## Exécution de l'application

```bash
dotnet run
```

## Résultat

```shell
Weekday
```
