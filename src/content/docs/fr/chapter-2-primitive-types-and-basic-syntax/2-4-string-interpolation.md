---
title: Interpolation de chaînes
sidebar:
  order: 27
  label: 2.4 Interpolation de chaînes
---

L'interpolation de chaînes intègre des expressions dans une chaîne à l'aide de `$` et `{}`.

## Code

```csharp
string name = "Alice";
int age = 30;
Console.WriteLine($"Name: {name}, Age: {age}");
```

## Exécution de l'application

```bash
dotnet run
```

## Résultat

```shell
Name: Alice, Age: 30
```
