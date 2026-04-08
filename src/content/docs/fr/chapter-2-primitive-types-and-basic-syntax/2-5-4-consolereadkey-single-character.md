---
title: Console.ReadKey
sidebar:
  order: 35
  label: 2.5.4 Console.ReadKey un seul caractère
---

`Console.ReadKey` lit une seule pression de touche sans attendre la touche Entrée.

## Code

```csharp
Console.Write("Press any key: ");
var key = Console.ReadKey();
Console.WriteLine($"\nYou pressed: {key.KeyChar}");
```

## Exécution de l'application

```bash
dotnet run
```

## Résultat (exemple avec 'A')

```shell
Press any key: A
You pressed: A
```
