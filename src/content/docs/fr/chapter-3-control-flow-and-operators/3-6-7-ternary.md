---
title: Opérateur ternaire
sidebar:
  order: 31
  label: 3.6.7 Ternaire
---

L'opérateur ternaire `condition ? valeur_si_vrai : valeur_si_faux` retourne l'une des deux valeurs.

## Code

```csharp
int age = 20;
string status = age >= 18 ? "Adult" : "Minor";
Console.WriteLine(status);
```

## Exécution de l'application

```bash
dotnet run
```

## Résultat

```shell
Adult
```
