---
title: Inférence de type avec var
sidebar:
  order: 24
  label: 2.3.3 Inférence de type avec var
---

Le mot‑clé `var` permet au compilateur de déduire le type à partir de l'expression d'initialisation.

## Code

```csharp
var number = 10; // int
var text = "Hi"; // string
var pi = 3.14; // double
Console.WriteLine($"{number}, {text}, {pi}");
```

## Exécution de l'application

```bash
dotnet run
```

## Résultat

```shell
10, Hi, 3.14
```
