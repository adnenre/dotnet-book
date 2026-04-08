---
title: Parse et TryParse
sidebar:
  order: 40
  label: 2.6.4 Parse et TryParse
---

`Parse` lève une exception en cas d'échec ; `TryParse` retourne `false`.

## Code

```csharp
string input = "456";
if (int.TryParse(input, out int result))
Console.WriteLine($"Parsed: {result}");
else
Console.WriteLine("Invalid");
```

## Exécution de l'application

```bash
dotnet run
```

## Résultat

```shell
Parsed: 456
```
