---
title: Clause else
sidebar:
  order: 4
  label: 3.1.3 else
---

La clause `else` s'exécute lorsque la condition du `if` est fausse.

## Code

```csharp
int age = 16;
if (age >= 18)
    Console.WriteLine("Adult");
else
    Console.WriteLine("Minor");
```

## Exécution de l'application

```bash
dotnet run
```

## Résultat

```shell
Minor
```
