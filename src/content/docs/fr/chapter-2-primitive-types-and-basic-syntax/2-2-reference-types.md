---
title: Types référence
sidebar:
  order: 17
  label: 2.2 Types référence
---

Les types référence stockent une référence vers les données sur le tas. L'assignation copie la référence, pas les données.

## Code

```csharp
class Person { public string Name; }
Person p1 = new Person();
p1.Name = "Alice";
Person p2 = p1; // p2 référence le même objet
p2.Name = "Bob";
Console.WriteLine(p1.Name); // Bob
```

## Exécution de l'application

```bash
dotnet run
```

## Résultat

```shell
Bob
```
