---
title: Entrées/sorties basiques
sidebar:
  order: 31
  label: 2.5 Entrées-sorties basiques
---

Entrées et sorties console de base à l'aide des méthodes `Console`.

## Code

```csharp
Console.Write("Enter your name: ");
string name = Console.ReadLine();
Console.WriteLine($"Hello, {name}!");
```

## Exécution de l'application

```bash
dotnet run
```

## Résultat (exemple avec "Alice")

```shell
Enter your name: Alice
Hello, Alice!
```
