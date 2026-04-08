---
title: Chaîne else if
sidebar:
  order: 3
  label: 3.1.2 else if enchaîné
---

Utilisez `else if` pour tester plusieurs conditions.

## Code

```csharp
int score = 85;
if (score >= 90)
    Console.WriteLine("A");
else if (score >= 80)
    Console.WriteLine("B");
else if (score >= 70)
    Console.WriteLine("C");
else
    Console.WriteLine("F");
```

## Exécution de l'application

```bash
dotnet run
```

## Résultat

```shell
B
```
