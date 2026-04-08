---
title: Classe Convert
sidebar:
  order: 39
  label: 2.6.3 Classe Convert
---

La classe `Convert` fournit des méthodes statiques pour la conversion de types.

## Code

```csharp
string s = "123";
int i = Convert.ToInt32(s);
double d = Convert.ToDouble(s);
Console.WriteLine($"int: {i}, double: {d}");
```

## Exécution de l'application

```bash
dotnet run
```

## Résultat

```shell
int: 123, double: 123
```
