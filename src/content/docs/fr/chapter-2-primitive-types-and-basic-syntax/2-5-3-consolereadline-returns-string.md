---
title: Console.ReadLine
sidebar:
  order: 34
  label: 2.5.3 Console.ReadLine retourne une chaîne
---

`Console.ReadLine` lit une ligne d'entrée et la retourne sous forme de chaîne.

## Code

```csharp
Console.Write("Enter text: ");
string input = Console.ReadLine();
Console.WriteLine($"You entered: {input}");
```

## Exécution de l'application

```bash
dotnet run
```

## Résultat (exemple "test")

```shell
Enter text: test
You entered: test
```
