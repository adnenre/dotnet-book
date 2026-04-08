---
title: Opérateur conditionnel null
sidebar:
  order: 30
  label: 3.6.6 Null conditionnel
---

L'opérateur conditionnel null `?.` accède à un membre uniquement si l'objet n'est pas nul.

## Code

```csharp
string text = null;
int? length = text?.Length;
Console.WriteLine(length ?? 0);
```

## Exécution de l'application

```bash
dotnet run
```

## Résultat

```shell
0
```
