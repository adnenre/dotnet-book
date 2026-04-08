---
title: Types valeur
sidebar:
  order: 1
  label: 2.1 Types valeur
---

Les types valeur stockent les données directement sur la pile. Lorsque vous assignez un type valeur à une autre variable, une copie est effectuée.

## Code

```csharp
int a = 10;
int b = a; // copie
b = 20;
Console.WriteLine($"a: {a}, b: {b}");
```

## Exécution de l'application

```bash
dotnet run
```

## Résultat

```shell
a: 10, b: 20
```
